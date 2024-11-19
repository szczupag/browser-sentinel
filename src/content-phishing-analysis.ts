import { distance as levenshtein } from 'fastest-levenshtein'
import finance from './static/finance.ts'
import ecommerce from './static/ecommerce.ts'
import { createApp } from 'vue'
// @ts-ignore
import PhishingAlert from './components/PhishingAlert.vue'
import styles from './content-phishing-analysis.css?inline'

const initialPrompt = `
  You are a security expert analyzing websites for potential phishing indicators. Your task is to analyze provided website content and combine it with domain analysis results to detect phishing attempts.

  IMPORTANT:
  - Base your analysis ONLY on the provided information
  - Do not make assumptions about information that is not provided
  - If information is insufficient, reflect this in your confidence score
  - Never invent or assume details that are not explicitly given

  TASK DETAILS:
  - Analyze the provided website content for suspicious patterns. Provided website content will contain key information such as page titles, meta tags, navigation menu items, headings, buttons, images, links, and main textual content.
  - Consider the domain analysis results that are provided
  - Generate a structured JSON response with security recommendations

  ANALYSIS GUIDELINES:
  1. Look for mismatched branding or inconsistent terminology
  2. Check for urgency or pressure tactics in content
  3. Identify suspicious requests for sensitive information
  4. Consider security indicators (HTTPS, certificates)
  5. Combine content analysis with domain similarity findings

  RESPONSE REQUIREMENTS:
  1. Maximum 4 violations
  2. No duplicate rule types
  3. Prioritize domain-related violations
  4. Brief explanations (max 20 words)
  5. No technical terms
  6. Must be valid parseable JSON
  7. Use only these rule names: "Deceptive Domain", "Content Mismatch", "Missing Security", "Suspicious Branding"

  RESPONSE EXAMPLE:
  Input: Domain similar to "paypal.com", poor grammar, requests for banking info
  Output: {
    "violations": [
      {
        "rule": "Deceptive Domain",
        "severity": "HIGH",
        "explanation": "Website mimics PayPal's address with slight spelling variation"
      },
      {
        "rule": "Content Mismatch",
        "severity": "HIGH",
        "explanation": "Poor grammar and unusual payment request patterns"
      }
    ],
    "overallRiskScore": "HIGH",
    "overallConfidence": "HIGH",
    "isSafe": false,
    "recommendation": "Stop immediately. This is a fake PayPal site trying to steal your information"
  }

  Your response must be valid JSON that can be parsed by JSON.parse(). Ensure proper escaping of any characters within string fields. No additional text or formatting allowed.`

let vueApp = null
type Risk = 'HIGH' | 'MEDIUM' | 'LOW'
type PhishingAnalysis = {
  violations: {
    rule: string
    severity: Risk
    explanation: string
  }[]
  overallRiskScore: Risk
  overallConfidence: Risk
  isSafe: boolean
  recommendation: string
}

/**
 * Extracts the main domain from a full domain string.
 * Example: "bank.barclays.co.uk" -> "barclays.co.uk"
 *
 * @param {string} domain - Full domain including potential subdomains
 * @returns {string} Main domain without subdomains
 */
function extractMainDomain(domain: string): string {
  // Handle special cases for country TLDs (like .co.uk, .com.br)
  const parts = domain.split('.')
  if (parts.length >= 3 && parts[parts.length - 2] === 'co') {
    // For domains like *.co.uk, return last 3 parts
    return parts.slice(-3).join('.')
  }
  // For regular domains, return last 2 parts
  return parts.slice(-2).join('.')
}

/**
 * Analyzes a domain for potential phishing attempts by comparing it against a list of legitimate domains.
 * The analysis includes Levenshtein distance comparison and suspicious variation detection.
 *
 * @param {string} currentDomain - The domain to analyze (can include 'www.' prefix)
 * @param {string[]} legitimateDomains - Array of legitimate domains to check against
 * @returns {Object} Analysis result containing:
 *   - isSuspicious {boolean} - Whether the domain is suspicious
 *   - legitimateDomain {string} - The matching legitimate domain (if found)
 *   - distance {number} - Levenshtein distance (if found)
 *   - similarity {number} - Similarity score between 0 and 1 (if found)
 */
function analyzeDomain(
  currentDomain: string,
  legitimateDomains: string[]
): {
  isSuspicious: boolean
  legitimateDomain?: string
  distance?: number
  similarity?: number
} {
  // Remove 'www.' prefix and normalize domain
  const normalizedCurrentDomain = currentDomain.toLowerCase().replace(/^www\./, '')
  const mainCurrentDomain = extractMainDomain(normalizedCurrentDomain)

  // Check each legitimate domain
  for (const originalLegitimateDomain of legitimateDomains) {
    // Normalize legitimate domain as well
    const legitimateDomain = originalLegitimateDomain.toLowerCase().replace(/^www\./, '')
    const mainLegitimateDomain = extractMainDomain(legitimateDomain)

    // Skip if current domain is a subdomain of legitimate domain
    if (normalizedCurrentDomain.endsWith(`.${mainLegitimateDomain}`)) {
      return { isSuspicious: false }
    }

    const distance = levenshtein(mainCurrentDomain, mainLegitimateDomain)
    const similarity = 1 - distance / mainLegitimateDomain.length

    // If very similar but not exact match
    if (distance <= 2 && similarity >= 0.85 && mainCurrentDomain !== mainLegitimateDomain) {
      return {
        isSuspicious: true,
        legitimateDomain: originalLegitimateDomain,
        distance,
        similarity,
      }
    }

    // Check for suspicious variations (domain.contains but not exact match)
    const legitWithoutTLD = mainLegitimateDomain.split('.')[0]
    if (
      mainCurrentDomain.includes(legitWithoutTLD) &&
      mainCurrentDomain !== mainLegitimateDomain &&
      similarity >= 0.5
    ) {
      return {
        isSuspicious: true,
        legitimateDomain: originalLegitimateDomain,
        distance,
        similarity,
      }
    }
  }

  return { isSuspicious: false }
}

function showPhishingAlert(data: any) {
  const shadowHost = document.createElement('div')
  shadowHost.setAttribute('id', 'phishing-alert-app-shadow-host')
  shadowHost.style.all = 'unset'
  const shadowRoot = shadowHost.attachShadow({ mode: 'open' })
  const container = document.createElement('div')
  const cssContainer = document.createElement('style')
  cssContainer.textContent = styles

  shadowRoot.appendChild(cssContainer)
  shadowRoot.appendChild(container)
  container.id = 'phishing-alert-app'

  vueApp = createApp(PhishingAlert, { ...data })
  vueApp.mount(container)
  document.body.appendChild(shadowHost)
}

function estimateTokens(text: string) {
  // Very rough approximation:  Assume 1 token ≈ 0.75 words (this is a highly variable estimate)
  const words = text.split(/\s+/).filter((word: string) => word.length > 0).length // Split by whitespace, remove empty strings
  const estimatedTokens = Math.round(words * 0.75)

  // Add a small buffer for punctuation and special characters
  const buffer = Math.round(words * 0.1) // 10% buffer - this is arbitrary

  return estimatedTokens + buffer
}

function cleanText(text: string): string {
  return text
    .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
    .replace(/^\s+|\s+$/g, '') // Trim start and end
    .replace(/\t/g, ' ') // Replace tabs with space
}

/**
 * Extracts website info while keeping within token limit
 * @param {Document} document - The document to analyze
 * @param {number} maxTokens - Maximum allowed tokens
 * @returns {string} Compressed website information
 */
function extractWebsiteInfo(document: Document, maxTokens: number = 200): string {
  const info: string[] = []
  let currentTokens = 0

  const addContent = (content: string): boolean => {
    const tokenCount = estimateTokens(content)
    if (currentTokens + tokenCount <= maxTokens * 0.9) {
      info.push(content)
      currentTokens += tokenCount
      return true
    }
    return false
  }

  // Title
  const title = cleanText(document.title)
  if (title) {
    if (!addContent('PAGE TITLE: ' + title)) return info.join('\n')
  }

  // Important meta tags
  const metaSelectors = [
    'meta[name="description"]',
    'meta[name="keywords"]',
    'meta[property="og:title"]',
    'meta[property="og:description"]',
    'meta[property="og:site_name"]',
    'meta[name="application-name"]',
    'meta[name="author"]',
  ]
  const metaTags = document.querySelectorAll(metaSelectors.join(','))
  if (metaTags.length > 0) {
    if (!addContent('\nMETA INFORMATION:')) return info.join('\n')
    for (const tag of metaTags) {
      const name = tag.getAttribute('name') || tag.getAttribute('property')
      const content = tag.getAttribute('content')
      if (name && content) {
        if (!addContent(`META ${name}: ${cleanText(content)}`)) return info.join('\n')
      }
    }
  }

  // Forms
  const forms = document.querySelectorAll('form')
  if (forms.length > 0) {
    if (!addContent('\nFORM DETAILS:')) return info.join('\n')
    for (const form of forms) {
      if (!addContent(`ACTION URL: ${form.action}`)) return info.join('\n')
      const inputs = form.querySelectorAll('input[type], select, textarea')
      for (const input of inputs) {
        const type = input.getAttribute('type') || input.tagName.toLowerCase()
        const name = input.getAttribute('name')
        if (type && type !== 'hidden') {
          if (!addContent(`INPUT FIELD: type=${type}${name ? `, name=${name}` : ''}`)) {
            return info.join('\n')
          }
        }
      }
    }
  }

  // Headings
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  if (headings.length > 0) {
    if (!addContent('\nPAGE STRUCTURE:')) return info.join('\n')
    for (const h of headings) {
      const text = cleanText(h.textContent || '')
      if (text.length > 0) {
        if (!addContent(`${h.tagName}: ${text}`)) return info.join('\n')
      }
    }
  }

  // Buttons
  const buttons = document.querySelectorAll('button, input[type="submit"], input[role="button"]')
  if (buttons.length > 0) {
    if (!addContent('\nINTERACTIVE ELEMENTS:')) return info.join('\n')
    for (const btn of buttons) {
      const text = cleanText(btn.textContent || btn.getAttribute('value') || '')
      if (text.length > 0) {
        if (!addContent(`BUTTON: ${text}`)) return info.join('\n')
      }
    }
  }

  // Links
  const links = document.querySelectorAll('a[href]')
  if (links.length > 0) {
    if (!addContent('\nNAVIGATION:')) return info.join('\n')
    for (const link of links) {
      const href = link.getAttribute('href')
      const text = cleanText(link.textContent || '')
      if (text.length > 1 && href && !href.startsWith('#')) {
        if (!addContent(`LINK: text="${text}", url=${href}`)) return info.join('\n')
      }
    }
  }

  // Style Information
  if (!addContent('\nSTYLE INFORMATION:')) return info.join('\n')

  // Logo
  const logos = document.querySelectorAll('img[src*="logo"], img[alt*="logo"]')
  for (const logo of logos) {
    const src = logo.getAttribute('src')
    const alt = logo.getAttribute('alt')
    if (src || alt) {
      if (!addContent(`LOGO: ${alt || ''}, source=${src || ''}`)) return info.join('\n')
    }
  }

  // Background colors of main elements
  const mainElement = document.querySelector('main') || document.body
  const header = document.querySelector('header')
  const computedStyle = window.getComputedStyle(mainElement)
  const headerStyle = header ? window.getComputedStyle(header) : null

  if (headerStyle?.backgroundColor && headerStyle.backgroundColor !== 'rgba(0, 0, 0, 0)') {
    if (!addContent(`HEADER COLOR: ${headerStyle.backgroundColor}`)) return info.join('\n')
  }
  if (computedStyle.backgroundColor && computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)') {
    if (!addContent(`MAIN BACKGROUND: ${computedStyle.backgroundColor}`)) return info.join('\n')
  }

  // Brand-colored elements (buttons, links)
  const brandElements = document.querySelectorAll(
    'a, button, .btn, [class*="primary"], [class*="brand"]'
  )
  const colorSet = new Set<string>()
  brandElements.forEach((el) => {
    const style = window.getComputedStyle(el)
    const color = style.backgroundColor
    if (color && color !== 'rgba(0, 0, 0, 0)') {
      colorSet.add(color)
    }
  })
  if (colorSet.size > 0) {
    const colors = Array.from(colorSet).slice(0, 3) // Limit to top 3 colors
    if (!addContent(`BRAND COLORS: ${colors.join(', ')}`)) return info.join('\n')
  }

  // Favicon
  const favicon = document.querySelector('link[rel*="icon"]')
  if (favicon) {
    const href = favicon.getAttribute('href')
    if (href && !addContent(`FAVICON: ${href}`)) return info.join('\n')
  }

  // Main text content
  const mainText = document.body.querySelectorAll('p, li')
  if (mainText.length > 0) {
    if (!addContent('\nMAIN CONTENT:')) return info.join('\n')
    for (const el of mainText) {
      const text = cleanText(el.textContent || '')
      if (text.length > 1) {
        if (!addContent(`TEXT: ${text}`)) return info.join('\n')
      }
    }
  }

  return info.join('\n')
}

;(async () => {
  const domain = location.hostname
  console.log('Phishing analysis: Analyzing domain...')
  const analysisResult = analyzeDomain(domain, [...finance, ...ecommerce])

  if (analysisResult.isSuspicious) {
    console.log('Phishing analysis: Domain is suspicious. Analyzing content...')
    const { available } = await window.ai.languageModel.capabilities()
    if (available !== 'readily') {
      console.log('AI is not ready')
      return
    }

    const session = await window.ai.languageModel.create({
      topK: 1,
      temperature: 0.1,
      systemPrompt: initialPrompt,
    })

    const promptText = `
[Website Analysis Input]
Domain Analysis Results:
- Analyzed Domain: "${domain}"
- HTTPS Status: ${location.protocol === 'https:' ? 'Yes' : 'No'}
- Levenshtein Distance from legitimate domain: ${analysisResult.distance}
- Similarity Score: ${analysisResult.similarity}
- Similar to Legitimate Domain: "${analysisResult.legitimateDomain}"

Website Structure and Content:
------------------------------
${extractWebsiteInfo(document)}
------------------------------`
    console.log('Phishing analysis: Prompt text', promptText, estimateTokens(promptText))

    const promptResult = await session.prompt(promptText)
    console.log('Phishing analysis: Prompt result', promptResult)

    let phishingAnalysis: PhishingAnalysis | null = null

    try {
      phishingAnalysis = JSON.parse(promptResult)
    } catch (e) {
      console.error('Error parsing phishing analysis', e)
    }

    if (phishingAnalysis?.isSafe === false) {
      console.log('Phishing analysis: Content is not safe.')
      await showPhishingAlert(phishingAnalysis)
    } else if (phishingAnalysis?.isSafe === true) {
      console.log('Phishing analysis: Content is safe.')
    }
  } else {
    console.log('Phishing analysis: Domain is not suspicious.')
  }
})()
