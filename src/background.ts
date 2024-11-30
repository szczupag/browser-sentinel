import '@inboxsdk/core/background.js'
import { ContentAnalysis, DomainAnalysis } from './store'
import { AnalysisStatus } from './constants/analysisStatus'
import { RiskLevel } from './constants/riskLevels'
import { IconType } from './constants/iconType'
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

// Update icon based on analysis
async function updateExtensionIcon(
  analysisUpdate: {
    domainAnalysis?: DomainAnalysis
    contentAnalysis?: ContentAnalysis
    status: AnalysisStatus
  },
  tabId?: number
) {
  let iconType: IconType = IconType.DEFAULT
  if (analysisUpdate.status === AnalysisStatus.STARTING_DOMAIN_ANALYSIS) {
    iconType = IconType.ANALYZING
  } else if (analysisUpdate.status === AnalysisStatus.STARTING_CONTENT_ANALYSIS) {
    if (analysisUpdate.domainAnalysis?.isSuspicious) {
      iconType = IconType.SUSPICIOUS
    } else {
      iconType = IconType.ANALYZING
    }
  } else if (analysisUpdate.status === AnalysisStatus.ANALYSIS_FINISHED) {
    if (analysisUpdate.contentAnalysis?.overallRiskScore === RiskLevel.HIGH) {
      iconType = IconType.SUSPICIOUS
    } else {
      iconType = IconType.SAFE
    }
  }
  await chrome.action.setIcon(
    {
      path: {
        '16': `/icons/16/BrowserSentinel-${iconType}.png`,
        '32': `/icons/32/BrowserSentinel-${iconType}.png`,
        '48': `/icons/48/BrowserSentinel-${iconType}.png`,
        '128': `/icons/128/BrowserSentinel-${iconType}.png`,
      },
      ...(tabId && { tabId }), // Only set tabId if provided
    },
    () => {
      if (chrome.runtime.lastError) {
        console.error('Failed to set icon:', chrome.runtime.lastError.message)
      }
    }
  )
}

// Handle analysis updates from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'UPDATE_ANALYSIS' && sender.tab?.id) {
    const analysisUpdate = message.payload
    const tabId = sender.tab.id

    // Store analysis using consistent key format
    chrome.storage.local.set(
      {
        [`tab_${tabId}_domainAnalysis`]: analysisUpdate.domainAnalysis,
        [`tab_${tabId}_contentAnalysis`]: analysisUpdate.contentAnalysis,
        [`tab_${tabId}_status`]: analysisUpdate.status,
      },
      () => {
        // Update icon for this tab
        updateExtensionIcon(analysisUpdate, tabId)
      }
    )
  }
})

// Clean up stored analyses when tabs are closed
chrome.tabs.onRemoved.addListener((tabId) => {
  handleTabRemoved(tabId).catch(console.error)
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
;(async () => {
  await createOffscreenDocument()
})()
