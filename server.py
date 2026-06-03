#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 8000
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"✓ Servidor activo en http://localhost:{PORT}")
    print("Presiona Ctrl+C para detener")
    httpd.serve_forever()
