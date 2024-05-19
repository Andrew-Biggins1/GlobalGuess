from models import User
from app import db
from werkzeug.security import generate_password_hash

#test file to populate user database

test1 = User("user1@gmail.com", "user1", generate_password_hash("password1"))
test2 = User("user2@gmail.com", "user2", generate_password_hash("password2"))
test3 = User("user3@gmail.com", "user3", generate_password_hash("password3"))
test4 = User("user4@gmail.com", "user4", generate_password_hash("password4"))
test5 = User("user5@gmail.com", "user5", generate_password_hash("password5"))
test6 = User("user6@gmail.com", "user6", generate_password_hash("password6"))
test7 = User("user7@gmail.com", "user7", generate_password_hash("password7"))
test8 = User("user8@gmail.com", "user8", generate_password_hash("password8"))
test9 = User("user9@gmail.com", "user9", generate_password_hash("password9"))

testgroup = [test1, test2, test3, test4, test5, test6, test7, test8, test9]

db.session.add_all(testgroup)
db.session.commit()