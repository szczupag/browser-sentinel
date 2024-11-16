// background.js
import '@inboxsdk/core/background.js';

console.log('Hello from the background script')
let aiSession: any = null
const initialPrompt = `You are analyzing text content for potential threats such as phishing, scams, or other risky content. There are two types of input:

1. **User-selected text**
2. **HTML content of a website**

Regardless of the type of input, you are required to check for threats carefully and return the results in an object. Please follow these instructions:

### For user-selected text:
Focus on detecting any signs of phishing, fraud, or risky content. Return an object with:
- The 'category' of the detected threat (e.g., 'phishing', 'scam', 'fraud', etc.)
- A 'probability' score of the detected threat, expressed as a percentage.
- A 'user_friendly_explanation' that briefly describes the type of threat and why it might be risky.
- 'action_items', which provide a brief description of what the user should do (e.g., ignore, proceed with caution, report, etc.)

### For website HTML:
In addition to the points above, the input will be provided in chunks formatted as follows: "This is chunk X of Y: <content of the chunk>". The model should consider the total number of chunks (Y) provided at the start. When the last chunk is received, you should combine all chunks, analyze the website, and return a final analysis result in the following structure:
- The 'category' of the detected threat.
- The 'probability' score of the detected threat, expressed as a percentage.
- A 'user_friendly_explanation' of the detected threat and risk.
- The 'dom_element', which should provide a query selector that points to the specific part of the HTML where the threat originates.
- 'action_items', which explain what the user should do next.

If the chunk indicates that it is not the last one, return the following object:
{"status": "waiting for next chunk"}

Please ensure that your response has no additional formatting and follows this structure for both types of inputs. Here's an example of the expected output for both cases:

### Example 1: User-Selected Text
{
  "category": "phishing",
  "probability": 85,
  "user_friendly_explanation": "The message requests urgent financial help, which is a common tactic used in phishing scams.",
  "action_items": "Do not respond or provide any financial information. Report this message if it seems suspicious."
}

### Example 2: Website HTML Input
- When chunks are still being processed:
{"status": "waiting for next chunk"}
- Final analysis after receiving the last chunk:
{
  "category": "fraud",
  "probability": 90,
  "user_friendly_explanation": "The link directs the user to an unknown payment platform, which can be a fraudulent attempt to steal payment information.",
  "dom_element": "div.payment-section > a.payment-link",
  "action_items": "Avoid clicking on the link and do not provide any payment details. Verify the legitimacy of the platform before proceeding."
}

Make sure to only return an object without additional formatting. Do not flag harmless content, and be cautious about assigning probabilities unless you're certain a threat is likely.`

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

function escapeHTML(html: string): string {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const MAX_CHUNK_SIZE = 1000

async function analyzeHTMLChunks(chunks: string[]): Promise<string> {
  if (!aiSession) {
    return 'AI assistant is not available or not initialized.'
  }

  for (let i = 0; i < chunks.length; i++) {
    const isLastChunk = i === chunks.length - 1
    try {
      let prompt = `Continue analyzing the HTML for potential threats, harmful content, or suspicious elements. Focus on scripts, links, and overall structure. This is ${isLastChunk ? 'LAST' : ''} chunk ${i + 1} of ${chunks.length}: "${chunks[i]}"`

      console.log(`Analyzing chunk ${i + 1}/${chunks.length}, size: ${chunks[i].length}`)

      const response = await aiSession.prompt(prompt)

      if (isLastChunk) {
        console.log('Final response:', response)
        return response // Return final analysis
      } else {
        console.log('Not-final response:', response)
      }
    } catch (error) {
      console.error(`Error analyzing chunk ${i + 1}:`, error)
      return `Error in final analysis: ${error}`
    }
  }

  // This should not be reached under normal circumstances
  return 'Error: Final analysis not received'
}

async function analyzeWithAI(content: string, type: 'text' | 'html'): Promise<string> {
  if (!aiSession) {
    return 'AI assistant is not available or not initialized.'
  }

  try {
    if (type === 'text') {
      const prompt = `Analyze the following text for potential threats or harmful content: "${content}"`
      return await aiSession.prompt(prompt)
    } else {
      const chunks = []
      for (let i = 0; i < content.length; i += MAX_CHUNK_SIZE) {
        chunks.push(escapeHTML(content.slice(i, i + MAX_CHUNK_SIZE)))
      }
      return await analyzeHTMLChunks(chunks)
    }
  } catch (error) {
    console.error('Error using AI assistant:', error)
    if (error instanceof Error && error.message.includes('token limit exceeded')) {
      return 'The page content is too large for analysis. Please try analyzing specific sections of the page instead.'
    }
    return 'An error occurred while analyzing the content.'
  }
}

function createContextMenus() {
  chrome.contextMenus.create(
    {
      id: 'analyzeText',
      title: 'Analyze selected text',
      contexts: ['selection'],
    },
    () => {
      if (chrome.runtime.lastError) {
        console.error('Error creating analyzeSelectedText menu:', chrome.runtime.lastError)
      } else {
        console.log('analyzeSelectedText menu created successfully')
      }
    }
  )

  chrome.contextMenus.create(
    {
      id: 'analyzeHTML',
      title: 'Analyze page HTML',
      contexts: ['page', 'frame'],
    },
    () => {
      if (chrome.runtime.lastError) {
        console.error('Error creating analyzePageHTML menu:', chrome.runtime.lastError)
      } else {
        console.log('analyzePageHTML menu created successfully')
      }
    }
  )
}

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install' || details.reason === 'update') {
    // Initialize AI assistant when the extension is installed or updated
    initializeAIAssistant()
  }

  // Remove existing menu items to avoid duplicates
  chrome.contextMenus.removeAll(() => {
    console.log('Existing context menus removed')
    // Create context menu items
    createContextMenus()
  })
})

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (tab?.id) {
    if (info.menuItemId === 'analyzeText') {
      chrome.tabs.sendMessage(tab.id, { action: 'getSelectedText' })
    } else if (info.menuItemId === 'analyzeHTML') {
      chrome.tabs.sendMessage(tab.id, { action: 'getPageHTML' })
    }
  }
})

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'analyzeText') {
    analyzeWithAI(message.text, 'text').then(sendResponse)
    return true
  } else if (message.action === 'analyzeHTML') {
    analyzeWithAI(message.html, 'html').then(sendResponse)
    return true
  }
})
