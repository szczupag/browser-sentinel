/**
 * Translates the given text using the Chrome AI translation service
 * @param text The text to translate
 * @returns Promise<string> The translated text
 */
export async function translate(text: string): Promise<string> {
  const response = await chrome.runtime.sendMessage({ 
    action: 'translate', 
    text 
  });
  if (response.error) {
    console.error('Translation failed:', response.error);
  }
  return response.translatedText;
} 