from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps({
inp = input("What product would you like help with finding? ").lower()

if inp in ["mic", "microphone"]:
    mic = int(input("What is your budget? ($) "))

    if mic <= 100:
        print("Recommended option: FIFINE A6V")
    elif mic <= 200:
        print("Recommended option: Audio-Technica AT2020 (XLR)")
    elif mic <= 300:
        print("Recommended option: Rode NT1 (5th Gen)")
    elif mic > 300:
        print("You can buy most mics lol")

elif inp in ["audio", "speaker"]:
    aud = int(input("What is your budget? ($) "))
    if aud <= 100:
         print(f"Reccomended option: Ultimate Ears WONDERBOOM 4")
    elif aud <= 200:
         print(f"Reccomended option: JBL Charge 6")

    elif aud <= 300:
       print(f"Reccomended option: Sony ULT FIELD 3")
    elif aud > 300:
        print("You can buy most mics lol")
else:
    print("Invalid option, please try again.")
        }).encode())
