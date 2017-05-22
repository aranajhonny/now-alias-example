from flask import Flask, Response

app = Flask(__name__)

@app.route("/python")
def index():
    return "Hello from flask"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)