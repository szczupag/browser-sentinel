import finance from './static/finance.ts'
import ecommerce from './static/ecommerce.ts'
import { createApp } from 'vue'
// @ts-ignore
import PhishingAlert from './components/PhishingAlert.vue'
import styles from './content-phishing-analysis.css?inline'
import { analyzeDomain } from './utils/domainUtils.ts'
import { estimateTokens, extractWebsiteInfo } from './utils/extractWebsiteInfo.ts'

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
