console.log('Hello from the background script')

let aiSession: any = null
const initialPrompt =
  "Analyze the following content, which has been parsed from a webpage, specifically for high-probability threats such as phishing attempts, fraud, or urgent requests for sensitive information (e.g., money transfers, passwords). Focus on identifying phrases that indicate urgency or financial requests, especially those that appear to exploit emotions (e.g., fear, urgency, or panic). Be vigilant for direct calls to action like 'transfer money,' 'send account details,' or 'help me urgently.' If any threats are detected, summarize the nature of the threat (e.g., 'urgent money request detected') and advise to exercise caution. If no threats are present, return 'No threats detected.'. Ensure responses are in plain text without any additional text formatting."

async function initializeAIAssistant() {
  try {
    const capabilities = await ai.languageModel.capabilities()
    if (capabilities.available === 'no') {
      console.log('AI assistant is not available on this device')
      return
    }

    console.log('Creating AI assistant session...')
    aiSession = await ai.languageModel.create({ systemPrompt: initialPrompt })
    console.log('AI assistant session created successfully')
  } catch (error) {
    console.error('Error initializing AI assistant:', error)
  }
}

async function analyzeTextWithAI(text: string): Promise<string> {
  if (!aiSession) {
    return 'AI assistant is not available or not initialized'
  }

  try {
    const response = await aiSession.prompt(
      `Analyze the following text for potential threats or harmful content: "${text}"`
    )
    return response
  } catch (error) {
    console.error('Error using AI assistant:', error)
    return 'An error occurred while analyzing the text'
  }
}

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install' || details.reason === 'update') {
    // Initialize AI assistant when the extension is installed or updated
    initializeAIAssistant()
  }

  // Create context menu item
  chrome.contextMenus.create({
    id: 'analyzeText',
    title: 'Analyze selected text',
    contexts: ['selection'],
  })
})

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'analyzeText' && tab?.id) {
    chrome.tabs.sendMessage(tab.id, { action: 'getSelectedText' })
  }
})

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'analyzeText') {
    analyzeTextWithAI(message.text).then(sendResponse)
    return true
  }
})
