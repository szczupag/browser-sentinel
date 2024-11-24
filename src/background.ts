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
    console.log('Setting storage with payload:', message.payload)
    chrome.storage.local.set(message.payload, () => {
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
