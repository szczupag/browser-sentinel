//Google Safe Browsing API Client
class SafeBrowsingClient {
  private apiKey: string;
  private clientId: string;
  private clientVersion: string;
  private apiUrl = 'https://safebrowsing.googleapis.com/v4/threatMatches:find';

  constructor(apiKey: string, clientId: string, clientVersion: string) {
    this.apiKey = apiKey;
    this.clientId = clientId;
    this.clientVersion = clientVersion;
  }

  async checkUrls(urls: string[]): Promise<{[url: string]: boolean}> {
    try {
      const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client: {
            clientId: this.clientId,
            clientVersion: this.clientVersion
          },
          threatInfo: {
            threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "POTENTIALLY_HARMFUL_APPLICATION", "THREAT_TYPE_UNSPECIFIED"],
            platformTypes: ["ANY_PLATFORM"],
            threatEntryTypes: ["URL"],
            threatEntries: urls.map(url => ({ url }))
          }
        })
      });

      const data = await response.json();
      
      // Create result map (true means threat found)
      const result: {[url: string]: boolean} = {};
      urls.forEach(url => {
        result[url] = false;
      });
      
      if (data.matches) {
        data.matches.forEach((match: {threat: {url: string}}) => {
          result[match.threat.url] = true;
        });
      }

      return result;
    } catch (error) {
      console.error('Safe Browsing API error:', error);
      // Return all URLs as safe if API fails
      return Object.fromEntries(urls.map(url => [url, false]));
    }
  }
}

export default SafeBrowsingClient;