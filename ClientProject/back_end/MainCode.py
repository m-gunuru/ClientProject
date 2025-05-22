import http.server
import socketserver
import webbrowser
import os
from threading import Thread
from flask import Flask, jsonify

# Set up Flask for the backend (dialogue API)
app = Flask(__name__)

# Dialogue data that will be served through the backend API
DIALOGUE = [
    {"speaker": "Professor Oak", "text": "Welcome to the world of Pokémon!"},
    {"speaker": "Ash", "text": "I'm ready to become a Pokémon master!"},
    {"speaker": "Pikachu", "text": "Pika pika!"}
]

@app.route("/dialogue", methods=["GET"])
def get_dialogue():
    return jsonify(DIALOGUE)

def run_flask():
    """Run Flask backend API on port 5000"""
    app.run(debug=True, port=5000)

def run_frontend():
    """Run the simple HTTP server to serve the React frontend on port 8000"""
    PORT = 8000
    DIRECTORY = "../front_end"  # Make sure this is the correct relative path to your frontend

    # Change directory to the frontend folder
    os.chdir(DIRECTORY)

    Handler = http.server.SimpleHTTPRequestHandler

    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving React frontend at http://localhost:{PORT}")
        webbrowser.open(f"http://localhost:{PORT}/index.html")  # Open the app in a browser
        webbrowser.open(f"http://localhost:{PORT}")  # Open the default page (index.html)
        httpd.serve_forever()

def start_servers():
    """Start both Flask API server and React frontend server"""
    # Start Flask server in a separate thread
    flask_thread = Thread(target=run_flask)
    flask_thread.daemon = True  # So the thread will exit when the main program exits
    flask_thread.start()

    # Start React frontend server
    run_frontend()

if __name__ == "__main__":
    start_servers()
