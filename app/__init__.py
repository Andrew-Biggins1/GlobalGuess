from flask import Flask, render_template

# Create the Flask application instance
flaskApp = Flask(__name__)

# Define the homepage route and view
@flaskApp.route('/')
def homepage():
    return render_template('home.html')

from app import routes