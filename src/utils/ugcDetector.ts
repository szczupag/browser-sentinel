interface UGCElement {
  content: string
  container: HTMLElement
  confidence: number
}

function findPotentialUGC(document: Document): UGCElement[] {
  const ugcElements: UGCElement[] = []
  const processedElements = new Set<HTMLElement>()

  // Use TreeWalker to find text nodes
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      // Skip if parent is style or script
      if (isInIgnoredTag(node)) {
        return NodeFilter.FILTER_REJECT
      }

      const text = node.textContent?.trim() || ''
      // Skip very short texts and obvious UI elements
      if (text.length < 20) {
        return NodeFilter.FILTER_REJECT
      }
      return NodeFilter.FILTER_ACCEPT
    },
  })

  while (walker.nextNode()) {
    const textNode = walker.currentNode
    const container = findContentContainer(textNode)

    if (container && !processedElements.has(container)) {
      processedElements.add(container)

      ugcElements.push({
        content: container.textContent?.trim() || '',
        container,
        confidence: calculateInitialConfidence(container),
      })
    }
  }

  return filterDuplicateElements(ugcElements)
}

function isInIgnoredTag(node: Node): boolean {
  let current = node.parentElement
  while (current) {
    const tagName = current.tagName.toLowerCase()
    if (tagName === 'style' || tagName === 'script' || tagName === 'noscript') {
      return true
    }
    current = current.parentElement
  }
  return false
}

function findContentContainer(node: Node): HTMLElement | null {
  let current = node.parentElement

  while (current) {
    const tagName = current.tagName.toLowerCase()
    // Skip style and script tags
    if (tagName === 'style' || tagName === 'script' || tagName === 'noscript') {
      return null
    }

    if (current.matches('div, p, article, section, li')) {
      return current
    }
    current = current.parentElement
  }

  return node.parentElement
}

function calculateInitialConfidence(element: HTMLElement): number {
  const text = element.textContent?.trim() || ''
  let score = 0

  // Basic content checks
  if (text.length >= 50) score += 0.3
  if (text.length >= 100) score += 0.2
  if (text.split(' ').length >= 10) score += 0.3

  // Check for metadata
  const hasMetadata = element.querySelector('time, [datetime]')
  if (hasMetadata) score += 0.2

  return score
}

function isDescendant(parent: HTMLElement, child: HTMLElement): boolean {
  let node = child.parentElement
  while (node != null) {
    if (node === parent) {
      return true
    }
    node = node.parentElement
  }
  return false
}

function filterDuplicateElements(elements: UGCElement[]): UGCElement[] {
  // Sort by confidence score (highest first) and content length (shortest first)
  const sortedElements = [...elements].sort((a, b) => {
    if (a.confidence !== b.confidence) {
      return b.confidence - a.confidence
    }
    return a.content.length - b.content.length
  })

  const filteredElements: UGCElement[] = []

  for (let i = 0; i < sortedElements.length; i++) {
    const current = sortedElements[i]

    // Find if this element is related to any already accepted element
    const relatedElementIndex = filteredElements.findIndex(
      (accepted) =>
        isDescendant(current.container, accepted.container) ||
        isDescendant(accepted.container, current.container)
    )

    if (relatedElementIndex === -1) {
      // No related element found, add current
      filteredElements.push(current)
    } else {
      // Related element found, check if current is child
      const accepted = filteredElements[relatedElementIndex]
      if (isDescendant(accepted.container, current.container)) {
        // Current is child of accepted, replace accepted with current
        filteredElements[relatedElementIndex] = current
      }
      // If current is parent, ignore it (keep existing child)
    }
  }

  return filteredElements
}

export function detectUGC(document: Document): UGCElement[] {
  console.log('Starting UGC detection')
  return findPotentialUGC(document)
}
