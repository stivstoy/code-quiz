var timeLeft;
var start = document.getElementById("startBtn");
var question1 = "Whats the time?";
var question2 = "No sleep til?";
var question3 = "Fight for your right to?";
var question4 = "Hey what?";
var question5 = "This is?";
var timeLeft = 60


const questions = [question1, question2, question3, question4, question5];
const q1Options = ["to get ill", "hammer", "high noon"];
const q2Options = ["morning", "brooklyn", "midnight"];
const q3Options = ["party", "vote", "eat pizza"];
const q4Options = ["is for horses", "man", "ladys"];
const q5Options = ["the times that try mens souls", "it", "sabotage"];

start.addEventListener("click", function () {
    startTimer();
    //console.log();
    questionOne();
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

function timer() {
    document.getElementById("timer").innerHTML = timeLeft;

}

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

function questionFour() {
    var text = '';
    for (var i = 0; i < questions.length; i++) {
        if (questions[i] === "Hey what?") {
            document.getElementById("questions").innerHTML = text += questions[i] + "<br>";
            for (var i = 0; i < q4Options.length; i++) {
                var options = text += "<input type='radio' id='Q4' name = 'Q4' value=" + q4Options[i] + ">" + q4Options[i] + "<br>";
                console.log(q4Options[i]);
                document.getElementById("questions").innerHTML = options + "<br><button type='submit'  onclick= 'checkAnswer4()'>Submit</button>";

                console.log(questions[i]);


            }
        }
    }
}

function questionFive() {
    var text = '';
    for (var i = 0; i < questions.length; i++) {
        if (questions[i] === "This is?") {
            document.getElementById("questions").innerHTML = text += questions[i] + "<br>";
            for (var i = 0; i < q5Options.length; i++) {
                var options = text += "<input type='radio' id='Q5' name = 'Q5' value=" + q5Options[i] + ">" + q5Options[i] + "<br>";
                console.log(q5Options[i]);
                document.getElementById("questions").innerHTML = options + "<br><button type='submit'  onclick= 'checkAnswer5()'>Submit</button>";

                console.log(questions[i]);


            }
        }
    }
}


function checkAnswer1() {

    var ele = document.getElementsByName('Q1');
    for (var i = 0, length = ele.length; i < length; i++) {
        if (ele[i].checked && ele[i].value === 'to') {
            // do whatever you want with the checked radio
            alert(ele[i].value);
            questionTwo();
            // only one radio can be logically checked, don't check the rest
            // break;
        }
        if (ele[i].checked && ele[i].value != 'to') {
            alert(ele[i].value);
            questionOne();
        }

    }

    //for(i = 0; i < ele.length; i++) {
    // if (ele[i].checked && ele[i].value === "hammer" ) {
    // if( selected && selected.value === "hammer"){
    // window.alert (ele[i].value);
    // window.alert (selected);
    // questionTwo();
    //document.getElementById("result").innerHTML
    //   = "Gender: "+ele[i].value;
    // }

    // else {

    //  questionOne();
    //  }
    //}

}

function checkAnswer2() {

    var ele = document.getElementsByName('Q2');
    for (var i = 0, length = ele.length; i < length; i++) {
        if (ele[i].checked && ele[i].value === 'brooklyn') {

            alert(ele[i].value);
            questionThree();

        }
        if (ele[i].checked && ele[i].value != 'brooklyn') {

            alert(ele[i].value);
            questionTwo();

        }
    }
}

function checkAnswer3() {

    var ele = document.getElementsByName('Q3');
    for (var i = 0, length = ele.length; i < length; i++) {
        if (ele[i].checked && ele[i].value === "party") {

            alert(ele[i].value);
            questionFour();

        }
        if (ele[i].checked && ele[i].value != "party") {
         
            alert(ele[i].value);
            questionThree();

        }

    }

}

function checkAnswer4() {

    var ele = document.getElementsByName('Q4');
    for (var i = 0, length = ele.length; i < length; i++) {
        if (ele[i].checked && ele[i].value === 'ladys') {

            alert(ele[i].value);
            questionFive();

        }
        else if  (ele[i].checked && ele[i].value != 'ladys') {

            alert(ele[i].value);
            question4();

        }

    }
}

function checkAnswer5() {

    var ele = document.getElementsByName('Q5');
    for (var i = 0, length = ele.length; i < length; i++) {
        if (ele[i].checked && ele[i].value === "sabotage") {

            alert(ele[i].value);
          // questionFive();

        }
        if (ele[i].checked && ele[i].value != "sabotage") {

            alert(ele[i].value);
            questionFive();

        }

    }
}






