from app import db
from werkzeug.security import generate_password_hash, check_password_hash


#model for user
class User(db.Model):
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(15), unique=True, nullable=False, primary_key=True)
    password = db.Column(db.String(25), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'
    
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def validate_password(self, password):
        return check_password_hash(self.password_hash, password)
    
#Model for guess made (Used to display in profile)
class Guess(db.Model):
    guessID = db.Column(db.String(), primary_key = True)
    User = db.Column(db.String(), db.ForeignKey('User.username'))
    Guess = db.Column(db.Boolean, nullable = False)
    correctGuess = db.Column(db.Boolean, nullable = False)
    isCorrect = db.Column(db.Boolean, nullable = False)

    def __repr__(self):
        return f'<Was your guess correct? {self.Guess == self.correctGuess}>'
    
    

#Model for images uploaded
class Upload(db.Model):
    uploadID = db.Column(db.String(), primary_key = True)
    User = db.Column(db.String(), db.ForeignKey('User.username'))
    location = db.Column(db.String(25), nullable=False)
