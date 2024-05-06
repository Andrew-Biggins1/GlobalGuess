from flask import Flask, render_template

# Create the Flask application instance
app = Flask(__name__)

# Define the homepage route and view
@app.route('/')
def homepage():
    return render_template('home.html')
