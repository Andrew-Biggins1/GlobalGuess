from flask import redirect, render_template, request, url_for, flash, jsonify, session
from app import flaskApp,db
from app.models import User
from app.forms import registerForm
from werkzeug.security import generate_password_hash, check_password_hash

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
    form = registerForm()
    if not form.validate_on_submit():
        return render_template('signup.html', form=form)
    


    email = form.email
    username = form.username
    password = form.password
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
        hashed_password = generate_password_hash(password)
        new_user = User(email=email, username=username, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        flash('Registration successful!', 'success')
        

#@flaskApp.route('/login')
#def login():
