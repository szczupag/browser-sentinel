import '@inboxsdk/core/background.js'
declare const ai: typeof window.ai

async function createOffscreenDocument() {
  const offscreenUrl = 'src/offscreen/offscreen.html'
  // Check if offscreen document already exists
  const existingContexts = await chrome.runtime.getContexts({
    // @ts-ignore
    contextTypes: ['OFFSCREEN_DOCUMENT'],
    documentUrls: [offscreenUrl],
  })
  // @ts-ignore
  if (existingContexts.length > 0) {
    console.log('Offscreen document already exists')
    return
  }

  // Create offscreen document
  try {
    await chrome.offscreen.createDocument({
      url: offscreenUrl + `#${chrome.i18n.getUILanguage()}`,
      // @ts-ignore
      reasons: ['DOM_SCRAPING'],
      justification: 'Translation API',
    })
    console.log('Offscreen document created successfully')
  } catch (error) {
    console.error('Failed to create offscreen document:', error)
  }
}

// Handle messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'UPDATE_ANALYSIS') {
    const tabId = sender.tab?.id
    if (!tabId) {
      console.error('No tab ID found for message:', message)
      return true
    }

    const payload = {
      [`tab_${tabId}_domainAnalysis`]: message.payload.domainAnalysis,
      [`tab_${tabId}_contentAnalysis`]: message.payload.contentAnalysis,
      [`tab_${tabId}_status`]: message.payload.status,
    }

    // Only update display warnings if it's included in the payload
    if (message.payload.displayWarnings !== undefined) {
      payload.displayWarnings = message.payload.displayWarnings
    }

    console.log('Setting storage with payload:', payload)
    chrome.storage.local.set(payload, () => {
      if (chrome.runtime.lastError) {
        console.error('Storage error:', chrome.runtime.lastError)
      } else {
        console.log('Storage successfully updated')
      }
    })
  }
  return true
})
;(async () => {
  console.log('Hello from the background script')
  await createOffscreenDocument()
})()
