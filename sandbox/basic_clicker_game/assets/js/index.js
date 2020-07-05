// selectors
const circle = document.querySelector(".container");
const scoreText = document.querySelector(".score");
const resetBtn = document.querySelector(".reset-btn");
const tooltip = document.querySelector(".reset-tooltip");
var score;

// listeners
document.addEventListener("DOMContentLoaded", scoreGet);
circle.addEventListener("click", scoreAdd);
resetBtn.addEventListener("click", scoreReset);

// functions
function scoreReset() {
    score = 0;
    localStorage.setItem("score", score);
    scoreText.innerText = `score: ${score}`;
}

function scoreAdd() {
    score++;
    localStorage.setItem("score", score);
    scoreText.innerText = `score: ${score}`;
}

function scoreGet() {
    if (localStorage.getItem("score") === null) {
        score = 0
    } else {
        score = localStorage.getItem("score");
    }
    scoreText.innerText = `score: ${score}`;
}