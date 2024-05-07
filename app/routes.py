from flask import redirect, render_template, request, url_for
from app import flaskApp



@flaskApp.route('/about')
def about():
    return render_template('about.html')

@flaskApp.route("/login")
def login():
    return render_template("login.html")

@flaskApp.route("/signup")
def signup():
    return render_template("signup.html")

@flaskApp.route("/profile")
def profile():
    return render_template("profile.html")