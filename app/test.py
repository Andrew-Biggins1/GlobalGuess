from app.models import User

test1 = User("user1@gmail.com", "user1", "password1")
test2 = User("user2@gmail.com", "user2", "password2")
test3 = User("user3@gmail.com", "user3", "password3")
test4 = User("user4@gmail.com", "user4", "password4")
test5 = User("user5@gmail.com", "user5", "password5")
test6 = User("user6@gmail.com", "user6", "password6")
test7 = User("user7@gmail.com", "user7", "password7")
test8 = User("user8@gmail.com", "user8", "password8")
test9 = User("user9@gmail.com", "user9", "password9")

userList = (test1, test2, test3, test4, test5, test6, test7, test8, test9)

#Populate database with userList to check database is working