from flask import redirect, render_template, request, url_for, flash, jsonify, session
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


@flaskApp.route('/register', methods=['post'])
def registerComplete():
    email = request.form['email']
    username = request.form['username']
    password = request.form['password']
    #print(f'Email: {email}')
    #print(f'Username: {username}')
    #print(f'Password: {password}')

    
    if not email or not username or not password:
        flash('Please enter all required fields.', 'error')
    elif len(username) > 15 or len(username) < 4:
        flash('Username must be between 4 and 15 characters long.', 'error')
    elif len(password) > 25 or len(password) < 6:
        flash('Password must be between 6 and 25 characters long.', 'error')
    elif len(email) >120:
        flash('Please enter valid email.', 'error')
    else:
        username
        session['js_username'] = username
            
        new_user = User(email=email, username=username, password=password)
        db.session.add(new_user)
        db.session.commit()
        flash('Registration successful!', 'success')
        return redirect(url_for('play'))
        

@flaskApp.route('/login')
def login():
    