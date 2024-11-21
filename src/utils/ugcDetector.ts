interface UGCElement {
  content: string
  type: 'comment' | 'post' | 'message' | 'review' | 'forum' | 'other'
  author?: string
  timestamp?: string
  container: HTMLElement
  confidence: number
}

function analyzeElementStructure(element: HTMLElement): number {
  let score = 0
  console.log('Analyzing structure for:', element.outerHTML.slice(0, 100))

  // Check for common UGC containers
  const isCommentLike =
    element.classList.contains('comment') ||
    element.id.includes('comment') ||
    element.classList.contains('post') ||
    element.classList.contains('message')

  // Check for interaction elements
  const hasInteractionElements = element.querySelector('button, a, .reply, .share, .like')

  // Check for metadata elements
  const hasMetadata = element.querySelector('.author, .timestamp, .date, time')
  // Check for proper content structure
  const hasContent = element.textContent?.trim().length ?? 0 > 20

  // Debug logging
  console.log('Structure analysis:', {
    isCommentLike,
    hasInteractionElements: !!hasInteractionElements,
    hasMetadata: !!hasMetadata,
    hasContent,
  })

  if (isCommentLike) score += 0.4
  if (hasInteractionElements) score += 0.2
  if (hasMetadata) score += 0.2
  if (hasContent) score += 0.2

  console.log('Structure score:', score)
  return score
}

function analyzeContentPatterns(element: HTMLElement): number {
  let score = 0
  const text = element.textContent?.toLowerCase().trim() || ''
  console.log('Analyzing content:', text.slice(0, 100))

  // Common UGC text patterns
  const hasUserMention = /@\w+/.test(text) || text.includes('wrote:') || text.includes('said:')
  const hasTimeIndicator = /\d+\s+(min|hour|day|week|month|year)s?\s+ago|today|yesterday/.test(text)
  const hasInteractionWords = /(reply|share|like|comment|post|follow)/.test(text)
  const hasProperLength = text.length >= 20 && text.length < 10000

  // Debug logging
  console.log('Content analysis:', {
    hasUserMention,
    hasTimeIndicator,
    hasInteractionWords,
    hasProperLength,
    textLength: text.length,
  })

  if (hasUserMention) score += 0.25
  if (hasTimeIndicator) score += 0.25
  if (hasInteractionWords) score += 0.25
  if (hasProperLength) score += 0.25

  console.log('Content score:', score)
  return score
}

function analyzeVisualPatterns(element: HTMLElement): number {
  let score = 0
  const style = window.getComputedStyle(element)
  console.log('Analyzing visual patterns')

  // Check for visual separation
  const hasVisualSeparation =
    style.borderBottom !== '0px' || style.marginBottom !== '0px' || style.paddingBottom !== '0px'

  // Check for distinct styling
  const hasDistinctStyling =
    style.backgroundColor !== 'transparent' ||
    style.padding !== '0px' ||
    style.borderRadius !== '0px'

  // Debug logging
  console.log('Visual analysis:', {
    hasVisualSeparation,
    hasDistinctStyling,
    backgroundColor: style.backgroundColor,
    padding: style.padding,
    border: style.border,
  })

  if (hasVisualSeparation) score += 0.5
  if (hasDistinctStyling) score += 0.5

  console.log('Visual score:', score)
  return score
}

export function detectUGC(document: Document): UGCElement[] {
  console.log('Starting UGC detection')
  const ugcElements: UGCElement[] = []
  const processedElements = new Set<HTMLElement>()

  // Common UGC container selectors
  const ugcSelectors = [
    '.comment',
    '.post',
    '.message',
    '.review',
    '[class*="comment"]',
    '[class*="post"]',
    '[class*="message"]',
    '[id*="comment"]',
    '[id*="post"]',
    '[id*="message"]',
    'article',
    '.content',
    '.user-content',
  ]

  // Find potential UGC containers
  const potentialElements = document.querySelectorAll(ugcSelectors.join(','))
  console.log('Found potential elements:', potentialElements.length)

  potentialElements.forEach((element) => {
    const htmlElement = element as HTMLElement
    if (processedElements.has(htmlElement)) return
    processedElements.add(htmlElement)

    // Calculate scores
    const structureScore = analyzeElementStructure(htmlElement)
    const contentScore = analyzeContentPatterns(htmlElement)
    const visualScore = analyzeVisualPatterns(htmlElement)

    // Combined weighted score
    const confidence = structureScore * 0.4 + contentScore * 0.4 + visualScore * 0.2

    console.log('Element analysis complete:', {
      structureScore,
      contentScore,
      visualScore,
      confidence,
    })

    // Lower threshold for detection
    if (confidence >= 0.3) {
      // Determine type
      let type: UGCElement['type'] = 'other'
      if (htmlElement.classList.contains('comment')) type = 'comment'
      else if (htmlElement.classList.contains('post')) type = 'post'
      else if (htmlElement.classList.contains('message')) type = 'message'
      else if (htmlElement.classList.contains('review')) type = 'review'

      // Find author and timestamp
      const authorElement = htmlElement.querySelector('.author, .username, [class*="user"]')
      const timeElement = htmlElement.querySelector('time, .timestamp, .date')

      ugcElements.push({
        content: htmlElement.textContent?.trim() || '',
        type,
        author: authorElement?.textContent?.trim() ?? undefined,
        timestamp:
          timeElement?.textContent?.trim() ?? timeElement?.getAttribute('datetime') ?? undefined,
        container: htmlElement,
        confidence,
      })

      console.log('Added UGC element:', {
        type,
        author: authorElement?.textContent?.trim(),
        contentPreview: htmlElement.textContent?.trim().slice(0, 50),
      })
    }
  })

  console.log('UGC detection complete. Found elements:', ugcElements.length)
  return ugcElements
}
