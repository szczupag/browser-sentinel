console.log('Hello from the content script')

// Get selected text
function getSelectedText(): string {
  return window.getSelection()?.toString() || ''
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getSelectedText') {
    const selectedText = getSelectedText()
    if (selectedText) {
      chrome.runtime.sendMessage({ action: 'analyzeText', text: selectedText }, (response) => {
        alert(`AI Analysis: ${response}`)
      })
    } else {
      alert('Please select some text to analyze.')
    }
  }
})
