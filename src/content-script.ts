console.log('Hello from the content script')

// Get selected text
function getSelectedText(): string {
  return window.getSelection()?.toString() || ''
}

// Get page HTML
function getPageHTML(): string {
  return document.documentElement.outerHTML
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getSelectedText') {
    const selectedText = getSelectedText()
    console.log('selectedText', selectedText)
    if (selectedText) {
      chrome.runtime.sendMessage({ action: 'analyzeText', text: selectedText }, (response) => {
        alert(`AI Analysis of Selected Text:\n\n${response}`)
      })
    } else {
      alert('Please select some text to analyze.')
    }
  } else if (message.action === 'getPageHTML') {
    const pageHTML = getPageHTML()
    console.log('pageHTML', pageHTML)
    chrome.runtime.sendMessage({ action: 'analyzeHTML', html: pageHTML }, (response) => {
      alert(`AI Analysis of Page HTML:\n\n${response}`)
    })
  }
})
