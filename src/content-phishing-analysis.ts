import finance from './static/finance.ts'
import ecommerce from './static/ecommerce.ts'
import news from './static/news.ts'
import { createApp } from 'vue'
// @ts-ignore
import PhishingAlert from './components/PhishingAlert.vue'
import styles from './content-phishing-analysis.css?inline'
import { analyzeDomain } from './utils/domainUtils.ts'
import { extractWebsiteInfo } from './utils/extractWebsiteInfo.ts'
import { setupUGCDetection } from './utils/ugcDetector.ts'
import { highlightUGCThreats } from './utils/highlightUGC.ts'
import UGCThreatIcon from './components/UGCThreatIcon.vue'
import type { DomainAnalysis, ContentAnalysis } from './store'
import { AnalysisStatus } from './constants/analysisStatus'
import { RiskLevel } from './constants/riskLevels'
import { createSocialAnalyzer } from './social-analyzers/analyzer-creator';

const PRE_UGC_ANALYSIS_PROMPT = `You are a security expert analyzing content for potential threats. Your first task is to determine if the content is user-generated (UGC), then analyze any UGC for security concerns.`;
export const UGC_ANALYSIS_PROMPT = `

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
- Treat UGC as safe when it doesn't contain threats or when it is an article or post describing security threats, phishing attempts, sharing experiences with scams, or providing security advice
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

export type PhishingAnalysis = {
  title: string
  violations: {
    rule: string
    severity: RiskLevel
    explanation: string
  }[]
  overallRiskScore: RiskLevel
  overallConfidence: RiskLevel
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

  createApp(PhishingAlert, { ...data }).mount(container)
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

  analysis.title = 'Suspicious Content Detected'
  const app = createApp(PhishingAlert, analysis)
  app.mount(container)
  document.body.appendChild(shadowHost)
}

export function showUGCThreatIcon(wrapper: HTMLElement, severity: RiskLevel, analysis: any) {
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
export function setupUGCAlertListener() {
  // @ts-ignore Remove existing listener if any
  document.removeEventListener('show-ugc-alert', handleUGCAlert)

  //@ts-ignoreAdd new listener
  document.addEventListener('show-ugc-alert', handleUGCAlert)
}

// Handler function for the event
function handleUGCAlert(event: CustomEvent) {
  showUGCThreatAlert(event.detail)
}

async function analyzeUGCElements(elements: any[], session: any) {
  const allThreats: PhishingAnalysis = {
    title: 'Suspicious Content Detected',
    violations: [],
    overallRiskScore: 'LOW' as RiskLevel,
    overallConfidence: 'HIGH' as RiskLevel,
    isSafe: true,
    recommendation: 'No suspicious user-generated content detected.',
  }

  let hasThreats = false

  for (const ugc of elements) {
    sendAnalysisToBackground({
      content: allThreats,
      status: AnalysisStatus.STARTING_CONTENT_ANALYSIS,
    })
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
        if (analysis.overallRiskScore === RiskLevel.HIGH) {
          allThreats.overallRiskScore = RiskLevel.HIGH
        } else if (
          analysis.overallRiskScore === RiskLevel.MEDIUM &&
          allThreats.overallRiskScore !== RiskLevel.HIGH
        ) {
          allThreats.overallRiskScore = RiskLevel.MEDIUM
        }

        // Update confidence score
        if (analysis.overallConfidence === RiskLevel.LOW) {
          allThreats.overallConfidence = RiskLevel.LOW
        } else if (
          analysis.overallConfidence === RiskLevel.MEDIUM &&
          allThreats.overallConfidence === RiskLevel.HIGH
        ) {
          allThreats.overallConfidence = RiskLevel.MEDIUM
        }

        const shouldHighlight = await shouldHighlightUGC()
        if (shouldHighlight) {
          highlightUGCThreats(ugc.container, analysis.overallRiskScore)
          showUGCThreatIcon(ugc.container, analysis.overallRiskScore, analysis)
          ugc.container.dataset.ugcAnalysis = JSON.stringify(analysis)
        } else {
          console.log('UGC highlighting disabled by user preferences')
        }
      }
    } catch (e) {
      console.error('Error analyzing UGC element:', e)
    }
  }

  if (hasThreats) {
    allThreats.isSafe = false
    allThreats.recommendation = 'Suspicious user-generated content detected. Review with caution.'
  }
  sendAnalysisToBackground({ status: AnalysisStatus.ANALYSIS_FINISHED, content: allThreats })

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

  // Send status update before starting analysis
  sendAnalysisToBackground({
    status: AnalysisStatus.STARTING_CONTENT_ANALYSIS,
  })

  const session = await window.ai.languageModel.create({
    topK: 1,
    temperature: 0.1,
    systemPrompt: PRE_UGC_ANALYSIS_PROMPT + UGC_ANALYSIS_PROMPT,
  })

  try {
    await analyzeUGCElements(elements, session)
  } finally {
    session.destroy()
  }
}

function sendAnalysisToBackground(analysis: {
  domain?: DomainAnalysis
  content?: ContentAnalysis
  status?: AnalysisStatus
}) {
  const message = {
    type: 'UPDATE_ANALYSIS',
    payload: {
      domainAnalysis: analysis.domain,
      contentAnalysis: analysis.content,
      status: analysis.status,
    },
  }
  console.log('Sending message to background:', message)
  chrome.runtime.sendMessage(message)
}

async function shouldShowPhishingAlert(): Promise<boolean> {
  const data = await chrome.storage.local.get('displaySuspiciousDomainAlerts')
  return data?.displaySuspiciousDomainAlerts ?? true // Default to true if not set
}

async function shouldHighlightUGC(): Promise<boolean> {
  const data = await chrome.storage.local.get('highlightSuspiciousUGC')
  return data?.highlightSuspiciousUGC ?? true // Default to true if not set
}

// Main execution
;(async () => {
  const domain = location.hostname.replace(/^www\./, '');
  

  const analyzer = createSocialAnalyzer(domain)
  if (analyzer) {
    console.log('Social content analyzer initialized');
    analyzer.initialize();
    return;
  }

  sendAnalysisToBackground({ status: AnalysisStatus.STARTING_DOMAIN_ANALYSIS })
  console.log('Analyzing domain...')
  const analysisResult = analyzeDomain(domain, [...finance, ...ecommerce, ...news])
  sendAnalysisToBackground({
    domain: analysisResult,
    status: AnalysisStatus.STARTING_CONTENT_ANALYSIS,
  })

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

    const websiteInfo = await extractWebsiteInfo(session, document)

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
${websiteInfo}
------------------------------`
    console.log('Website content analysis: Prompt text', promptText)

    const promptResult = await session.prompt(promptText)
    console.log('Website content analysis: Prompt result', promptResult)

    let phishingAnalysis: PhishingAnalysis | null = null

    try {
      phishingAnalysis = JSON.parse(promptResult)
    } catch (e) {
      console.error('Error parsing website content analysis', e)
    }

    if (phishingAnalysis) {
      sendAnalysisToBackground({
        content: phishingAnalysis,
        status: AnalysisStatus.ANALYSIS_FINISHED,
      })
    }

    if (phishingAnalysis?.isSafe === false) {
      console.log('Website content is not safe.')
      const shouldShow = await shouldShowPhishingAlert()
      if (shouldShow) {
        phishingAnalysis.title = 'Security Warning'
        await showPhishingAlert(phishingAnalysis)
      } else {
        console.log('Phishing alert suppressed due to user preferences')
      }
    } else if (phishingAnalysis?.isSafe === true) {
      console.log('Website content is safe.')
    }

    session.destroy()
  } else {
    console.log('Domain is not suspicious. Setting up UGC detection...')

    // Set up UGC alert listener
    setupUGCAlertListener()

    //@ts-ignore Set up UGC detection with event handler
    document.addEventListener('ugc-detected', handleUGCDetection)

    // Start UGC detection
    const cleanup = setupUGCDetection(document)

    // Clean up when extension is disabled or page is unloaded
    window.addEventListener('unload', () => {
      cleanup()
      //@ts-ignore Remove UGC detection event listener
      document.removeEventListener('ugc-detected', handleUGCDetection)
    })
  }
})()
