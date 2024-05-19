from flask import redirect, render_template, request, url_for, flash, jsonify, session
from flask_login import login_user
from app import flaskApp,db
from app.models import User
from app.forms import registerForm, loginForm
from werkzeug.security import generate_password_hash, check_password_hash

@flaskApp.route('/about')
def about():
    return render_template('about.html')


@flaskApp.route("/signup")
def signup():
    return render_template("signup.html")

@flaskApp.route("/profile")
#@login_required
def profile():
    return render_template("profile.html")

@flaskApp.route("/play")
#@login_required
def play():
    return render_template("play.html")


@flaskApp.route('/register', methods=['post'])
def registerComplete():
    form = registerForm() 
    if form.validate_on_submit():
        return redirect(url_for('play')) 
    return render_template('signup.html', form=form) 
    #LOGIC FOR REGISTERING USER
    '''
    form = registerForm()
    if not form.validate_on_submit():
        return render_template('signup.html', form=form)

    email = form.email
    username = form.username
    password = form.password

    
    if not email or not username or not password:
        flash('Please enter all required fields.', 'error')
    elif len(username) >= 15 or len(username) <= 4:
        flash('Username must be atleast 4 characters long but no longer than 15.', 'error')
    elif len(password) >= 25 or len(password) <= 6:
        flash('Password must be atleast 6 characters long but no longer than 25.', 'error')
    elif len(email) >120:
        flash('Please enter valid email.', 'error')
    else:
        hashed_password = generate_password_hash(password)
        new_user = User(email=email, username=username, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        flash('Registration successful!', 'success')
    '''
    return render_template("play.html")

@flaskApp.route('/login', methods=['get', 'post'])
def login():
    form = loginForm()
    if request.method == "get":
        return render_template("login.html", form=form)

    #LOGIC FOR LOGGING USER IN
    #Grab data, compare hash against hash in db, login if correct
    '''
    username = form.username.data
    user = User.username.query.get(username)

    if not user:
        flash(f'Username or Password incorrect', 'error')
        return render_template('login.html', form=form)
    
    password = form.password.data
    if not user.validate_password(password):
        flash(f'Username or Password incorrect', 'error')

    

    login_user(user)
    return redirect(url_for())
    '''

    if form.validate_on_submit():
        return render_template("play.html")
    return render_template('login.html', form=form)