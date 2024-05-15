from flask import redirect, render_template, request, url_for
from app import flaskApp,db
from app.models import User



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

@flaskApp.route("/play")
def play():
    return render_template("play.html")

@flaskApp.route('/register', methods=['GET', 'POST'])
def registerComplete():
    if request.method == 'POST':
        email = request.form['email']
        username = request.form['username']
        password = request.form['password']
        new_user = User(email=email, username=username, password=password)
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template('register.html')