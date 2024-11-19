import * as InboxSDK from '@inboxsdk/core';
import { type MessageView } from '@inboxsdk/core';
import { createApp } from 'vue';
import GmailPhishingScanner from './GmailPhishingScanner.vue';
import { ScanResult } from './types';
import { highlightThreats } from './highlighter';
import styles from './content-gmail.css?inline';
import SafeBrowsingClient from './SafeBrowsingClient';

// URL Shortener Services
const URL_SHORTENERS = [
  'bit.ly', 't.co', 'goo.gl', 'tinyurl.com', 'ow.ly', 
  'tiny.cc', 'is.gd', 'cli.gs', 'pic.gd', 'DwarfURL.com',
  'yfrog.com', 'migre.me', 'ff.im', 'tiny.pl', 'url4.eu',
  'tr.im', 'twit.ac', 'su.pr', 'twurl.nl', 'snipurl.com',
  'short.to', 'BudURL.com', 'ping.fm', 'post.ly', 'Just.as',
  'bkite.com', 'snipr.com', 'fic.kr', 'loopt.us', 'doiop.com',
  'tinyurl.com', 'short.ie', 'kl.am', 'wp.me', 'rubyurl.com',
  'om.ly', 'to.ly', 'bit.do', 'lnkd.in', 't.ly',
  'ur1.ca', 'tiny.cc', 'yourls.org'
];

interface EmailMetadata {
  fromAddress: string;
  fromName: string;
  to: string;
  subject: string;
  links: Array<{
    text: string;
    href: string;
  }>;
  attachments: string[];
}

interface URLAnalysis {
  displayText: string;
  actualUrl: string;
  domain: string | null;
  suspicious: boolean;
  reasons: string[];
}

const cssContainer = document.createElement('style');
cssContainer.textContent = styles;
document.body.appendChild(cssContainer);


function looksLikeUrl(text: string): boolean {
  // Match common domain patterns
  return /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}/.test(text);
}

function extractDomainFromUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return url;
  }
}

function domainsMatch(domain1: string, domain2: string): boolean {
  const getBaseDomain = (domain: string) => {
    const parts = domain.split('.');
    const mainParts = parts.slice(-2);
    return mainParts.join('.');
  };
  
  return getBaseDomain(domain1) === getBaseDomain(domain2);
}

function parseAnalysisToJson(response: string) {
  const result = {
    suspiciousContent: [],
    analysis: {
      risk: null,
      confidence: null,  // Added this
      safe: null,
      recommendation: null
    }
  };

  try {
    const lines = response.split('\n').map(line => line.trim()).filter(Boolean);
    
    for(let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line === 'OVERALL:') {
        while(i + 1 < lines.length && !lines[i + 1].startsWith('CONCERNS:')) {
          i++;
          const currentLine = lines[i];
          if (currentLine.startsWith('Risk:')) {
            // @ts-ignore
            result.analysis.risk = currentLine.split('Risk:')[1].trim();
          } else if (currentLine.startsWith('Safe:')) {
            // @ts-ignore
            result.analysis.safe = currentLine.split('Safe:')[1].trim() === 'YES';
          } else if (currentLine.startsWith('Confidence:')) {  // Added this
            // @ts-ignore
            result.analysis.confidence = currentLine.split('Confidence:')[1].trim();
          } else if (currentLine.startsWith('Action:')) {
            // @ts-ignore
            result.analysis.recommendation = currentLine.split('Action:')[1].trim();
          }
        }
      }
      
      if (line === 'CONCERNS:') {
        while(i + 1 < lines.length && lines[i + 1].includes('" - ')) {
          i++;
          const concernLine = lines[i];
          const match = concernLine.match(/"([^"]+)"\s*-\s*(HIGH|MEDIUM|LOW)\s*-\s*(.+)/);
          if (match) {
            // @ts-ignore
            result.suspiciousContent.push({
              text: match[1],
              severity: match[2],
              reason: match[3].trim()
            });
          }
        }
      }
    }

    return result;

  } catch (error) {
    console.error('Failed to parse analysis:', error);
    return result;
  }
}

function analyzeUrl(displayText: string, href: string): URLAnalysis {
  const reasons: string[] = [];
  
  try {
    const urlObj = new URL(href);
    const hrefDomain = urlObj.hostname;

    // Check for URL shorteners
    if (URL_SHORTENERS.some(s => hrefDomain.includes(s))) {
      reasons.push('Uses URL shortener service');
    }

    // Check for homograph attacks (mixed character sets)
    if (/[^\x00-\x7F]/.test(hrefDomain)) {
      reasons.push('Domain uses non-ASCII characters which might look like regular letters');
    }

    // Check for suspicious display text
    if (looksLikeUrl(displayText)) {
      const displayDomain = extractDomainFromUrl(displayText);
      if (!domainsMatch(displayDomain, hrefDomain)) {
        console.log("displayDomain", displayDomain, " hrefDomain", hrefDomain);
        reasons.push('Display text shows different domain than actual URL');
      }
    }

    // Check for data/javascript URLs
    if (href.startsWith('data:') || href.startsWith('javascript:')) {
      reasons.push('Potentially malicious URL scheme');
    }

    return {
      displayText,
      actualUrl: href,
      domain: hrefDomain,
      suspicious: reasons.length > 0,
      reasons
    };
  } catch (error) {
    return {
      displayText,
      actualUrl: href,
      domain: null,
      suspicious: true,
      reasons: ['Invalid URL format']
    };
  }
}

// Main Analysis Function
async function analyzeEmail(metadata: EmailMetadata, emailText: string): Promise<ScanResult> {
  // Initialize Safe Browsing client
  const safeBrowsing = new SafeBrowsingClient(
    'AIzaSyCRQYkdubK4cut-ypF9Tx6RjIFQtWYHuzk',
    'Sentinel',
    '1.0.0'
  );

  // Analyze all URLs locally first
  const urlAnalysis = metadata.links.map(link => 
    analyzeUrl(link.text, link.href)
  );

  // Check suspicious URLs against Safe Browsing API
  const suspiciousUrls = urlAnalysis
    //.filter(analysis => analysis.suspicious)
    .map(analysis => analysis.actualUrl);

  const safeBrowsingResults = suspiciousUrls.length > 0 
    ? await safeBrowsing.checkUrls(suspiciousUrls)
    : {};

    console.log('safeBrowsingResults,', safeBrowsingResults)

  // Create prompt for LLM with technical analysis results
  const promptText = `
You are a security professional. Your task is to analyse emails and judge if the email is a possible phishing attempt. Each section of the prompt is separated by ---
Under no circumstances you should analyse any email's addresses found. You can however ask the user to check if it's a trusted sender (in case the final decision depends if the sender is legitimate).

METADATA:
---
Subject: "${metadata.subject}"
---
----
ANALYSIS GUIDELINES:
Important signs of phishing include:
- Urgency in language
- Threats of consequences
- Requests for sensitive data
- Unusual payment demands
- Pressure tactics
- Claims of large sums of money
- Military/government claims
- Random selection of recipient
- Requests for assistance moving money

SCORING RULES:
- If ANY concerns are marked as HIGH, overall risk must be HIGH
- Multiple MEDIUM concerns should result in HIGH risk
- A single MEDIUM concern should result in MEDIUM risk
- Risk level cannot be LOW if Safe is NO
- Must list ALL suspicious text found (maximum 4)
- Each suspicious text must be quoted exactly from the email

CONFIDENCE LEVELS:
HIGH: Multiple clear indicators match known scam patterns
MEDIUM: Some indicators present but pattern is unclear
LOW: Suspicious elements exist but could be legitimate

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

NO EXPLANATIONS. NO ADDITIONAL TEXT. EXACT FORMAT REQUIRED.
---
CONTENT:
---
${emailText}
---`;

  // Get LLM analysis
  const session = await window.ai.languageModel.create({ topK: 1, temperature: 0.1, systemPrompt: "You are a security expert analyzing emails for potential phishing indicators. Follow the instructions carefully." });

  // Parse and combine results
  console.log("promptText", promptText);
  const promptResult = await session.prompt(promptText);

  console.log("promptResult", promptResult, parseAnalysisToJson(promptResult));

  return {
    urlAnalysis: {
      // @ts-ignore
      urls: urlAnalysis,
      safeBrowsingThreats: safeBrowsingResults
    },
    // @ts-ignore
    contentAnalysis: parseAnalysisToJson(promptResult),
    timestamp: new Date().toISOString()
  };
}

InboxSDK.load(2, 'sdk_sentinel_dff2bb5279').then((sdk) => {
  sdk.Conversations.registerMessageViewHandler(async (messageView: MessageView) => {
    /*
    messageView.getFileAttachmentCardViews().forEach(async (attachment) => {
      console.log("attachment",  attachment.getAttachmentType(), attachment.getTitle(), await attachment.getDownloadURL());
    });
    */

    const { available } = await window.ai.languageModel.capabilities();
    if (available !== 'readily') {
      console.log('AI is not ready');
      return;
    }
    const bodyElement = messageView.getBodyElement();
    if (!bodyElement) {
      console.log('No body element found');
      return;
    }

    const statusContainer = document.createElement('div');
    statusContainer.id = 'ai-scanner-status-container';
    bodyElement.insertBefore(statusContainer, bodyElement.firstChild);
    const instance = createApp(GmailPhishingScanner).mount(statusContainer);


    const recipients = await messageView.getRecipientsFull();
    const metadata: EmailMetadata = {
      fromAddress: messageView.getSender().emailAddress,
      fromName: messageView.getSender().name,
      to: recipients.map(r => r.emailAddress).join(', '),
      subject: messageView.getThreadView().getSubject(),
      attachments: messageView.getFileAttachmentCardViews().map(a => a.getTitle()) || [],
      links: messageView.getLinksInBody().filter(e => e.text.length > 0 && e.href.startsWith('http')).map(e => ({ text: e.text, href: e.href }))
    };
    
    const emailText = bodyElement.innerText || '';
    try {
      const scanResult: ScanResult = await analyzeEmail(metadata, emailText);
      console.log("scanResult", scanResult);
      (instance as InstanceType<typeof GmailPhishingScanner>).updateResults(scanResult);
      highlightThreats(bodyElement, scanResult);
    } catch (ex: any) {
      (instance as InstanceType<typeof GmailPhishingScanner>).setError(ex.message);
    }
  });
});