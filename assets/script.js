// quiz questions and answers ---> add however many questions within const quizData
const quizData = [
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
console.log(quiz);
const answerEls = document.querySelectorAll(".answer");
console.log(answerEls);
const questionEl = document.getElementById("question");
console.log(questionEl);

// text for the answers
const a_text = document.getElementById("a_text");
console.log(a_text);
const b_text = document.getElementById("b_text");
console.log(b_text);
const c_text = document.getElementById("c_text");
console.log(c_text);
const d_text = document.getElementById("d_text");
console.log(d_text);
const submitBtn = document.getElementById("submit");

// scores
let currentQuiz = 0;
let score = 0;

loadQuiz();

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
    // loop through the answer elements
    answerEls.forEach((answerEl) => (answerEl.checked = false)); //answerEl might need to be answerEls
    console.log(answerEls);
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

const timerEL = document.getElementById("timer");
console.log(timerEL);
const startBtn = document.getElementById("start");
console.log(startBtn);

// event listener for the start button
startBtn.addEventListener("click", startGame);

// function to start the game and timer



// function to end the game 


// submit button event listener
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        } else{
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});

