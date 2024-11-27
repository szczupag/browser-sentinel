import '@inboxsdk/core/background.js'
declare const ai: typeof window.ai

console.log('Hello from the background script')

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

// Clean up tab data when tab is closed
export const handleTabRemoved = (tabId: number): Promise<void> => {
  return new Promise((resolve) => {
    console.log('Cleaning up data for tab:', tabId)
    chrome.storage.local.get(null, (items) => {
      const keysToRemove = Object.keys(items).filter((key) => key.startsWith(`tab_${tabId}_`))

      if (keysToRemove.length > 0) {
        chrome.storage.local.remove(keysToRemove, () => {
          if (chrome.runtime.lastError) {
            console.error('Error removing tab data:', chrome.runtime.lastError)
          } else {
            console.log('Successfully removed data for keys:', keysToRemove)
          }
          resolve()
        })
      } else {
        resolve()
      }
    })
  })
}

// Register the listener
chrome.tabs.onRemoved.addListener((tabId) => {
  handleTabRemoved(tabId).catch(console.error)
})
;(async () => {
  await createOffscreenDocument()
})()
