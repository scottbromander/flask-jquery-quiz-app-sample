from flask import (Flask, render_template, jsonify, request, url_for)

app = Flask(__name__)

@app.route("/")
def welcome():
    return render_template("index.html")

@app.route("/api/node")
def api_node():
    return jsonify()