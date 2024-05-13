from app import db


class User(db.Model):
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(15), unique=True, nullable=False, primary_key=True)
    password = db.Column(db.String(25), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'