import http.server
import socketserver
import webbrowser
import os

PORT = 8000
DIRECTORY = "../front_end"

os.chdir(DIRECTORY)

Handler = http.server.SimpleHTTPRequestHandler
html_file_path = "/Users/mohana/ClientProject/code/ClientProject/front_end/FrontPage.html"

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    webbrowser.open(html_file_path)
    webbrowser.open(f"http://localhost:{PORT}/FrontPage.html")
    httpd.serve_forever()



