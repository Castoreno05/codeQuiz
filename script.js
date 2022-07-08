// "Play Game" button and timer. ---------------------------------
var totalScore = 0;
var secondsLeft = 60;
// Grabbing the ID of the th span
var timerEl = document.getElementById("timer");
// Button to play game
var startGame = document.querySelector("#startGame");
// Button to reset game
var btnReset = document.querySelector("#resetGame");
// console.log(startGame);

var body = document.body;
var h2El = document.createElement("h2");
var ordered = document.createElement("ol");
var highScores = document.createElement("ol");
// create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
// creating buttons to go under the appended h2
var btnOne = document.createElement("button");
var btnTwo = document.createElement("button");
var btnThree = document.createElement("button");
var btnFour = document.createElement("button");

// Button is assigned an eventListener
startGame.addEventListener("click", playGame);

// Function to start the game and display the first question 
function playGame() {

    displayQuestion()

    // console.log("click");

    body.appendChild(h2El);
    body.appendChild(ordered);
    body.appendChild(btnOne);
    body.appendChild(btnTwo);
    body.appendChild(btnThree);
    body.appendChild(btnFour);
    // Append list items into ordered element
    ordered.appendChild(li1);
    ordered.appendChild(li2);
    ordered.appendChild(li3);
    ordered.appendChild(li4);
    // Append buttons into list items
    li1.appendChild(btnOne);
    li2.appendChild(btnTwo);
    li3.appendChild(btnThree);
    li4.appendChild(btnFour);
    // Attributes for elements
    // body.setAttribute("style", "background-color:darkgreen;")
    h2El.setAttribute("style", "width:100%; height:200px; align-items:center; display:flex; flex-direction:column; justify-content:center; font-family: 'Permanent Marker', 'cursive';");
    ordered.setAttribute("style", "width:100%; height:200px; align-items:center; display:flex; flex-direction:column; font-family: 'Permanent Marker', 'cursive';");
    li1.setAttribute("style", "margin:auto; font-size:20.42px;");
    li2.setAttribute("style", "margin:auto; font-size:20px;");
    li3.setAttribute("style", "margin:auto; font-size:20px;");
    li4.setAttribute("style", "margin:auto; font-size:20px;");
    btnOne.setAttribute("style", "background-color:white; border:none; color:black; font-size:30px;");
    btnTwo.setAttribute("style", "background-color:white; border:none; color:black; font-size:30px;");
    btnThree.setAttribute("style", "background-color:white; border:none; color:black; font-size:30px;");
    btnFour.setAttribute("style", "background-color:white; border:none; color:black; font-size:30px;");

    timer();
    btnOne.addEventListener("click", handleClick);
    btnTwo.addEventListener("click", handleClick);
    btnThree.addEventListener("click", handleClick);
    btnFour.addEventListener("click", handleClick);
}


function displayQuestion() {
    // 
    h2El.textContent = questions[questionIndex].title;
    btnOne.textContent = questions[questionIndex].options[0];
    btnTwo.textContent = questions[questionIndex].options[1];
    btnThree.textContent = questions[questionIndex].options[2];
    btnFour.textContent = questions[questionIndex].options[3];

}

var questionIndex = 0;

var questions = [
    {
        title: "Commonly used data types do NOT include:",
        options: ["Square Brackets", "Parenthesis", "Alerts", "Quotes"],
        correctAnswer: "Alerts"
    },
    {
        title: "The condition in an if/else statment is enclosed in ___.",
        options: ["Quotes", "Parenthesis", "Curly Brackets", "Square Brackets"],
        correctAnswer: "Parenthesis"
    },
    {
        title: "String values must be closed within _____ when being assigned to a variable.",
        options: ["Quotes", "Curly brackets", "Commas", "Parenthesis"],
        correctAnswer: "Quotes"
    },
    {
        title: "Arrays in JavaScript can be used to store.",
        options: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        title: "A very useful tool used in development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "Terminal/Bash", "for loops", "console.log"],
        correctAnswer: "console.log"
    }

]


function handleClick(event) {
    if (questions[questionIndex].correctAnswer === event.target.innerHTML) {
        totalScore += 20;
        console.log(totalScore);
    }
    else {
        // reduce the timer
        secondsLeft -= 10;
    }

    if (questionIndex === questions.length - 1) {
        endGame();
    }
    else {
        questionIndex++;
        displayQuestion();
    }
}

// Reset function and eventListener

btnReset.addEventListener("click", resetGame);

function resetGame() {

    window.location.reload(true);

}

// need a function that will display the score

var h1El = document.createElement("h1");
var paragraph = document.createElement("p");
var saveBtn = document.createElement("button");


function endGame() {

    if (totalScore >= 80) {

        body.removeChild(h2El);
        body.removeChild(ordered);
        body.appendChild(h1El);
        // body.appendChild(paragraph);
        body.appendChild(saveBtn);

        h1El.textContent = "SCORE: " + totalScore;
        // paragraph.textContent = totalScore;
        saveBtn.textContent = "Save";

        saveBtn.setAttribute("style", "background-color:lightblue; border:none; color:black; font-size:30px; margin-left:50%; border-radius:15px;");
        // paragraph.setAttribute("style", "font-size:35px; width:100%; height:200px; align-items:center; display:flex; flex-direction:column; font-family: 'Permanent Marker', 'cursive';");
        h1El.setAttribute("style", "width:100%; height:200px; align-items:center; display:flex; flex-direction:column; justify-content:center; font-family: 'Permanent Marker', 'cursive'; margin-left:1.5%");
        // need to find a way to clear the timer at the end

        // Need to Display and Save the total score 
    }else {
        resetGame();
    }

}

saveBtn.addEventListener("click", function (event) {
    event.preventDefault();

    body.removeChild(h1El);


    if (saveBtn) {
        localStorage.setItem("total score", totalScore);
        localStorage.setItem("seconds left", secondsLeft);
        clearInterval(timerInterval);
    }
    // Replace the resetGame so that it goes toa  function that displays highscores
    // resetGame();
    highscores();
});
var timerInterval;
// Timer 
function timer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearTimeout(timerInterval);
            endGame();
        }
    }, 1000);
}

function highscores() {
    if (saveBtn) {

        // body.removeChild(h1El);
        body.removeChild(saveBtn);

        body.appendChild(h1El);
        body.appendChild(highScores);

        h1El.textContent = "HIGH SCORES!!";
    }


}

// When inside the question. Find a way for only the correct selected answer to allow you to move forward.
// Find a way to have the wrong answers prompt: "Incorrect"

// body.setAttribute("style", "background-color:pink;")
// body.setAttribute("style", "background-color:darkorange;")
// body.setAttribute("style", "background-color:darkgrey;")
// body.setAttribute("style", "background-color:violet;");