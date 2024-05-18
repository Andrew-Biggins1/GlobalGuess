# GlobalGuess

## PLEASE NOTE
To load css, /static/main.css didn't want to work at all but /app/static/main.css didn't work in flask
so  ```<link rel="stylesheet" href="{{ url_for('static', filename='main.css') }}">``` was used but wont pass html validation. 
Please insert into html documents or css will not load, another copy of this has been made called GlobalGuess1 which has the full code but wont pass validation.


## Description:
A game where a user is able to upload a picture of a place, and the other users can guess where the image was taken. Users will be able to sign up and create an account, or login with an existing account.


## Group Members:
| Name           | Student ID |
|----------------|------------|
| Andrew Biggins | 23384163   |
| Leo McGill     | 23334544   |
| Tyson Haines   | 23779585   |

## Architecture
Frontend:
- html: Creating templates for pages
- css: Creating styling for templates
- Javascript: Creating interactive elements client side

Backend (Flask app in python):
- SQLalchemy: To interact with SQlite database
- Routes: define routes for webpage
- Initialization: To initialize flask app
- SQlite: easy database to store accounts


# Launch instructions
1. Install dependencies in requirements.txt
2. Ensure python3, sqlite, flask are installed
3. Navigate to the "global guess" directory
4. build database using ```flask db init```
5. run flask application using ```flask run```



