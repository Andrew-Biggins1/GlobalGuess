from flask import Flask, render_template
from app.config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager


flaskApp = Flask(__name__)
flaskApp.config.from_object(Config)
db = SQLAlchemy(flaskApp)
migrate = Migrate(flaskApp, db)

login_manager = LoginManager()
login_manager.login_view = 'login'

@flaskApp.route('/')
def homepage():
    return render_template('home.html')

from app import routes, models