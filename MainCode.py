import http.server
import socketserver
import webbrowser
import os

PORT = 8000
DIRECTORY = "."

os.chdir(DIRECTORY)

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    webbrowser.open(f"http://localhost:{PORT}/index.html")
    httpd.serve_forever()






