
//Ajax request to grab username to be displayed
$(document).ready(function() {
    $.get('/get_username', function(data) {
        $('#username').text(data.username);
        localStorage.setItem('username', data.username);
    });
});


function toggleTaskBar() {
            const taskBar = document.getElementById('task-bar');
            taskBar.style.display = (taskBar.style.display === 'block') ? 'none' : 'block';
}

function resetDashboardContent() {
    const dashboardContent = document.getElementById('dashboard-content');
    dashboardContent.innerHTML = `
        <div class="container">
            <h2 id="welcomeMessage"></h2>
            <p>Do you want to play a Game?</p>
            <div class="game-buttons">
                <button onclick="startGame()">Play Game</button>
            </div>
        </div>
    `;
    
    updateWelcomeMessage();
}

function updateWelcomeMessage() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    
    document.getElementById('welcomeMessage').textContent = `Welcome, ${username}!`;
}

function displayPlayerStats() {
    const dashboardContent = document.getElementById('dashboard-content');
    dashboardContent.innerHTML = `
        <div id="player-stats-content">
            <h2>Your Statistics</h2>
            <p>Score: 0</p>
            <p>Accuracy: 0%</p>
            <p>Matches Played: 0</p>
        </div>
    `;
}

function Leaderboard() {
    const dashboardContent = document.getElementById('dashboard-content');
    // need to find way to build leaderboard
}

function startGame() {
    window.location.href = "play.html";
}

function submitImages() {
    const fileInputContainer = document.getElementById('file-input-container');
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0]; 

if (file) {
    const formData = new FormData();
    formData.append('image', file);

    fetch('play.html', {
        method: 'POST',
        body: formData
    }).then(response => {
        console.log('Image submitted successfully');
        fileInputContainer.style.display = 'none';
    }).catch(error => {
        console.error('Error submitting image:', error);
    });


} else {
    console.error('No file selected');
}
}

function returnToHomepage() {
        window.location.href = "home.html";
}

document.getElementById('hamburger').addEventListener('click', toggleTaskBar);

document.addEventListener('DOMContentLoaded', function() {
updateWelcomeMessage();
});

document.addEventListener('click', function(event) {
const taskBar = document.getElementById('task-bar');
const hamburger = document.getElementById('hamburger');
if (event.target !== taskBar && event.target !== hamburger) {
    taskBar.style.display = 'none';
}
});

function showFileInput() {
        const fileInputContainer = document.getElementById('file-input-container');
        fileInputContainer.style.display = 'block';
}

//JAVASCRIPT FOR PLAY PAGE

function loadPlay(){
    var userDisplay = document.getElementById("userNameDisplay");
    updateImageView();
    userDisplay.textContent = localStorage.getItem('username');

    userNumber = getRandomUser();
    populateDivs(userNumber);
    updateImageView();


}
function getRandomUser(){
    var numberOfUsers = testData.length;
    var randomNumber = Math.floor(Math.random() * numberOfUsers);
    return randomNumber;
}
function clearDiv(divID){
    var div = document.getElementById(divID);
    while(div.firstChild){
        div.removeChild;
    }
}

function populateDivs(userNumber) {

    var imageUserName = document.getElementById("imageNameDisplay");
    imageUserName.textContent = "Image uploaded by:" + " " + testData[userNumber].username;

    var imageUrl = testData[userNumber].imageUrl;
    var image = document.createElement("img");
    image.src = imageUrl;
    image.alt = "Location Image";
    image.className = "locationImage";

    var imageText = document.createElement("p");
    imageText.textContent = imageUrl;

    var userName = testData[userNumber].username;
    var userText = document.createElement("p");
    userText.textContent = userName;
    userText.id = "userName"

    var location = testData[userNumber].location;
    var locationText = document.createElement("p");
    locationText.textContent = location;
    locationText.id = "location"

    var resultText = document.createElement("p");
    resultText.id = "result";

    document.getElementById("imageDiv").appendChild(image);
    document.getElementById("imageDiv").appendChild(resultText);
    document.getElementById("hiddenData").appendChild(locationText);
    document.getElementById("hiddenData").appendChild(userText);
}

function checkGuess() {
    var userInput = document.getElementById('guessInput').value;
    var hiddenLocation = document.getElementById("location").textContent; // This is the hidden data embedded in the image
    var resultElement = document.getElementById('result');

    if (userInput === hiddenLocation) {
    resultElement.textContent = "Congratulations! You guessed the correct location.";
    } else {
    resultElement.textContent = "Sorry, that's not correct. Please try again.";
    }
}

function reloadPage(){
    location.reload();
}

function uploadImage(){
    var uploadLocation = document.getElementById("uploadLocation");
    var uploadImageUrl = document.getElementById("imageInput");

    
    if (uploadLocation.textContent === null || fileName===null) {
        console.log("No location/image given");
    } else{
        currentUser.imageUrl=fileName;
        currentUser.location=uploadLocation.textContent;
        testData.push(currentUser);
        console.log(currentUser);
    }

}

var currentUser = 
    {
        username: "John",
        imageUrl: null,
        location: null,
    }


var testData = [
    {
        username: "Leo",
        imageUrl: "https://cdn.britannica.com/52/245552-050-3D7334F9/Eiffel-Tower-Paris.jpg",
        location: "Paris"
    },
    {
        username: "Andy",
        imageUrl: "https://cdn.britannica.com/96/100196-050-C92064E0/Sydney-Opera-House-Port-Jackson.jpg",
        location: "Sydney"
    },
    {
        username: "Tyson",
        imageUrl: "https://i.natgeofe.com/n/535f3cba-f8bb-4df2-b0c5-aaca16e9ff31/giza-plateau-pyramids.jpg",
        location: "Egypt"
    },
]

document.getElementById('uploadForm').addEventListener('submit', async function(event) {
event.preventDefault();
const formData = new FormData(this);
try {
    const response = await fetch('/upload', {
    method: 'POST',
    body: formData
    });
    if (response.ok) {
    alert('Image uploaded successfully!');
    // Optionally, update the view with the uploaded image
    updateImageView();
    } else {
    throw new Error('Failed to upload image');
    }
} catch (error) {
    console.error(error);
    alert('Failed to upload image');
}
});

async function updateImageView() {
try {
    const response = await fetch('/uploads/your_image_filename.jpg'); // Replace with actual filename
    if (response.ok) {
    const imageUrl = URL.createObjectURL(await response.blob());
    document.getElementById('imageView').innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`;
    } else {
    throw new Error('Failed to retrieve image');
    }
} catch (error) {
    console.error(error);
    document.getElementById('imageView').innerHTML = 'Image not found';
}
}