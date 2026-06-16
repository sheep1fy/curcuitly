from flask import Flask, render_template, request, jsonify, make_response, redirect

app = Flask(__name__)

# Import your AI function
# ai.py should contain:
# def ask_ai(prompt):
#     return "response"
from ai import ask_ai

ADMIN_CODE = "2026"
MESSAGE_LIMIT = 15


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/favicon.ico")
def favicon():
    return app.send_static_file("../favicon.ico")


@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    prompt = data.get("message", "")

    count = int(request.cookies.get("message_count", 0))

    if count >= MESSAGE_LIMIT:
        return jsonify({
            "limited": True,
            "response": "You have reached the free limit. Buy Premium to continue."
        })

    response = ask_ai(prompt)

    res = make_response(jsonify({
        "limited": False,
        "response": response
    }))

    res.set_cookie(
        "message_count",
        str(count + 1),
        max_age=60 * 60 * 24 * 365
    )

    return res


@app.route("/premium")
def premium():
    return redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ")


@app.route("/admin")
def admin():
    code = request.args.get("code")

    if code != ADMIN_CODE:
        return "Access Denied", 403

    return render_template("admin.html")


if __name__ == "__main__":
    app.run(debug=True)
