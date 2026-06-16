from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):

    def do_POST(self):
        try:
            length = int(self.headers.get('Content-Length'))
            body = self.rfile.read(length)
            data = json.loads(body)

            inp = data.get("prompt", "").lower()

            result = ""

            if inp in ["mic", "microphone"]:
                mic = data.get("budget", None)

                if mic is None:
                    mic = 100  # fallback default

                mic = int(mic)

                if mic <= 100:
                    result = "Recommended option: FIFINE A6V"
                elif mic <= 200:
                    result = "Recommended option: Audio-Technica AT2020 (XLR)"
                elif mic <= 300:
                    result = "Recommended option: Rode NT1 (5th Gen)"
                else:
                    result = "You can buy most mics lol"

            elif inp in ["audio", "speaker"]:
                aud = data.get("budget", None)

                if aud is None:
                    aud = 100

                aud = int(aud)

                if aud <= 100:
                    result = "Recommended option: Ultimate Ears WONDERBOOM 4"
                elif aud <= 200:
                    result = "Recommended option: JBL Charge 6"
                elif aud <= 300:
                    result = "Recommended option: Sony ULT FIELD 3"
                else:
                    result = "You can buy most speakers lol"

            else:
                result = "Invalid option, please try again."

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()

            self.wfile.write(json.dumps({
                "result": result
            }).encode())

        except Exception as e:
            self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.end_headers()

            self.wfile.write(json.dumps({
                "error": str(e)
            }).encode())
