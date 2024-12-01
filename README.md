# <img src="src/icons/128/BrowserSentinel-default.png" width="32" height="32" alt="BrowserSentinel Icon" align="center"> BrowserSentinel

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

### Email Phishing Detection:

Our email scanning feature analyzes Gmail messages for potential threats:

1. **Content Analysis**:

   - Uses Chrome's built-in Gemini Nano for contextual understanding
   - Analysis performed locally for maximum privacy (with the exception of the Google safe browsing lookup)
   - Real-time visual highlighting of potential threats

2. **Threat Classification**:

   - Three-tier severity system (HIGH/MEDIUM/LOW)
   - Color-coded visual indicators
   - Contextual tooltips explaining concerns

3. **Smart UI**:
   - Non-blocking analysis process
   - Clear status indicators
   - Adaptive warnings based on threat severity
   - Gmail-native design language

### 💡 Technical Insights

During development, we discovered some interesting limitations and solutions:

- Pure LLM-based domain analysis proved unreliable due to how tokenization works in language models
- Hybrid approach (traditional algorithms + AI) provided better results than pure AI solution
- Local model shows occasional inconsistencies but benefits from no latency and privacy protection
- Careful prompt engineering required to balance sensitivity vs false positives

These limitations actually led to a more robust solution combining traditional security measures with AI capabilities.

## ⚠️ Known Issues & Limitations

### Language Support

- Primary focus on English content
- Limited effectiveness with non-English emails and websites
- May incorrectly flag legitimate non-English business communications

### AI Model Behavior

- Occasional Gemini Nano timeouts or errors
- Model needs periodic reloading in some cases
- Some inconsistency in threat level assessment

### False Positives

- May flag legitimate business deadlines as urgent language
- Sometimes over-sensitive to normal marketing language
- Can mistake standard legal disclaimers for threats

## 🎯 Future Improvements

- Enhanced multilingual support
- Reduced false positive rate through improved prompt engineering
- Better handling of Gemini Nano errors
- Performance optimizations for large emails/pages
- Expanded test suite for edge cases
- Community-driven phishing pattern database

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
