from wtforms import PasswordField, StringField, SubmitField
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, Email, Length



class registerForm(FlaskForm):
    email = StringField("Email", validators=[DataRequired(), Email(), Length(max=120)])
    username = StringField("Username", validators=[DataRequired(), Length(min=4, max=15)])
    password = PasswordField("Password", validators=[DataRequired(), Length(min=6, max=25)])    
    submit = SubmitField("Register")


class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Login')

