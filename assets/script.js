// quiz questions and answers ---> add however many questions within const quizData
let secondsLeft = 60;
const timeEl = document.getElementById("timer");

const quizData = [
    // setting up an array of objects
    // each object contains a string for the question, 4 strings for the answers, and a string for the correct answer
    // question 1
    {
        question: "this is test question 1",
        a: "test answer 1",
        b: "test answer 2",
        c: "test answer 3",
        d: "test answer 4",
        correct: "a",
    },
    // question 2
    {
        question: "this is test question 2",
        a: "test answer 1",
        b: "test answer 2",
        c: "test answer 3",
        d: "test answer 4",
        correct: "b",
    },
    // question 3
    {
        question: "this is test question 3",
        a: "test answer 1",
        b: "test answer 2",
        c: "test answer 3",
        d: "test answer 4",
        correct: "c",
    },
    // question 4 created as an object
    {
        question: "this is test question 4",
        a: "test answer 1",
        b: "test answer 2",
        c: "test answer 3",
        d: "test answer 4",
        correct: "d",
    },
    // question 5
    {
        question: "this is test question 5",
        a: "test answer 1",
        b: "test answer 2",
        c: "test answer 3",
        d: "test answer 4",
        correct: "a",
    },
    // question 6
    {
        question: "this is test question 6",
        a: "test answer 1",
        b: "test answer 2",
        c: "test answer 3",
        d: "test answer 4",
        correct: "b",
    },
];
// connecting the html elements to the javascript
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

// timer
timeEl.textContent = `Time:${secondsLeft}`;
// alert(`Time:${secondsLeft}`);

//----------------------------------------------------------------------------------------//
// set time function
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `Time:${secondsLeft}`;
        // alert(`Time:${secondsLeft}`);
        console.log(secondsLeft);
        // if statement to stop the timer
        if (secondsLeft <= 0 || currentQuiz === quizData.length) {
            clearInterval(timerInterval);
            endGame();
        }

    }, 1000);
};


// text for the answers
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

// scores
let currentQuiz = 0;
let score = 0;


// loadQuiz function
function loadQuiz() {
    deselectAnswers();
    var currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// deselectAnswers function  
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// const timerEL = document.getElementById("timer");
// console.log(timerEL);

// console.log(startBtn);

// event listener for the start button
const startBtn = document.getElementById("start");
startBtn.addEventListener("click", startGame);

// function to start the game and timer
function startGame() {
    startBtn.style.display = "none";
    loadQuiz();
    setTime();
};


// function to end the game 
function endGame() {
    document.getElementById("quiz").style.display = "none";
    var scoreEl = document.getElementById("score");
    scoreEl.textContent = "Your final score is: " + score;
    document.body.appendChild(scoreEl);

    // form to save the players initials and score
    var scoreEl = document.createElement("form");
    var initialsEl = document.createElement("input");
    var submitEl = document.createElement("button");
    scoreEl.id = "score-form";
    initialsEl.id = "initials";
    initialsEl.placeholder = "Enter your initials";
    submitEl.id = "submit-score";
    scoreEl.appendChild(initialsEl);
    scoreEl.appendChild(submitEl);
    document.body.appendChild(scoreEl);

    // event listener for the submit button
    scoreEl.addEventListener("submit", function (event) {
        event.preventDefault();
        var initials = document.getElementById("initials").value;
        var highScore = JSON.parse(localStorage.getItem("highScore")) || [];
        highScore.push({ initials: initials, score: score });

        // sort the high scores and names
        highScore.sort(function (a, b) { return b.score - a.score });
        highScore = highScore.slice(0, 5);
        // local storage
        localStorage.setItem("highScore", JSON.stringify(highScore));

        // display the high scores
        highScore.forEach(score => {
            let li = document.createElement("li");
            li.textContent = score.initials + " - " + score.score;
            console.log(li);
            scoreListEl.appendChild(li);
        });
        // reload the page
        location.reload();
    });
};

// submit button event listener
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        } else {
            secondsLeft = secondsLeft - 10;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            endGame();
        }
    }
});

