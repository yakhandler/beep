var audio = new Audio('beep.wav');

var intervalId;
var timerDisplay = document.getElementById('timerDisplay');

function playChime() {
    audio.play();
}

function updateTimerDisplay(remainingTime) {
    timerDisplay.textContent = remainingTime.toFixed(2);
}

document.getElementById('controlButton').addEventListener('click', function() {
    var remainingTime = parseInt(document.getElementById('timerInput').value); // Initial time in seconds

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        this.textContent = '▶️';
        updateTimerDisplay(remainingTime);
    } else {
        playChime(); // Play chime immediately upon starting
        updateTimerDisplay(remainingTime);
        intervalId = setInterval(function() {
            remainingTime -= 0.01; // Decrease remaining time by hundredth of a second
            if (remainingTime <= 0) {
                playChime();
                remainingTime = parseInt(document.getElementById('timerInput').value); // Reset remaining time
                updateTimerDisplay(remainingTime);
            }
            updateTimerDisplay(remainingTime);
        }, 10); // Update every hundredth of a second (10 milliseconds)
        this.textContent = '⏸️';
    }
});
