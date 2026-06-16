import json

def handler(request):
    try:
        data = request.get_json()
        inp = data.get("prompt", "").lower()

        result = ""

        if inp in ["mic", "microphone"]:
            mic = int(data.get("budget", 100))

            if mic <= 100:
                result = "Recommended option: FIFINE A6V"
            elif mic <= 200:
                result = "Recommended option: Audio-Technica AT2020 (XLR)"
            elif mic <= 300:
                result = "Recommended option: Rode NT1 (5th Gen)"
            else:
                result = "You can buy most mics lol"

        elif inp in ["audio", "speaker"]:
            aud = int(data.get("budget", 100))

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

        return {
            "statusCode": 200,
            "body": json.dumps({"result": result})
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": str(e)})
        }
