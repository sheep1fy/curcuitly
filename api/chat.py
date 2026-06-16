from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)

        data = json.loads(body)
        message = data.get("message", "").lower()

        response = "Invalid option, please try again."

        if "mic" in message or "microphone" in message:
            response = (
                "What is your budget?\n"
                "Under $100: FIFINE A6V\n"
                "Under $200: Audio-Technica AT2020\n"
                "Under $300: Rode NT1 (5th Gen)"
            )

        elif "speaker" in message or "audio" in message:
            response = (
                "What is your budget?\n"
                "Under $100: Ultimate Ears WONDERBOOM 4\n"
                "Under $200: JBL Charge 6\n"
                "Under $300: Sony ULT FIELD 3"
            )

        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()

        self.wfile.write(json.dumps({
            "response": response
        }).encode())
