# 🛡️ Shield

## Overview

Shield is an AI-powered Chrome extension that alerts you to online threats, such as phishing and harmful content. It utilizes Chrome's built-in AI APIs to enhance your browsing safety while ensuring your privacy through local analysis.

## Development

### Prerequisites

- Node.js (v20.12.2 or later)
- npm (v10.5.0 or later)
- Chrome (v128.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/szczupag/ai-shield-chrome-extension.git
   ```
2. Install dependencies:
   ```
   cd ai-shield-chrome-extension
   npm install
   ```
3. Build the extension:
   ```
   npm run build:extension
   ```
4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" in the top right corner.
   - Click "Load unpacked."
   - Select the `dist` folder from the project directory.

### Building the extension with hot reloading

```
npm run dev
```

### Running tests

```
npm run test
```
