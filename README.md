# 🛡️ BrowserSentinel

## 🎯 Overview

BrowserSentinel is an AI-powered Chrome extension that safeguards users from online threats, with a primary focus on phishing detection. Created for the Google Chrome Built-in AI Challenge, it leverages Chrome's built-in Gemini Nano model to analyze web content locally, ensuring both security and privacy. Unlike traditional phishing detection services that require sending URLs and webpage content to remote servers, BrowserSentinel performs all checks on your device, ensuring sensitive information never leaves your browser.

## ⚡ Key Features

- Real-time phishing detection using domain analysis and AI content verification
- Local processing using Chrome's built-in AI (no server calls needed)
- Privacy-focused: all analysis happens on your device

## 🔬 Technical Approach & Findings
<details>
<summary>Click to expand technical details</summary>

### Webpage phishing Detector:
Our phishing detection combines traditional security measures with AI analysis:

1. **Domain Analysis**:
   - Implemented Levenshtein distance comparison for typosquatting detection
   - Uses a curated list of legitimate domains as baseline
   - Handles edge cases like subdomains and country-specific TLDs

2. **AI Content Analysis**:
   - Utilizes Chrome's Gemini Nano model for content verification
   - Local processing ensures privacy

### 💡 Technical Insights

During development, we discovered some interesting limitations and solutions:

- Pure LLM-based domain analysis proved unreliable due to how tokenization works in language models
- Hybrid approach (traditional algorithms + AI) provided better results than pure AI solution
- Local model shows occasional inconsistencies but benefits from no latency and privacy protection

These limitations actually led to a more robust solution combining traditional security measures with AI capabilities.

</details>

## 🔧 Testing Tools

In `/phishing-mocks-websites` you'll find our testing environment that helps validate BrowserSentinel's effectiveness. It safely simulates phishing attempts by:
- Creating local mock websites that mimic common phishing patterns
- Setting up HTTPS with self-signed certificates
- Managing system hosts file for domain spoofing
- Handling domain-specific assets and content

This controlled environment lets us test detection capabilities without accessing actual malicious sites. Perfect for development and demonstrations.

## 🛠️ Development

### Prerequisites

- Node.js (v20.12.2 or later)
- npm (v10.5.0 or later)
- Chrome (v128.0.0 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/szczupag/browser-sentinel.git
   ```

2. Install dependencies:
   ```bash
   cd browser-sentinel
   npm install
   ```

3. Build the extension:
   ```bash
   npm run build:extension
   ```

4. Load in Chrome:
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist` folder

### Development Commands

```bash
npm run dev        # Build with hot reloading
npm run test       # Run tests
```

## 📜 License

[TBD](LICENSE)