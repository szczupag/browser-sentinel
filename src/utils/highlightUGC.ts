export function highlightUGCThreats(element: HTMLElement, severity: 'HIGH' | 'MEDIUM' | 'LOW') {
  // Store original styles
  const originalStyles = {
    backgroundColor: element.style.backgroundColor,
    border: element.style.border,
    borderRadius: element.style.borderRadius,
    position: element.style.position,
  }

  // Add data attribute to mark as highlighted
  element.dataset.aiSentinelHighlight = 'true'
  element.dataset.level = severity

  // Apply styles directly to the element
  Object.assign(element.style, {
    position: 'relative',
    borderRadius: '4px',
    ...(severity === 'HIGH'
      ? {
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          border: '2px solid rgba(239, 68, 68, 0.3)',
        }
      : severity === 'MEDIUM'
        ? {
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            border: '2px solid rgba(245, 158, 11, 0.3)',
          }
        : {
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            border: '2px solid rgba(59, 130, 246, 0.3)',
          }),
  })

  // Store original styles for potential cleanup
  element.dataset.aiSentinelOriginalStyles = JSON.stringify(originalStyles)
}
