//global vars
var timeLeft = 60;
var start = document.getElementById("startBtn");
var question1 = "Whats the time?";
var question2 = "No sleep til?";
var question3 = "Fight for your right to?";
var question4 = "Hey what?";
var question5 = "This is?";
var playerName = "";
var quizTimer = "";
var time = "";
var name = ''
var personScores;

//checking for local storage
if (JSON.parse(window.localStorage.getItem('user'))) {
    personScores = JSON.parse(window.localStorage.getItem('user'));
}
else {
    personScores = [];
}

//displaying scores

displayScores();

//queston arrays
const questions = [question1, question2, question3, question4, question5];
const q1Options = ["to get ill", "hammer", "high noon"];
const q2Options = ["morning", "brooklyn", "midnight"];
const q3Options = ["party", "vote", "eat pizza"];
const q4Options = ["is for horses", "man", "ladies"];
const q5Options = ["the times that try mens souls", "what im talkin about", "sabotage"];

//start timer function
start.addEventListener("click", function () {
    startTimer();
    questionOne();
    start.style.visibility = 'hidden';
})

function startTimer() {
    quizTimer = setInterval(function () {
        if (timeLeft === 1) {
            clearInterval(quizTimer);
        }
        timeLeft--
        console.log(timeLeft)
        timer();
    }, 1000);
}
// display timer
function timer() {
    document.getElementById("timer").innerHTML = "Time: " + timeLeft;

}

// display first question
function questionOne() {
    var text = '';
    for (var i = 0; i < questions.length; i++) {
        if (questions[i] === "Whats the time?") {
            document.getElementById("questions").innerHTML = text += questions[i] + "<br>";
            for (var i = 0; i < q1Options.length; i++) {
                var options = text += "<input type='radio' id='Q1' name = 'Q1' value=" + q1Options[i] + ">" + q1Options[i] + "<br>";
                console.log(q1Options[i]);
                document.getElementById("questions").innerHTML = options + "<br><button type='submit' id='post1' name='post1' onclick= 'checkAnswer1()'>Submit</button>";

                console.log(questions[i]);


            }
        }
    }
}

// display second question
function questionTwo() {
    var text = '';
    for (var i = 0; i < questions.length; i++) {
        if (questions[i] === "No sleep til?") {
            document.getElementById("questions").innerHTML = text += questions[i] + "<br>";
            for (var i = 0; i < q2Options.length; i++) {
                var options = text += "<input type='radio' id='Q2' name = 'Q2' value=" + q2Options[i] + ">" + q2Options[i] + "<br>";
                console.log(q2Options[i]);
                document.getElementById("questions").innerHTML = options + "<br><button type='submit' id='post2' name='post2'  onclick= 'checkAnswer2()'>Submit</button>";

                console.log(questions[i]);


            }
        }
    }
}

// display third question
function questionThree() {
    var text = '';
    for (var i = 0; i < questions.length; i++) {
        if (questions[i] === "Fight for your right to?") {
            document.getElementById("questions").innerHTML = text += questions[i] + "<br>";
            for (var i = 0; i < q3Options.length; i++) {
                var options = text += "<input type='radio' id='Q3' name = 'Q3' value=" + q3Options[i] + ">" + q3Options[i] + "<br>";
                console.log(q3Options[i]);
                document.getElementById("questions").innerHTML = options + "<br><button type='submit'  onclick= 'checkAnswer3()'>Submit</button>";

                console.log(questions[i]);


            }
        }
    }
}

// display fourth question

function questionFour() {
    var text = '';
    for (var i = 0; i < questions.length; i++) {
        if (questions[i] === "Hey what?") {
            document.getElementById("questions").innerHTML = text += questions[i] + "<br>";
            for (var i = 0; i < q4Options.length; i++) {
                var options = text += "<input type='radio' id='Q4' name = 'Q4' value=" + q4Options[i] + ">" + q4Options[i] + "<br>";
                //console.log(q4Options[i]);
                document.getElementById("questions").innerHTML = options + "<br><button type='submit'  onclick= 'checkAnswer4()'>Submit</button>";

                //console.log(questions[i]);


            }
        }
    }
}

// display question
function questionFive() {
    console.log("five hit")
    var text = '';


    document.getElementById("questions").innerHTML = text += questions[questions.length - 1] + "<br>";
    for (var i = 0; i < q5Options.length; i++) {
        var options = text += "<input type='radio' id='Q5' name = 'Q5' value=" + q5Options[i] + ">" + q5Options[i] + "<br>";
        console.log(q5Options[i]);
        document.getElementById("questions").innerHTML = options + "<br><button type='submit'  onclick= 'checkAnswer5()'>Submit</button>";
    }
}

//check answer 1
function checkAnswer1() {

    var ele = document.getElementsByName('Q1');
    for (var i = 0, length = ele.length; i < length; i++) {
        if (ele[i].checked && ele[i].value === 'to') {

            //alert(ele[i].value);
            questionTwo();

        }
        if (ele[i].checked && ele[i].value != 'to') {
            alert("Wrong!!!");
            questionOne();
        }

    }
}

//check answer 2
function checkAnswer2() {

    var ele = document.getElementsByName('Q2');
    for (var i = 0, length = ele.length; i < length; i++) {
        if (ele[i].checked && ele[i].value === 'brooklyn') {

            // alert(ele[i].value);
            questionThree();

        }
        if (ele[i].checked && ele[i].value != 'brooklyn') {

            alert("Wrong!!!");
            questionTwo();

        }
    }
}

//check answer 3
function checkAnswer3() {

    var ele = document.getElementsByName('Q3');
    for (var i = 0, length = ele.length; i < length; i++) {
        if (ele[i].checked && ele[i].value === "party") {
            questionFour();
        }
        if (ele[i].checked && ele[i].value != "party") {
            alert("Wrong!!!");
            questionThree();
        }

    }

}
//check answer 4
function checkAnswer4() {
    console.log("hit");
    var ele = document.getElementsByName('Q4');
    for (var i = 0, length = ele.length; i < length; i++) {
        if (ele[i].checked && ele[i].value === "ladies") {
            console.log("ifhit")
            questionFive();

        }
        if (ele[i].checked && ele[i].value != "ladies") {

            alert("Wrong!!!");
            questionFour();

        }

    }

}
//clear timer
function myStopFunction() {
    clearInterval(quizTimer);
}

//check answer 5
function checkAnswer5() {

    var ele = document.getElementsByName('Q5');
    for (var i = 0, length = ele.length; i < length; i++) {
        if (ele[i].checked && ele[i].value === "sabotage") {
            myStopFunction()
            playerName = window.prompt("What is your name?");
            // personScores.push(playerName,timeLeft);
            window.alert('Hi ' + playerName + ' your score is ' + timeLeft);
            storeName(playerName, timeLeft);

        }

        if (ele[i].checked && ele[i].value != "sabotage") {

            alert("Wrong!!!");
            questionFive();

        }

    }
}

//store names and scores
function storeName(playerName, timeLeft) {
    const personScoreDataObj = {
        names: playerName,
        scores: timeLeft,
    }

    personScores.push(personScoreDataObj);
    window.localStorage.setItem('user', JSON.stringify(personScores));

    window.localStorage.getItem('user');

    JSON.parse(window.localStorage.getItem('user'));
    displayScores();

}
//display scores
function displayScores() {
    var ul = document.getElementById("list");
    for (var i = 0; i < personScores.length; i++) {
        var li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = li.innerHTML + personScores[i].names + " - " + personScores[i].scores;
    }
}