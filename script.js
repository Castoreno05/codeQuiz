// "Play Game" button and timer. ---------------------------------
var secondsLeft = 60;
var timerEl = document.getElementById("timer");
var startGame = document.querySelector("#startGame");
// console.log(startGame);

var body = document.body;
var h2El = document.createElement("h2");
var ordered = document.createElement("ol");
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

startGame.addEventListener("click", playGame);

function playGame() {

    // console.log("click");
    // Text that is going inside the question "h2" and answers "li"
    h2El.textContent = "Commonly used data types do NOT include:";
    btnOne.textContent = "String";
    btnTwo.textContent = "Boolean";
    btnThree.textContent = "Alerts";
    btnFour.textContent = "Numbers";

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
    body.setAttribute("style", "background-color:darkblue;")
    h2El.setAttribute("style", "width:100%; height:200px; align-items:center; display:flex; flex-direction:column; justify-content:center; font-family: 'Permanent Marker', 'cursive';");
    ordered.setAttribute("style", "width:100%; height:200px; align-items:center; display:flex; flex-direction:column;");
    li1.setAttribute("style", "margin:auto; font-size:20.42px;");
    li2.setAttribute("style", "margin:auto; font-size:20px;");
    li3.setAttribute("style", "margin:auto; font-size:20px;");
    li4.setAttribute("style", "margin:auto; font-size:20px;");

    timer();
    btnThree.addEventListener("click", buttonThree);
}

// Timer 

function timer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Second Phase of questions ------------------------------------

function buttonOne() {

    // console.log("Helloooo Again!!");
    // Text that is going inside the question "h2" and answers "li"
    h2El.textContent = "The condition in an if/else statment is enclosed in ___.";
    btnOne.textContent = "Quotes";
    btnTwo.textContent = "Parenthesis";
    btnThree.textContent = "Curly Brackets";
    btnFour.textContent = "Square Brackets";

    body.setAttribute("style", "background-color:teal;")
    
    btnTwo.addEventListener("click", buttonTwo);

}

// Third Phase of questions ------------------------------------


function buttonTwo() {

    // console.log("Helloooo Again!!");
    // Text that is going inside the question "h2" and answers "li"
    h2El.textContent = "Arrays in JavaScript can be used to store.";
    btnOne.textContent = "Numbers and strings";
    btnTwo.textContent = "Other arrays";
    btnThree.textContent = "Booleans";
    btnFour.textContent = "All of the above";

    body.setAttribute("style", "background-color:darkgrey;")
    
    btnFour.addEventListener("click", buttonFour);

}


// Fourth Phase of questions ------------------------------------

function buttonThree() {

    // console.log("Helloooo Again!!");
    // Text that is going inside the question "h2" and answers "li"
    h2El.textContent = "String values must be closed within _____ when being assigned to a variable.";
    btnOne.textContent = "Quotes";
    btnTwo.textContent = "Curly brackets";
    btnThree.textContent = "Commas";
    btnFour.textContent = "Parenthesis";

    body.setAttribute("style", "background-color:darkorange;")
    
    btnOne.addEventListener("click", buttonOne);

}


// Fifth Phase of questions ------------------------------------

function buttonFour() {

    // console.log("Helloooo Again!!");
    // Text that is going inside the question "h2" and answers "li"
    h2El.textContent = "A very useful tool used in development and debugging for printing content to the debugger is:";
    btnOne.textContent = "JavaScript";
    btnTwo.textContent = "Terminal/Bash";
    btnThree.textContent = "for loops";
    btnFour.textContent = "console.log";

    body.setAttribute("style", "background-color:pink;")

    // End Game

}

// myArray = [startGame, btnOne, btnTwo, btnThree, btnFour];
