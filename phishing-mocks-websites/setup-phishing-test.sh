#!/bin/bash

#
# Phishing Test Environment Setup Script
# Compatible with both macOS and Linux
#

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MOCKS_DIR="$SCRIPT_DIR/phishing-mocks"
HOSTS_FILE="/etc/hosts"
HOSTS_BACKUP="/tmp/hosts.backup.$(date +%s)"
DEFAULT_PORT=443
FALLBACK_PORT=8443
CERT_DIR="$SCRIPT_DIR/certs"
SERVER_PORT=$DEFAULT_PORT

# Detect OS type
OS_TYPE="$(uname -s)"

# Create domain list from HTML files in the mocks directory
get_domains() {
    for file in "$MOCKS_DIR"/*.html; do
        if [ -f "$file" ]; then
            basename "$file" .html
        fi
    done
}

# Backup the original hosts file
backup_hosts() {
    echo "📁 Backing up hosts file..."
    if [ "$OS_TYPE" = "Darwin" ]; then
        sudo cp "$HOSTS_FILE" "$HOSTS_BACKUP"
    else
        sudo cp --preserve=mode,ownership "$HOSTS_FILE" "$HOSTS_BACKUP"
    fi
}

# Add phishing test domains to hosts file
setup_hosts() {
    echo "🔧 Setting up hosts file..."
    while IFS= read -r domain; do
        echo "127.0.0.1 $domain www.$domain" | sudo tee -a "$HOSTS_FILE" > /dev/null
        echo "   Added: $domain"
    done < <(get_domains)
    
    # macOS specific: flush DNS cache
    if [ "$OS_TYPE" = "Darwin" ]; then
        echo "🧹 Flushing DNS cache..."
        sudo dscacheutil -flushcache
        sudo killall -HUP mDNSResponder
    fi
}

# Check if a port is available
check_port() {
    local port=$1
    if [ "$OS_TYPE" = "Darwin" ]; then
        if ! netstat -anf inet | grep "LISTEN" | grep -q "\.${port} "; then
            return 0
        fi
    else
        if ! netstat -tuln | grep -q ":${port} "; then
            return 0
        fi
    fi
    return 1
}

# Configure the server port (try default, fallback to alternative)
setup_port() {
    if check_port $DEFAULT_PORT; then
        SERVER_PORT=$DEFAULT_PORT
        echo "✅ Using default port $DEFAULT_PORT"
    else
        echo "⚠️  Port $DEFAULT_PORT is not available, trying fallback port $FALLBACK_PORT"
        if check_port $FALLBACK_PORT; then
            SERVER_PORT=$FALLBACK_PORT
        else
            echo "❌ Error: Both port $DEFAULT_PORT and $FALLBACK_PORT are in use"
            echo "Please stop other web servers or specify a different port"
            exit 1
        fi
    fi
}

# Start the custom HTTP server
start_server() {
    echo "🚀 Starting HTTP server on port $SERVER_PORT..."
    cd "$MOCKS_DIR"
    
    # Check for Python 3 command (macOS might use python3 or python)
    PYTHON_CMD="python3"
    if ! command -v python3 &> /dev/null; then
        if command -v python &> /dev/null && [[ $(python --version 2>&1) == *"Python 3"* ]]; then
            PYTHON_CMD="python"
        else
            echo "❌ Error: Python 3 is required but not found"
            exit 1
        fi
    fi
    
    $PYTHON_CMD "$SCRIPT_DIR/phishing_server.py" "$SERVER_PORT" 2>/dev/null &
    SERVER_PID=$!
    
    # Give the server a moment to start
    sleep 3
    
    # Check if server started successfully
    if kill -0 $SERVER_PID 2>/dev/null; then
        echo "✅ Server started successfully"
    else
        echo "❌ Failed to start server on port $SERVER_PORT"
        exit 1
    fi
}

# Cleanup function - restores hosts file and stops server
cleanup() {
    echo -e "\n🧹 Cleaning up..."
    
    # Kill HTTP server
    if [ ! -z "$SERVER_PID" ]; then
        kill $SERVER_PID 2>/dev/null
    fi
    
    # Restore original hosts file
    echo "📝 Restoring hosts file..."
    sudo cp "$HOSTS_BACKUP" "$HOSTS_FILE"
    
    # macOS specific: flush DNS cache after restoration
    if [ "$OS_TYPE" = "Darwin" ]; then
        echo "🧹 Flushing DNS cache..."
        sudo dscacheutil -flushcache
        sudo killall -HUP mDNSResponder
    fi
    
    echo "✨ Cleanup complete"
    exit 0
}

# Verify the mocks directory exists and contains HTML files
check_mocks_dir() {
    if [ ! -d "$MOCKS_DIR" ]; then
        echo "⚠️  Error: $MOCKS_DIR directory not found"
        echo "Please create the directory and add mock HTML files"
        exit 1
    fi
    
    # Check if there are any HTML files
    if ! ls "$MOCKS_DIR"/*.html >/dev/null 2>&1; then
        echo "⚠️  Error: No HTML files found in $MOCKS_DIR"
        echo "Please add mock HTML files in the format: domain.html"
        exit 1
    fi
}

setup_certificates() {
    echo "🔒 Setting up SSL certificates..."
    
    # Check if certificates already exist
    if [ -f "$CERT_DIR/cert.pem" ] && [ -f "$CERT_DIR/key.pem" ]; then
        echo "   Using existing certificates"
        return
    fi
    
    # Create certificates directory
    mkdir -p "$CERT_DIR"
    
    # Generate self-signed certificate
    openssl req -x509 -newkey rsa:2048 \
        -keyout "$CERT_DIR/key.pem" \
        -out "$CERT_DIR/cert.pem" \
        -days 365 -nodes \
        -subj "/CN=localhost" 2>/dev/null
        
    if [ $? -eq 0 ]; then
        echo "   Certificates generated successfully"
    else
        echo "❌ Failed to generate certificates"
        exit 1
    fi
}

# Main script execution
echo "🛡️  Setting up phishing test environment..."

# Check if running as root (needed for hosts file and port 80)
if [ "$EUID" -ne 0 ]; then
    echo "⚠️  Please run with sudo"
    exit 1
fi

# Preliminary checks
check_mocks_dir
setup_certificates

# Setup cleanup trap for Ctrl+C
trap cleanup SIGINT SIGTERM

# Run setup steps
backup_hosts
setup_hosts
setup_port
start_server

# Display available test domains
echo -e "\n✅ Setup complete!"
echo "🌍 Available test domains:"
while IFS= read -r domain; do
    if [ "$SERVER_PORT" = "80" ]; then
        echo "   http://$domain"
    elif [ "$SERVER_PORT" = "443" ]; then
        echo "   https://$domain"
    else
        echo "   http://$domain:$SERVER_PORT"
    fi
done < <(get_domains)
echo -e "\n⚠️  Press Ctrl+C to cleanup and exit"

# Wait for Ctrl+C
while true; do
    sleep 1
done