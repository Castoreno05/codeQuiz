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

startGame.addEventListener("click", function(event) {
    event.preventDefault();
    // console.log("click");
    // Text that is going inside the question "h2" and answers "li"
    h2El.textContent = "This is where the First question will go.";
    btnOne.textContent = "This is where the answers will go.";
    btnTwo.textContent = "This is where the answerts will go.";
    btnThree.textContent = "This is where the answerts will go.";
    btnFour.textContent = "This is where the answerts will go.";

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
    h2El.setAttribute("style", "background-color:green; width:100%; height:200px; align-items:center; display:flex; flex-direction:column; justify-content:center;");
    ordered.setAttribute("style", "background-color:green; width:100%; height:200px; align-items:center; display:flex; flex-direction:column;");
    li1.setAttribute("style", "margin:auto; font-size:20.42px;");
    li2.setAttribute("style", "margin:auto; font-size:20px;");
    li3.setAttribute("style", "margin:auto; font-size:20px;");
    li4.setAttribute("style", "margin:auto; font-size:20px;");

    timer();
});


function timer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Second Phase of questions ------------------------------------

btnOne.addEventListener("click", function() {
    // console.log("Helloooo Again!!");
    // Text that is going inside the question "h2" and answers "li"
    h2El.textContent = "This is where the Second question will go";
    btnOne.textContent = "This is where the answers will go.";
    btnTwo.textContent = "This is where the answers will go.";
    btnThree.textContent = "This is where the answers will go.";
    btnFour.textContent = "This is where the answers will go.";

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
    h2El.setAttribute("style", " background-color:teal; width:100%; height:200px; align-items:center; display:flex; flex-direction:column; justify-content:center;");
    ordered.setAttribute("style", "background-color:teal; width:100%; height:200px; align-items:center; display:flex; flex-direction:column;");
    li1.setAttribute("style", "margin:auto; font-size:20.42px;");
    li2.setAttribute("style", "margin:auto; font-size:20px;");
    li3.setAttribute("style", "margin:auto; font-size:20px;");
    li4.setAttribute("style", "margin:auto; font-size:20px;");
});

// Third Phase of questions ------------------------------------

btnTwo.addEventListener("click", function() {
    // console.log("Helloooo Again!!");
    // Text that is going inside the question "h2" and answers "li"
    h2El.textContent = "This is where the Third question will go";
    btnOne.textContent = "This is where the answers will go.";
    btnTwo.textContent = "This is where the answers will go.";
    btnThree.textContent = "This is where the answers will go.";
    btnFour.textContent = "This is where the answers will go.";

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
    h2El.setAttribute("style", " background-color:red; width:100%; height:200px; align-items:center; display:flex; flex-direction:column; justify-content:center;");
    ordered.setAttribute("style", "background-color:red; width:100%; height:200px; align-items:center; display:flex; flex-direction:column;");
    li1.setAttribute("style", "margin:auto; font-size:20.42px;");
    li2.setAttribute("style", "margin:auto; font-size:20px;");
    li3.setAttribute("style", "margin:auto; font-size:20px;");
    li4.setAttribute("style", "margin:auto; font-size:20px;");
});

// Fourth Phase of questions ------------------------------------

btnThree.addEventListener("click", function() {
    // console.log("Helloooo Again!!");
    // Text that is going inside the question "h2" and answers "li"
    h2El.textContent = "This is where the Fourth question will go";
    btnOne.textContent = "This is where the answers will go.";
    btnTwo.textContent = "This is where the answers will go.";
    btnThree.textContent = "This is where the answers will go.";
    btnFour.textContent = "This is where the answers will go.";

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
    h2El.setAttribute("style", " background-color:yellow; width:100%; height:200px; align-items:center; display:flex; flex-direction:column; justify-content:center;");
    ordered.setAttribute("style", "background-color:yellow; width:100%; height:200px; align-items:center; display:flex; flex-direction:column;");
    li1.setAttribute("style", "margin:auto; font-size:20.42px;");
    li2.setAttribute("style", "margin:auto; font-size:20px;");
    li3.setAttribute("style", "margin:auto; font-size:20px;");
    li4.setAttribute("style", "margin:auto; font-size:20px;");
});

// Fifth Phase of questions ------------------------------------

btnFour.addEventListener("click", function() {
    // console.log("Helloooo Again!!");
    // Text that is going inside the question "h2" and answers "li"
    h2El.textContent = "This is where the Fifth question will go";
    btnOne.textContent = "This is where the answers will go.";
    btnTwo.textContent = "This is where the answers will go.";
    btnThree.textContent = "This is where the answers will go.";
    btnFour.textContent = "This is where the answers will go.";

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
    h2El.setAttribute("style", " background-color:pink; width:100%; height:200px; align-items:center; display:flex; flex-direction:column; justify-content:center;");
    ordered.setAttribute("style", "background-color:pink; width:100%; height:200px; align-items:center; display:flex; flex-direction:column;");
    li1.setAttribute("style", "margin:auto; font-size:20.42px;");
    li2.setAttribute("style", "margin:auto; font-size:20px;");
    li3.setAttribute("style", "margin:auto; font-size:20px;");
    li4.setAttribute("style", "margin:auto; font-size:20px;");
});
