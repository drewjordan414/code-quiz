//js for loading the high scores
document.getElementById("go-back").addEventListener("click", function () {
    window.location.href = "index.html";
});

document.getElementById("clear-scores").addEventListener("click", function () {
    localStorage.clear();
    highScores();
});

function highScores() {
    var highScore = JSON.parse(localStorage.getItem("highScore")) || [];
    var highScoreEl = document.getElementById("score-list");    
    highScoreEl.innerHTML = ""; //clear the old data
    
    highScore.forEach(element => {
        var li = document.createElement("li");
        li.textContent = element.initials + " - " + element.score;
        highScoreEl.appendChild(li);
    });
}

highScores();