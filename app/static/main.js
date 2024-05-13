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
                <h2>Player Stats</h2>
                <p>Score: 0</p>
                <p>Accuracy: 0%</p>
                <p>Matches Played: 0</p>
            </div>
        `;
    }

    function displayPlayerFriends() {
        const dashboardContent = document.getElementById('dashboard-content');
        dashboardContent.innerHTML = `
            <div id="player-friends-content">
                <h2>Your Friends:</h2>
                <div class="friend">
                    Friend 1
                    <p>Score: 0</p>
                    <p>Accuracy: 0%</p>
                    <p>Matches Played: 0</p>
                </div>
                <div class="friend">
                    Friend 2
                    <p>Score: 0</p>
                    <p>Accuracy: 0%</p>
                    <p>Matches Played: 0</p>
                </div>
                <div class="friend">
                    Friend 3
                    <p>Score: 0</p>
                    <p>Accuracy: 0%</p>
                    <p>Matches Played: 0</p>
                </div>
            </div>
        `;
    }

    function startGame() {
        window.location.href = "play.html";
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
