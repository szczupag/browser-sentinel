/**
 * Estimates the number of tokens in a text string
 */
export function estimateTokens(text: string): number {
  const words = text.split(/\s+/).filter((word: string) => word.length > 0).length
  const estimatedTokens = Math.round(words * 0.75)
  const buffer = Math.round(words * 0.1)
  return estimatedTokens + buffer
}

/**
 * Cleans text by removing extra whitespace and normalizing spacing
 */
export function cleanText(text: string): string {
  return text
    .replace(/\s+/g, ' ')
    .replace(/^\s+|\s+$/g, '')
    .replace(/\t/g, ' ')
}

/**
 * Extracts website info while keeping within token limit
 * @param {Document} document - The document to analyze
 * @param {number} maxTokens - Maximum allowed tokens
 * @returns {string} Compressed website information
 */
export function extractWebsiteInfo(document: Document, maxTokens: number = 200): string {
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
