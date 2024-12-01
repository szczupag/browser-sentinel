import * as InboxSDK from '@inboxsdk/core'
import { type MessageView } from '@inboxsdk/core'
import { createApp } from 'vue'
import GmailPhishingScanner from './GmailPhishingScanner.vue'
import { ScanResult } from './types'
import { highlightThreats } from './highlighter'
import styles from './content-gmail.css?inline'
import SafeBrowsingClient from './SafeBrowsingClient'
import { AnalysisStatus } from '../constants/analysisStatus'
import { ContentAnalysis, DomainAnalysis } from '../store'

// URL Shortener Services
const URL_SHORTENERS = [
  'bit.ly',
  't.co',
  'goo.gl',
  'tinyurl.com',
  'ow.ly',
  'tiny.cc',
  'is.gd',
  'cli.gs',
  'pic.gd',
  'DwarfURL.com',
  'yfrog.com',
  'migre.me',
  'ff.im',
  'tiny.pl',
  'url4.eu',
  'tr.im',
  'twit.ac',
  'su.pr',
  'twurl.nl',
  'snipurl.com',
  'short.to',
  'BudURL.com',
  'ping.fm',
  'post.ly',
  'Just.as',
  'bkite.com',
  'snipr.com',
  'fic.kr',
  'loopt.us',
  'doiop.com',
  'tinyurl.com',
  'short.ie',
  'kl.am',
  'wp.me',
  'rubyurl.com',
  'om.ly',
  'to.ly',
  'bit.do',
  'lnkd.in',
  't.ly',
  'ur1.ca',
  'tiny.cc',
  'yourls.org',
]

interface EmailMetadata {
  fromAddress: string
  fromName: string
  to: string
  subject: string
  links: Array<{
    text: string
    href: string
  }>
  attachments: string[]
}

interface URLAnalysis {
  displayText: string
  actualUrl: string
  domain: string | null
  suspicious: boolean
  reasons: string[]
}

const cssContainer = document.createElement('style')
cssContainer.textContent = styles
document.body.appendChild(cssContainer)

function looksLikeUrl(text: string): boolean {
  // Match common domain patterns
  return /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}/.test(text)
}

function extractDomainFromUrl(url: string): string {
  try {
    const urlObj = new URL(url)
    return urlObj.hostname
  } catch {
    return url
  }
}

function domainsMatch(domain1: string, domain2: string): boolean {
  const getBaseDomain = (domain: string) => {
    const parts = domain.split('.')
    const mainParts = parts.slice(-2)
    return mainParts.join('.')
  }

  return getBaseDomain(domain1) === getBaseDomain(domain2)
}

function parseAnalysisToJson(response: string) {
  const result = {
    suspiciousContent: [],
    analysis: {
      risk: null,
      confidence: null, // Added this
      safe: null,
      recommendation: null,
    },
  }

  try {
    const lines = response
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      if (line === 'OVERALL:') {
        while (i + 1 < lines.length && !lines[i + 1].startsWith('CONCERNS:')) {
          i++
          const currentLine = lines[i]
          if (currentLine.startsWith('Risk:')) {
            // @ts-ignore
            result.analysis.risk = currentLine.split('Risk:')[1].trim()
          } else if (currentLine.startsWith('Safe:')) {
            // @ts-ignore
            result.analysis.safe = currentLine.split('Safe:')[1].trim() === 'YES'
          } else if (currentLine.startsWith('Confidence:')) {
            // Added this
            // @ts-ignore
            result.analysis.confidence = currentLine.split('Confidence:')[1].trim()
          } else if (currentLine.startsWith('Action:')) {
            // @ts-ignore
            result.analysis.recommendation = currentLine.split('Action:')[1].trim()
          }
        }
      }

      if (line === 'CONCERNS:') {
        while (i + 1 < lines.length && lines[i + 1].includes('" - ')) {
          i++
          const concernLine = lines[i]
          const match = concernLine.match(/"([^"]+)"\s*-\s*(HIGH|MEDIUM|LOW)\s*-\s*(.+)/)
          if (match) {
            // @ts-ignore
            result.suspiciousContent.push({
              text: match[1],
              severity: match[2],
              reason: match[3].trim(),
            })
          }
        }
      }
    }

    return result
  } catch (error) {
    console.error('Failed to parse analysis:', error)
    return result
  }
}

function analyzeUrl(displayText: string, href: string): URLAnalysis {
  const reasons: string[] = []

  try {
    const urlObj = new URL(href)
    const hrefDomain = urlObj.hostname

    // Check for URL shorteners
    if (URL_SHORTENERS.some((s) => hrefDomain.includes(s))) {
      reasons.push('Uses URL shortener service')
    }

    // Check for homograph attacks (mixed character sets)
    if (/[^\x00-\x7F]/.test(hrefDomain)) {
      reasons.push('Domain uses non-ASCII characters which might look like regular letters')
    }

    // Check for suspicious display text
    if (looksLikeUrl(displayText)) {
      const displayDomain = extractDomainFromUrl(displayText)
      if (!domainsMatch(displayDomain, hrefDomain)) {
        console.log('displayDomain', displayDomain, ' hrefDomain', hrefDomain)
        reasons.push('Display text shows different domain than actual URL')
      }
    }

    // Check for data/javascript URLs
    if (href.startsWith('data:') || href.startsWith('javascript:')) {
      reasons.push('Potentially malicious URL scheme')
    }

    return {
      displayText,
      actualUrl: href,
      domain: hrefDomain,
      suspicious: reasons.length > 0,
      reasons,
    }
  } catch (error) {
    return {
      displayText,
      actualUrl: href,
      domain: null,
      suspicious: true,
      reasons: ['Invalid URL format'],
    }
  }
}

// Main Analysis Function
async function analyzeEmail(
  messageID: string,
  metadata: EmailMetadata,
  emailText: string
): Promise<ScanResult> {
  const cacheKey = `gmail-scanner-${messageID}`
  const cachedResult = await chrome.storage.local.get(cacheKey)
  if (cachedResult[cacheKey]) {
    console.log('Using cached result for', messageID, cachedResult[cacheKey])
    return cachedResult[cacheKey] as ScanResult
  }
  // Initialize Safe Browsing client
  const safeBrowsing = new SafeBrowsingClient(
    'AIzaSyCRQYkdubK4cut-ypF9Tx6RjIFQtWYHuzk',
    'Sentinel',
    '1.0.0'
  )

  // Analyze all URLs locally first
  const urlAnalysis = metadata.links.map((link) => analyzeUrl(link.text, link.href))

  // Check suspicious URLs against Safe Browsing API
  const suspiciousUrls = urlAnalysis
    //.filter(analysis => analysis.suspicious)
    .map((analysis) => analysis.actualUrl)

  const safeBrowsingResults =
    suspiciousUrls.length > 0 ? await safeBrowsing.checkUrls(suspiciousUrls) : {}

  const totalUrls = Object.keys(safeBrowsingResults).length
  const failedSafeBrowsingUrls = Object.keys(safeBrowsingResults).filter(
    (url) => safeBrowsingResults[url]
  ) // Safe browsing marks a url as safe if it's not safe

  // Create prompt for LLM with technical analysis results
  const promptText = `
You are a security professional specialized in identifying sophisticated phishing attempts. Your task is to analyze emails and identify ONLY genuine security threats. Each section of the prompt is separated by ---

Under no circumstances should you analyze any email addresses found. You can however ask the user to check if it's a trusted sender (in case the final decision depends if the sender is legitimate).

METADATA:
---
Subject: "${metadata.subject}"
${totalUrls > 0 ? (failedSafeBrowsingUrls.length > 0 ? `Google Safe browsing API flagged ${failedSafeBrowsingUrls.length} urls as suspicious.` : `None of the ${totalUrls} urls failed the Safe browsing API check.`) : 'No links present in the email body'}
${metadata.attachments.length > 0 ? `Email contains the following attachments: ${metadata.attachments.join(', ')}` : 'No attachments present in the email body'}
---
ANALYSIS GUIDELINES:
ONLY report text that matches these phishing indicators:

HIGH SEVERITY (Must report):
- Requests for passwords, banking details, or SSN
- Demands for payments or money transfers
- Direct threats of account suspension
- Claims of unexpected money or prizes
- Government/military impersonation
- Requests to move large sums of money

MEDIUM SEVERITY (Report if suspicious):
- Unusual urgency + requests for sensitive actions
- Threats of negative consequences
- Claims that don't match the sender
- Unexpected attachments or links

DO NOT REPORT as concerns:
- Regular deadlines or due dates
- Meeting times or event schedules
- Standard company communications
- Unsubscribe options or footers
- Copyright notices
- Support or help information
- Community guidelines
- Event registration details

SCORING RULES:
- If NO concerning text is found, do not list any CONCERNS
- Only list text that clearly matches phishing patterns
- Maximum 4 most suspicious texts, quoted exactly
- Risk must be LOW if no concerning text is found
- Safe must be YES if no HIGH/MEDIUM concerns exist

CONFIDENCE LEVELS:
HIGH: Clear evidence or absence of threats
MEDIUM: Pattern is unclear
LOW: Insufficient information

RESPOND ONLY WITH THE FOLLOWING EXACT FORMAT - no deviations from it:
----
OVERALL:
Risk: LOW/MEDIUM/HIGH
Confidence: LOW/MEDIUM/HIGH
Safe: YES/NO
Action: one brief recommendation

CONCERNS:
"[exact text]" - [HIGH/MEDIUM/LOW] - [short explanation]
"[exact text]" - [HIGH/MEDIUM/LOW] - [short explanation]
----

For LOW risk emails with no concerns, respond ONLY with the OVERALL section.
NO EXPLANATIONS. NO ADDITIONAL TEXT. EXACT FORMAT REQUIRED.
---
CONTENT:
---
${emailText}
---`

  // Get LLM analysis
  const session = await window.ai.languageModel.create({
    topK: 1,
    temperature: 0.1,
    systemPrompt:
      'You are a security expert analyzing emails for potential phishing indicators. Follow the instructions carefully.',
  })

  // Parse and combine results
  console.log('promptText', promptText)
  const promptResult = await session.prompt(promptText)

  console.log('promptResult', promptResult, parseAnalysisToJson(promptResult))

  const result: ScanResult = {
    urlAnalysis: {
      // @ts-ignore
      urls: urlAnalysis,
      safeBrowsingThreats: safeBrowsingResults,
    },
    // @ts-ignore
    contentAnalysis: parseAnalysisToJson(promptResult),
    timestamp: new Date().toISOString(),
  }

  chrome.storage.local.set({ [cacheKey]: result })
  return result
}

// Add function to check email analysis preference
async function shouldShowEmailAnalysis(): Promise<boolean> {
  const data = await chrome.storage.local.get('highlightSuspiciousEmailContent')
  return data?.highlightSuspiciousEmailContent ?? true
}

// Add function to create scanner instance
function createScannerInstance(container: HTMLElement) {
  const wrapper = document.createElement('div')
  wrapper.className = 'ai-scanner-container'
  container.insertBefore(wrapper, container.firstChild)

  const app = createApp(GmailPhishingScanner)
  return app.mount(wrapper)
}

// Modify InboxSDK handler
InboxSDK.load(2, 'sdk_sentinel_dff2bb5279').then((sdk) => {
  sdk.Conversations.registerMessageViewHandler(async (messageView: MessageView) => {
    if (messageView.getSender().emailAddress === sdk.User.getEmailAddress()) {
      return
    }

    const { available } = await window.ai.languageModel.capabilities()
    if (available !== 'readily') {
      return
    }

    const bodyElement = messageView.getBodyElement()
    if (!bodyElement) {
      return
    }

    // Check if analysis should be displayed
    const shouldShow = await shouldShowEmailAnalysis()
    let scannerInstance = null

    if (shouldShow) {
      // Create and show scanner with loading state immediately
      scannerInstance = createScannerInstance(bodyElement)
    }

    // Send initial status
    await sendAnalysisToBackground({
      status: AnalysisStatus.STARTING_DOMAIN_ANALYSIS,
      domain: { isSuspicious: false },
    })

    await sendAnalysisToBackground({
      status: AnalysisStatus.STARTING_CONTENT_ANALYSIS,
    })

    const emailText = bodyElement.innerText || ''
    const messageID = await messageView.getMessageIDAsync()

    const recipients = await messageView.getRecipientsFull()
    // Safely extract metadata with error handling
    const metadata: EmailMetadata = {
      fromAddress: messageView.getSender().emailAddress,
      fromName: messageView.getSender().name,
      to: recipients.map((r) => r.emailAddress).join(', '),
      subject: messageView.getThreadView().getSubject(),
      attachments: messageView.getFileAttachmentCardViews().map((a) => a.getTitle()) || [],
      links: messageView
        .getLinksInBody()
        .filter((e) => e.text.length > 0 && e.href.startsWith('http'))
        .map((e) => ({ text: e.text, href: e.href })),
    }

    try {
      const scanResult = await analyzeEmail(messageID, metadata, emailText)

      // Convert scan result to ContentAnalysis format
      const contentAnalysis: ContentAnalysis = {
        title: 'Email Security Analysis',
        violations:
          scanResult.contentAnalysis.suspiciousContent?.map((item) => ({
            rule: item.reason || 'Unknown Issue',
            severity: item.severity || 'LOW',
            explanation: item.text || 'No details available',
          })) || [],
        overallRiskScore: scanResult.contentAnalysis.analysis?.risk || 'LOW',
        overallConfidence: scanResult.contentAnalysis.analysis?.confidence || 'LOW',
        isSafe: scanResult.contentAnalysis.analysis?.safe ?? true,
        recommendation:
          scanResult.contentAnalysis.analysis?.recommendation || 'No specific recommendations',
      }

      // Send analysis to background
      await sendAnalysisToBackground({
        status: AnalysisStatus.ANALYSIS_FINISHED,
        content: contentAnalysis,
      })

      // Update UI if it was created
      if (scannerInstance) {
        scannerInstance.updateResults(scanResult)
      }
    } catch (error) {
      console.error('Analysis failed:', error)
      if (scannerInstance) {
        scannerInstance.setError('Analysis failed. Please try again later.')
      }
      await sendAnalysisToBackground({
        status: AnalysisStatus.ANALYSIS_FAILED,
        content: null,
      })
    }
  })
})

// Add listener for preference changes
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local' && changes.highlightSuspiciousEmailContent) {
    const newValue = changes.highlightSuspiciousEmailContent.newValue
    handlePreferenceChange(newValue)
  }
})

function handlePreferenceChange(showAnalysis: boolean) {
  const containers = document.querySelectorAll('.ai-scanner-container')
  containers.forEach((container) => {
    if (showAnalysis) {
      container.classList.remove('hidden')
    } else {
      container.classList.add('hidden')
    }
  })
}

// Add function to send analysis updates to background script
function sendAnalysisToBackground(update: {
  status: AnalysisStatus
  domain?: DomainAnalysis
  content?: ContentAnalysis
}) {
  chrome.runtime
    .sendMessage({
      type: 'UPDATE_ANALYSIS',
      payload: {
        status: update.status,
        domainAnalysis: update.domain || { isSuspicious: false },
        contentAnalysis: update.content || null,
      },
    })
    .catch((error) => {
      console.error('Failed to send analysis update:', error)
    })
}
