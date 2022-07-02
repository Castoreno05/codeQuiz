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

// var buttons = document.querySelectorAll("buttons");
// var buttons = document.querySelectorAll("btnOne")

// buttons.setAttribute("style", "font-size: 40px;");
// buttons.setAttribute("style", "justify-content: center;");

var btnOne = document.querySelector(".btnOne");
var btnTwo = document.querySelector(".btnTwo");
var btnThree = document.querySelector(".btnThree");
var btnFour = document.querySelector(".btnFour");

btnOne.addEventListener("click", function() {
    console.log("Hello")
});

btnTwo.addEventListener("click", function() {
    console.log("This is")
});

btnThree.addEventListener("click", function() {
    console.log("is a button")
});

btnFour.addEventListener("click", function() {
    console.log("Test!!!!")
});
