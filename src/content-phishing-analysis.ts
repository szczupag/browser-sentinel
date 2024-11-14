import { distance as levenshtein } from 'fastest-levenshtein';
import finance from './static/finance.ts';
import ecommerce from './static/ecommerce.ts';
import { createApp } from 'vue';
// @ts-ignore
import PhishingAlert from './components/PhishingAlert.vue';
import styles from './content-phishing-analysis.css?inline';


let vueApp = null;
type Risk = 'HIGH' | 'MEDIUM' | 'LOW';
type PhishingAnalysis = {
  violations: {
    rule: string;
    severity: Risk;
    explanation: string;
  }[];
  overallRiskScore: Risk;
  overallConfidence: Risk;
  isSafe: boolean;
  recommendation: string;
};

/**
 * Extracts the main domain from a full domain string.
 * Example: "bank.barclays.co.uk" -> "barclays.co.uk"
 * 
 * @param {string} domain - Full domain including potential subdomains
 * @returns {string} Main domain without subdomains
 */
function extractMainDomain(domain: string): string {
  // Handle special cases for country TLDs (like .co.uk, .com.br)
  const parts = domain.split('.');
  if (parts.length >= 3 && parts[parts.length - 2] === 'co') {
    // For domains like *.co.uk, return last 3 parts
    return parts.slice(-3).join('.');
  }
  // For regular domains, return last 2 parts
  return parts.slice(-2).join('.');
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
function analyzeDomain(currentDomain: string, legitimateDomains: string[]): {
  isSuspicious: boolean;
  legitimateDomain?: string;
  distance?: number;
  similarity?: number;
} {
  // Remove 'www.' prefix and normalize domain
  const normalizedCurrentDomain = currentDomain.toLowerCase().replace(/^www\./, '');
  const mainCurrentDomain = extractMainDomain(normalizedCurrentDomain);
  
  // Check each legitimate domain
  for (const originalLegitimateDomain of legitimateDomains) {
    // Normalize legitimate domain as well
    const legitimateDomain = originalLegitimateDomain.toLowerCase().replace(/^www\./, '');
    const mainLegitimateDomain = extractMainDomain(legitimateDomain);
    
    // Skip if current domain is a subdomain of legitimate domain
    if (normalizedCurrentDomain.endsWith(`.${mainLegitimateDomain}`)) {
      return { isSuspicious: false };
    }
    
    const distance = levenshtein(mainCurrentDomain, mainLegitimateDomain);
    const similarity = 1 - (distance / mainLegitimateDomain.length);
    
    // If very similar but not exact match
    if (distance <= 2 && similarity >= 0.85 && mainCurrentDomain !== mainLegitimateDomain) {
      return {
        isSuspicious: true,
        legitimateDomain: originalLegitimateDomain,
        distance,
        similarity
      };
    }

    // Check for suspicious variations (domain.contains but not exact match)
    const legitWithoutTLD = mainLegitimateDomain.split('.')[0];
    if (mainCurrentDomain.includes(legitWithoutTLD) && 
        mainCurrentDomain !== mainLegitimateDomain && 
        similarity >= 0.5) {
      return {
        isSuspicious: true,
        legitimateDomain: originalLegitimateDomain,
        distance,
        similarity
      };
    }
  }

  return { isSuspicious: false };
}

function showPhishingAlert(data: any) {
  const shadowHost = document.createElement('div');
  shadowHost.setAttribute('id', 'phishing-alert-app-shadow-host');
  shadowHost.style.all = 'unset';
  const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
  const container = document.createElement('div');
  const cssContainer = document.createElement('style');
  cssContainer.textContent = styles;

  shadowRoot.appendChild(cssContainer);
  shadowRoot.appendChild(container);
  container.id = 'phishing-alert-app';

  vueApp = createApp(PhishingAlert, { ...data });
  vueApp.mount(container);
  document.body.appendChild(shadowHost);

}

(async () => {
  const domain = location.hostname;
  const analysisResult = analyzeDomain(domain, [...finance, ...ecommerce]);

  if (analysisResult.isSuspicious) {
    const { available } = await window.ai.languageModel.capabilities();
    if (available !== 'readily') {
      console.log('AI is not ready');
      return;
    }
 
    const session = await window.ai.languageModel.create({ topK: 1, temperature: 0.1, systemPrompt: "You are a security expert analyzing a website for potential phishing indicators. Follow the instructions carefully." });
 
    const promptText = `
[Input]
Domain: "${domain}"
Is using HTTPS: ${location.protocol === 'https:' ? 'Yes' : 'No'}
Levenshtein Distance: ${analysisResult.distance}
Similarity: ${analysisResult.similarity}
Legitimate Domain: "${analysisResult.legitimateDomain}"

Below is the actual text content found on the webpage (without any HTML tags):
----
${document.body.innerText.substring(0, 2000)}
----

You are a JSON generator that helps create valid JSON for security analysis. Your task is to generate a phishing analysis in valid JSON format.

Output requirements:
1. Maximum 4 violations
2. No duplicate rule types
3. Prioritize domain-related violations
4. Brief explanations (max 20 words)
5. No technical terms
6. Must be valid parseable JSON
7. Use only these rule names: "Deceptive Domain", "Content Mismatch", "Missing Security", "Suspicious Branding"

Return your response in this exact JSON format:

{
  "violations": [
    {
      "rule": "Deceptive Domain",
      "severity": "HIGH",
      "explanation": "Website address is almost identical to real bank's address"
    },
    {
      "rule": "Content Mismatch",
      "severity": "HIGH",
      "explanation": "Website looks different from real bank's site"
    }
  ],
  "overallRiskScore": "HIGH",
  "overallConfidence": "HIGH",
  "isSafe": false,
  "recommendation": "Don't enter any information, this is likely a fake bank website"
}

Remember: The output must be valid JSON that can be parsed by JSON.parse(). No additional text or formatting.`;

    const promptResult = await session.prompt(promptText);
    let phishingAnalysis: PhishingAnalysis | null = null;

    try {
      phishingAnalysis = JSON.parse(promptResult);
    } catch (e) {
      console.error("Error parsing phishing analysis", e);
    }

    if (phishingAnalysis?.isSafe === false) {
      await showPhishingAlert(phishingAnalysis);
    }
  }
})();

