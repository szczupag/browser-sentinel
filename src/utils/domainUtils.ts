import { distance as levenshtein } from 'fastest-levenshtein'
import psl from 'psl'

const MIN_DOMAIN_LENGTH = 7; // Minimum length of a domain to be considered for analysis to avoid false positives with the Levenshtein distance

/**
 * Extracts the main domain from a full domain string using a bottom-up approach.
 * Handles any number of TLD levels.
 * Examples:
 * - "sub.example.com" -> "example.com"
 * - "sub.example.co.uk" -> "example.co.uk"
 * - "deep.sub.example.com.pl" -> "example.com.pl"
 * - "something.platform.amazonaws.com" -> "platform.amazonaws.com"
 * - "my.example.com.tr.nl" -> "example.com.tr.nl"
 *
 * @param domain The domain to process
 * @returns The main domain (registrable domain or eTLD+1)
 */
export function extractMainDomain(domain: string): string | null {
  if (!domain) return ''
  // Parse the domain using psl
  const parsed = psl.parse(domain)

  // Check if parsing was successful and return the domain
  return parsed.error ? null : parsed.domain
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
  const mainCurrentDomain = extractMainDomain(currentDomain)

  if (!mainCurrentDomain || mainCurrentDomain.length <= MIN_DOMAIN_LENGTH) return { isSuspicious: false }

  // First check if the domain is in the legitimate domains list
  const isLegitimate = legitimateDomains.some((legitDomain) => {
    const mainLegitDomain = extractMainDomain(legitDomain)
    return mainCurrentDomain === mainLegitDomain
  })

  if (isLegitimate) {
    return { isSuspicious: false }
  }

  // Check each legitimate domain
  for (const originalLegitimateDomain of legitimateDomains) {
    // Normalize legitimate domain as well
    const mainLegitimateDomain = extractMainDomain(originalLegitimateDomain)

    if (!mainLegitimateDomain) continue

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
  }

  return { isSuspicious: false }
}
