from flask import Flask, render_template


flaskApp = Flask(__name__)


@flaskApp.route('/')
def homepage():
    return render_template('home.html')

from app import routes