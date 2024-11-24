let translator: any = null;
let translationAvailable = false;
const languagePair = {
  sourceLanguage: 'en',
  // hardcode language here if needed for testing
  targetLanguage: window.location.hash.substring(1) 
};

(async () => {
  console.log(`[${new Date().toLocaleString()}] Offscreen document loaded`);
  if (!('translation' in self) || languagePair.targetLanguage.startsWith('en')) {
    return;
  }
  console.info('Initializing translator');
  try {
    // @ts-ignore
    const translationStatus = await translation.canTranslate(languagePair);
    console.info('Translation status:', translationStatus);

    if (translationStatus === 'no') {
      console.error('Translation not available');
      return;
    }

    const initializeTranslator = async () => {
      // @ts-ignore
      translator = await translation.createTranslator(languagePair);
      translationAvailable = true;
      console.info('Translator initialized');
    };

    if (translationStatus === 'readily') {
      await initializeTranslator();
    } else if (translationStatus === 'after-download') {
      const trackDownloadProgress = (event: {loaded: number, total: number}) => {
        console.info(`Download progress: ${event.loaded}/${event.total}`);
      };

      translator.addEventListener('downloadprogress', trackDownloadProgress);
      await translator.ready;
      await initializeTranslator();
    }
  } catch (error) {
    console.error('Failed to initialize translator:', (error as Error).message);
  }
})()

chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  (async () => {
    if (message.action !== 'translate') {
      return true;
    }

    try {
      // If translation not available, return original text
      if (!translationAvailable || !translator) {
        sendResponse({ error: 'Translation not available', translatedText: message.text });
      } else {
        const translatedText = await translator.translate(message.text);
        sendResponse({ translatedText });
      }
    } catch (err) {
      const error = err as Error;
      console.error('Translation error:', error);
      sendResponse({ error: error.message, translatedText: message.text });
    }
  })();

  return true; // Keep message channel open for async response
});