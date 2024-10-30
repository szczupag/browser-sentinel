#!/usr/bin/env python3

from http.server import HTTPServer, SimpleHTTPRequestHandler
import os
import sys
import ssl
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

class PhishingHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        host = self.headers.get('Host', '').split(':')[0]
        if host.startswith('www.'):
            host = host[4:]
            
        logging.info(f"Request: {host}{self.path}")
        
        if self.path == '/':
            html_file = f"{host}.html"
            if os.path.exists(html_file):
                self.serve_html_file(html_file)
                return
                
        try:
            return SimpleHTTPRequestHandler.do_GET(self)
        except Exception as e:
            logging.error(f"Error serving {self.path}: {str(e)}")
            self.send_error(404, f"File not found")
    
    def serve_html_file(self, filename):
        try:
            with open(filename, 'rb') as f:
                content = f.read()
                self.send_response(200)
                self.send_header('Content-Type', 'text/html')
                self.send_header('Content-Length', len(content))
                self.end_headers()
                self.wfile.write(content)
        except Exception as e:
            logging.error(f"Error serving {filename}: {str(e)}")
            self.send_error(500, f"Error serving {filename}")

def run_server(port, use_https=True):
    server_address = ('', port)
    httpd = HTTPServer(server_address, PhishingHandler)
    
    if use_https:
        cert_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'certs')
        cert_path = os.path.join(cert_dir, 'cert.pem')
        key_path = os.path.join(cert_dir, 'key.pem')
        
        if os.path.exists(cert_path) and os.path.exists(key_path):
            context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
            context.load_cert_chain(cert_path, key_path)
            httpd.socket = context.wrap_socket(httpd.socket, server_side=True)
            logging.info(f'Starting HTTPS server on port {port}...')
        else:
            logging.warning('Certificate files not found, falling back to HTTP')
            logging.info(f'Starting HTTP server on port {port}...')
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        logging.info('Shutting down server...')
        httpd.shutdown()

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 443  # Default to HTTPS port
    run_server(port)