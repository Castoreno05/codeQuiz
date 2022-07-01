var secondsLeft = 60;
var timerEl = document.getElementById("timer");


function timer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

timer();