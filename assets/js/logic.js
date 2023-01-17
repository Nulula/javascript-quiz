//This js is responsible for how the entire website behaves

//function startQuiz () on clicking Start:
// local Storage on timer and score and initials
// timer=40000

let secondsLeft = 40;
let timer = document.getElementById("time");

//sets timer
function setTime() {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if(secondsLeft <= 0) {
        clearInterval(timeInterval);
        finishQuiz();
        }
    }, 1000);
}

//replaces values of question-title and choice buttons with items from quizQuestions
function buildQuestion(qn) {

    var questionTitle = document.querySelector("#question-title");
  
    questionTitle.textContent = "";
    questionTitle.textContent = quizQuestions[qn].question;
  
    var button = document.querySelectorAll("button");
    for (let x=0;x<4;x++) {
      button[x+1].textContent = quizQuestions[qn].choices[x+1];
    }
  
    feedback.textContent = "";
    return;
  }
  
  var score = 0;
  
  //check answer
function checkAnswer(event,qn) {
    var goodVibe = document.getElementById("good-vibe");
    var badVibe = document.getElementById("bad-vibe");
      if (event.target.dataset.index===quizQuestions[qn].correctChoice) {
        goodVibe.play();
        score++;
        feedback.textContent = "Correct!";
      } else {
      badVibe.play();
      feedback.textContent = "Wrong!";
      secondsLeft-=10;
      if(secondsLeft <= 0) {
        secondsLeft=0;
        finishQuiz();
        }
  
    }
  } 

let currentQuestion = 0;
function buildHTML() {
    var olEl = document.createElement("ol");
    var choicesDiv = document.querySelector("#choices");
    choicesDiv.appendChild(olEl);
    for (let e=0;e<4;e++) {
        var buttEl = document.createElement("button");
        olEl.appendChild(buttEl);
        buttEl.setAttribute("data-index",e+1);
        buttEl.setAttribute("id","answer");

    }
    var choices = document.getElementById("questions");

        buildQuestion(currentQuestion);
        choices.addEventListener("click", function(event) {
            checkAnswer(event,currentQuestion);
            setTimeout(function() {
                currentQuestion++;
                if(currentQuestion >= quizQuestions.length) {
                  finishQuiz();
                  return;
                }
                buildQuestion(currentQuestion);
            }, 1000);
            });

}

var feedback = document.querySelector("#feedback");
//from start screen to question screen, timer set
function startQuiz() {
    var startScreen = document.querySelector("#start-screen");
    var quizScreen = document.querySelector("#questions");
    var buttonEl = document.querySelector("#start");

    buttonEl.addEventListener("click", function(event) {
        event.preventDefault();
        quizScreen.setAttribute("class","start");
        startScreen.setAttribute("class","hide"); 
        setTime();  
        feedback.setAttribute("class","feedback start");
        buildHTML();
    });

}

startQuiz();

function finishQuiz() {
    secondsLeft =0;
    var startScreen = document.querySelector("#start-screen");
    var quizScreen = document.querySelector("#questions");
    var endScreen = document.querySelector("#end-screen");
    feedback.setAttribute("class","feedback hide");
    startScreen.setAttribute("class","hide");
    quizScreen.setAttribute("class","hide");
    endScreen.setAttribute("class","start"); 

    var scoreEl = document.querySelector("#final-score");
    scoreEl.textContent = score;

    document.querySelector("#submit").addEventListener("click", function(event) {
        event.preventDefault();
        var initials = document.querySelector("#initials").value;
        localStorage.setItem("initials", JSON.stringify(initials));

        feedback.setAttribute("class","feedback hide");
        startScreen.setAttribute("class","start");
        endScreen.setAttribute("class","hide"); 
    });

    localStorage.setItem("score", JSON.stringify(score));
    console.log(score);

}


