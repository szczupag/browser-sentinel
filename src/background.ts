import '@inboxsdk/core/background.js';
declare const ai: typeof window.ai;

async function createOffscreenDocument() {
  const offscreenUrl = 'src/offscreen/offscreen.html';
  // Check if offscreen document already exists
  const existingContexts = await chrome.runtime.getContexts({
    // @ts-ignore
    contextTypes: ['OFFSCREEN_DOCUMENT'],
    documentUrls: [offscreenUrl]
  });
  // @ts-ignore
  if (existingContexts.length > 0) {
    console.log('Offscreen document already exists');
    return;
  }

  // Create offscreen document
  try {
    await chrome.offscreen.createDocument({
      url: offscreenUrl + `#${chrome.i18n.getUILanguage()}`,
      // @ts-ignore
      reasons: ['DOM_SCRAPING'],
      justification: 'Translation API'
    });
    console.log('Offscreen document created successfully');
  } catch (error) {
    console.error('Failed to create offscreen document:', error);
  }
}

(async () => {
  await createOffscreenDocument();
})()
