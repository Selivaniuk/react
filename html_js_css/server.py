from flask import Flask, render_template, request, Response, jsonify
from time import time
app = Flask(__name__)


@app.route('/', methods=['GET'])
@app.route('/index', methods=['GET'])
def index():
    context = {
        "ts": time()
    }
    return render_template("index.html", **context), 200


@app.route('/cards', methods=['GET'])
def cards():
    context = {
        "ts": time()
    }
    return render_template("cards.html", **context), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)