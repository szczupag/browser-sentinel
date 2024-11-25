import finance from './static/finance.ts'
import ecommerce from './static/ecommerce.ts'
import { createApp } from 'vue'
// @ts-ignore
import PhishingAlert from './components/PhishingAlert.vue'
import styles from './content-phishing-analysis.css?inline'
import { analyzeDomain } from './utils/domainUtils.ts'
import { estimateTokens, extractWebsiteInfo } from './utils/extractWebsiteInfo.ts'
import { setupUGCDetection } from './utils/ugcDetector.ts'
import { highlightUGCThreats } from './utils/highlightUGC.ts'
import UGCThreatIcon from './components/UGCThreatIcon.vue'
import UGCThreatAlert from './components/UGCThreatAlert.vue'

const UGC_ANALYSIS_PROMPT = `
You are a security expert analyzing content for potential threats. Your first task is to determine if the content is user-generated (UGC), then analyze any UGC for security concerns.

STEP 1 - UGC IDENTIFICATION:
User-generated content typically includes:
- Comments
- Reviews
- Forum posts
- Social media posts
- Chat messages
- User submissions

NOT user-generated content:
- Navigation menus
- Product descriptions
- Official company content
- Static website text
- Terms of service
- Marketing copy

STEP 2 - SECURITY ANALYSIS (Only if UGC is detected):
HIGH SEVERITY (Must report):
- Malware distribution attempts
- Phishing links or requests
- Scam patterns
- Personal information requests
- Financial fraud attempts

MEDIUM SEVERITY (Report if suspicious):
- Suspicious external links
- Unusual urgency in requests
- Impersonation attempts
- Misleading claims
- Suspicious contact requests

LOW SEVERITY (Report if concerning):
- Spam patterns
- Excessive self-promotion
- Unclear intentions
- Minor misleading content

IMPORTANT:
- Base your analysis ONLY on the provided content
- If content is NOT user-generated, return LOW risk and HIGH confidence
- Treat UGC as safe when discussing, warning about, or educating on security threats
- Never invent or assume details that are not explicitly given
- If overallRiskScore is MEDIUM or HIGH, there must be at least one violation
- If there are no violations, overallRiskScore must be LOW

RESPONSE REQUIREMENTS:
1. Maximum 4 violations
2. Brief explanations (max 20 words)
3. Must be valid parseable JSON
4. Use only these rule names: "Phishing Attempt", "Scam Pattern", "Impersonation", "Suspicious Link"

RESPONSE EXAMPLE 1 (Not UGC):
Input: "Our company provides secure payment processing for all major credit cards."
Output: {
  "isUGC": false,
  "violations": [],
  "overallRiskScore": "LOW",
  "overallConfidence": "HIGH",
  "isSafe": true,
  "recommendation": "This is standard website content, not user-generated."
}

RESPONSE EXAMPLE 2 (UGC with threats):
Input: "Hi, I'm from PayPal support. Your account is locked. Send your password to unlock: example@scam.com"
Output: {
  "isUGC": true,
  "violations": [
    {
      "rule": "Impersonation",
      "severity": "HIGH",
      "explanation": "Falsely claims to be PayPal support"
    },
    {
      "rule": "Phishing Attempt",
      "severity": "HIGH",
      "explanation": "Requests password credentials"
    }
  ],
  "overallRiskScore": "HIGH",
  "overallConfidence": "HIGH",
  "isSafe": false,
  "recommendation": "Do not interact with this content. Likely a phishing attempt."
}

RESPONSE EXAMPLE 3 (UGC with no threats):
Input: "Watch out everyone! \"I just received this obvious scam email:URGENT: Your Amazon account has been suspended! Click here to verify: amaz0n-verify.com\". Don't fall for it - notice the suspicious domain and urgency tactics."
Output: {
  "isUGC": true,
  "violations": [],
  "overallRiskScore": "LOW",
  "overallConfidence": "HIGH",
  "isSafe": true,
  "recommendation": "This appears to be a legitimate discussion about security threats. The user is appropriately warning others by sharing and analyzing a scam example. The surrounding context and educational tone indicate this is a helpful security awareness post."
}

Your response must contain only a valid JSON that can be parsed by JSON.parse(). Ensure proper escaping of any characters within string fields. No additional text or formatting allowed.`

const SUSPICIOUS_DOMAIN_ANALYSIS_PROMPT = `
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
export type PhishingAnalysis = {
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

function showUGCThreatAlert(analysis: PhishingAnalysis) {
  const shadowHost = document.createElement('div')
  shadowHost.setAttribute('id', 'ugc-threat-alert-app-shadow-host')
  shadowHost.style.all = 'unset'
  const shadowRoot = shadowHost.attachShadow({ mode: 'open' })
  const container = document.createElement('div')
  const cssContainer = document.createElement('style')
  cssContainer.textContent = styles

  shadowRoot.appendChild(cssContainer)
  shadowRoot.appendChild(container)
  container.id = 'ugc-threat-alert-app'

  const app = createApp(UGCThreatAlert, { analysis })
  app.mount(container)
  document.body.appendChild(shadowHost)
}

function showUGCThreatIcon(
  wrapper: HTMLElement,
  severity: 'HIGH' | 'MEDIUM' | 'LOW',
  analysis: any
) {
  const shadowHost = document.createElement('div')
  shadowHost.setAttribute('id', 'ugc-threat-icon-shadow-host')
  shadowHost.style.all = 'unset'
  const shadowRoot = shadowHost.attachShadow({ mode: 'open' })
  const container = document.createElement('div')
  const cssContainer = document.createElement('style')
  cssContainer.textContent = styles

  shadowRoot.appendChild(cssContainer)
  shadowRoot.appendChild(container)
  container.id = 'ugc-threat-icon-app'

  const app = createApp(UGCThreatIcon, {
    severity,
    analysis,
  })
  app.mount(container)
  wrapper.appendChild(shadowHost)
}

// Add this function at the top level
function setupUGCAlertListener() {
  // Remove existing listener if any
  document.removeEventListener('show-ugc-alert', handleUGCAlert)

  // Add new listener
  document.addEventListener('show-ugc-alert', handleUGCAlert)
}

// Handler function for the event
function handleUGCAlert(event: CustomEvent) {
  showUGCThreatAlert(event.detail)
}

async function analyzeUGCElements(elements: any[], session: any) {
  const allThreats: PhishingAnalysis = {
    violations: [],
    overallRiskScore: 'LOW' as Risk,
    overallConfidence: 'HIGH' as Risk,
    isSafe: true,
    recommendation: 'No suspicious user-generated content detected.',
  }

  let hasThreats = false

  for (const ugc of elements) {
    try {
      const promptText = ugc.content
      console.log('UGC analysis prompt text:', promptText)
      const promptResult = await session.prompt(promptText)
      console.log('UGC analysis prompt result:', promptResult)
      const analysis: PhishingAnalysis = JSON.parse(promptResult)

      if (!analysis.isSafe) {
        hasThreats = true
        allThreats.violations.push(...analysis.violations)

        // Update overall risk score
        if (analysis.overallRiskScore === 'HIGH') {
          allThreats.overallRiskScore = 'HIGH'
        } else if (
          analysis.overallRiskScore === 'MEDIUM' &&
          allThreats.overallRiskScore !== 'HIGH'
        ) {
          allThreats.overallRiskScore = 'MEDIUM'
        }

        // Update confidence score
        if (analysis.overallConfidence === 'LOW') {
          allThreats.overallConfidence = 'LOW'
        } else if (
          analysis.overallConfidence === 'MEDIUM' &&
          allThreats.overallConfidence === 'HIGH'
        ) {
          allThreats.overallConfidence = 'MEDIUM'
        }

        highlightUGCThreats(ugc.container, analysis.overallRiskScore)
        showUGCThreatIcon(ugc.container, analysis.overallRiskScore, analysis)
        ugc.container.dataset.ugcAnalysis = JSON.stringify(analysis)
      }
    } catch (e) {
      console.error('Error analyzing UGC element:', e)
    }
  }

  if (hasThreats) {
    allThreats.isSafe = false
    allThreats.recommendation = 'Suspicious user-generated content detected. Review with caution.'
    // showUGCThreatAlert(allThreats)
  }

  return allThreats
}

async function handleUGCDetection(event: CustomEvent) {
  const { elements, initial } = event.detail
  console.log(`Found UGC candidates (${initial ? 'initial scan' : 'mutation'}):`, elements)

  const { available } = await window.ai.languageModel.capabilities()
  if (available !== 'readily') {
    console.log('AI is not ready')
    return
  }

  const session = await window.ai.languageModel.create({
    topK: 1,
    temperature: 0.1,
    systemPrompt: UGC_ANALYSIS_PROMPT,
  })

  try {
    await analyzeUGCElements(elements, session)
  } finally {
    session.destroy()
  }
}

// Main execution
;(async () => {
  const domain = location.hostname
  console.log('Analyzing domain...')
  const analysisResult = analyzeDomain(domain, [...finance, ...ecommerce])

  if (analysisResult.isSuspicious) {
    console.log('Domain is suspicious. Analyzing content...')
    const { available } = await window.ai.languageModel.capabilities()
    if (available !== 'readily') {
      console.log('AI is not ready')
      return
    }

    const session = await window.ai.languageModel.create({
      topK: 1,
      temperature: 0.1,
      systemPrompt: SUSPICIOUS_DOMAIN_ANALYSIS_PROMPT,
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
    console.log('Website content analysis: Prompt text', promptText, estimateTokens(promptText))

    const promptResult = await session.prompt(promptText)
    console.log('Website content analysis: Prompt result', promptResult)

    let phishingAnalysis: PhishingAnalysis | null = null

    try {
      phishingAnalysis = JSON.parse(promptResult)
    } catch (e) {
      console.error('Error parsing website content analysis', e)
    }

    if (phishingAnalysis?.isSafe === false) {
      console.log('Website content is not safe.')
      await showPhishingAlert(phishingAnalysis)
    } else if (phishingAnalysis?.isSafe === true) {
      console.log('Website content is safe.')
    }

    session.destroy()
  } else {
    console.log('Domain is not suspicious. Setting up UGC detection...')

    // Set up UGC alert listener
    setupUGCAlertListener()

    // Set up UGC detection with event handler
    document.addEventListener('ugc-detected', handleUGCDetection)

    // Start UGC detection
    const cleanup = setupUGCDetection(document)

    // Clean up when extension is disabled or page is unloaded
    window.addEventListener('unload', () => {
      cleanup()
      document.removeEventListener('ugc-detected', handleUGCDetection)
    })
  }
})()
