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
    // question 4
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
var quiz = document.getElementById("quiz");
var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById("question");

// text for the answers
var a_text = document.getElementById("a_text");
console.log(a_text);
var b_text = document.getElementById("b_text");
console.log(b_text);
var c_text = document.getElementById("c_text");
console.log(c_text);
var d_text = document.getElementById("d_text");
console.log(d_text);
var submitBtn = document.getElementById("submit");

// scores
let cureentQuiz = 0;
let score = 0;

loadQuiz();

// loadQuiz function
function loadQuiz() {
    deselectAnswers();
    var currentQuizData = quizData[cureentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

