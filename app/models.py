from app import db


#model for user
class User(db.Model):
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(15), unique=True, nullable=False, primary_key=True)
    password = db.Column(db.String(25), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'
    
#Model for guess made (Used to display in profile)
class Guess(db.Model):
    guessID = db.Column(db.String(), primary_key = True)
    User = db.Column(db.String(), db.ForeignKey('User.username'))
    Guess = db.Column(db.Boolean, nullable = False)
    correctGuess = db.Column(db.Boolean, nullable = False)
    isCorrect = db.Column(db.Boolean, nullable = False)

    def __repr__(self):
        return f'<Was your guess correct? {self.Guess == self.correctGuess}>'
    
