function loadPlay(){
    var userDisplay = document.getElementById("userNameDisplay");
    updateImageView();
    userDisplay.textContent = currentUser.username;

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