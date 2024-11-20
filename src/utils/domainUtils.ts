import { distance as levenshtein } from 'fastest-levenshtein'

/**
 * Extracts the main domain from a full domain string.
 * Example: "bank.barclays.co.uk" -> "barclays.co.uk"
 */
export function extractMainDomain(domain: string): string {
  const parts = domain.split('.')
  if (parts.length >= 3 && parts[parts.length - 2] === 'co') {
    return parts.slice(-3).join('.')
  }
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
export function analyzeDomain(
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
