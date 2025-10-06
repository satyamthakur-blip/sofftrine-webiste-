#!/usr/bin/env python3
"""
run.py - small helper to check required images, start a local static server and open the site in the browser.

Usage: double-click start-site.bat (Windows) or run `python run.py`.
"""
import http.server
import socketserver
import threading
import webbrowser
import os
import socket
import sys
import time

ROOT = os.path.dirname(os.path.abspath(__file__))
IMAGES_DIR = os.path.join(ROOT, 'images')
PORT = 8000

REQUIRED_IMAGES = [
    'company-logo.png',
    'hero-bg.jpg',
    'project-studs.jpg',
    'project-plaque.jpg',
    'project-site-view.jpg',
    'project-villa.jpg',
    'project-brick-facade.jpg',
    'project-fence1.jpg'
]


def check_images():
    missing = []
    for img in REQUIRED_IMAGES:
        path = os.path.join(IMAGES_DIR, img)
        if not os.path.exists(path):
            missing.append(img)
    if missing:
        print('\nMissing images:')
        for m in missing:
            print(' -', m)
        print('\nPut the missing files into:', IMAGES_DIR)
    else:
        print('\nAll required images are present.')


def is_port_in_use(port=PORT, host='127.0.0.1'):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        try:
            s.settimeout(0.5)
            s.connect((host, port))
            return True
        except Exception:
            return False


def start_server(port=PORT):
    os.chdir(ROOT)
    handler = http.server.SimpleHTTPRequestHandler
    try:
        httpd = socketserver.TCPServer(("", port), handler)
    except OSError as e:
        print('Could not start server on port', port, '-', e)
        return None

    def serve():
        print(f'Serving HTTP on 0.0.0.0 port {port} (http://127.0.0.1:{port}/) ...')
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass

    t = threading.Thread(target=serve, daemon=True)
    t.start()
    return httpd


def main():
    print('DWIJA Infra — local helper')
    check_images()

    if is_port_in_use(PORT):
        print(f'Port {PORT} appears to be in use. Assuming server already running.')
    else:
        srv = start_server(PORT)
        if not srv:
            print('Failed to start server; try running with admin privileges or free the port.')
            sys.exit(1)

    # Give server a moment to boot
    time.sleep(0.5)
    url = f'http://127.0.0.1:{PORT}/'
    print('Opening browser to', url)
    try:
        webbrowser.open(url)
    except Exception as e:
        print('Failed to open browser:', e)

    print('\nPress Ctrl+C in this window to stop the server (if started by this script).')
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print('\nExiting...')


if __name__ == '__main__':
    main()
