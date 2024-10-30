# Phishing Test Environment

This tool sets up a controlled environment where you can test anti-phishing measures without accessing actual malicious websites.

## Features
- Simulates phishing websites locally
- HTTPS support with self-signed certificates
- Automatically manages hosts file
- Supports multiple domains
- Handles domain-specific assets
- Clean shutdown and cleanup

## Prerequisites
- Linux/Unix/macOS system
- Python 3.6+
- Root privileges (for hosts file modification and ports 443/80)
- OpenSSL (usually pre-installed)

## Installation
1. Make the script executable:
```bash
chmod +x setup-phishing-test.sh
```

## Usage
1. Add your mock phishing sites to the `phishing-mocks` directory:
   - Name format: `domain.html` (e.g., `bankofanerica.com.html`)
   - Place assets in `phishing-mocks/assets/[domain]/`
   - Shared assets go in `phishing-mocks/assets/common/`

2. Run the setup script:
```bash
sudo ./setup-phishing-test.sh
```

3. Access your test sites via HTTPS:
   - If using port 443: `https://bankofanerica.com`
   - If using fallback port: `https://bankofanerica.com:8443`

4. Press Ctrl+C to cleanup and exit

## Handling SSL Certificate Warnings

When accessing the sites, Chrome will show an SSL certificate warning because we're using a self-signed certificate. **This is expected**.

### Bypassing Certificate Warnings for Testing

#### Option 1: Launch Chrome with Security Disabled
```bash
# macOS
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir=/tmp/chrome-testing --ignore-certificate-errors

# Linux
google-chrome --user-data-dir=/tmp/chrome-testing --ignore-certificate-errors
```

#### Option 2: Add Certificate Exception
1. Click "Advanced" on the warning page
2. Click "Proceed to [site] (unsafe)"
3. You'll only need to do this once per domain during your testing session

## Directory Structure
```
phishing-mocks/
├── domain.html           # Your mock phishing sites
└── assets/
    ├── common/          # Shared assets
    └── domain/          # Domain-specific assets

certs/                   # Generated SSL certificates
├── cert.pem            # Certificate file
└── key.pem             # Private key file
```

## Important Notes
1. The SSL certificate warnings are expected
2. Don't try to bypass certificate warnings on real websites
3. This tool is for legitimate testing purposes only

## Troubleshooting
1. If port 443 is unavailable, the script will try port 8443
2. If you see "connection refused", check if another web server is running
3. If Chrome refuses to proceed:
   - Clear your browser cache and SSL state
   - Try using the Chrome launch command provided above
