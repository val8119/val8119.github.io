// selectors
const circle = document.querySelector(".container");
const scoreText = document.querySelector(".score");
const resetBtn = document.querySelector(".reset-btn");
const tooltip = document.querySelector(".reset-tooltip");
const upgradeBtn = document.querySelector(".per-click-upgrade");
const perClickCurrent = document.querySelector(".per-click-current");
const perClickCost = document.querySelector(".per-click-cost");
var scoreAddAmount = 1;
var scoreAddAmountUpgradeCost = scoreAddAmount / 2 * 75;
var score = 0;

// listeners
document.addEventListener("DOMContentLoaded", getData);
circle.addEventListener("click", scoreAdd);
resetBtn.addEventListener("click", scoreReset);
upgradeBtn.addEventListener("click", upgradePerClick)

// functions
function upgradePerClick() {
    scoreAddAmountUpgradeCost = scoreAddAmount * 75;

    if (score >= scoreAddAmountUpgradeCost) {
        scoreAddAmount = scoreAddAmount * 2;
        score -= scoreAddAmountUpgradeCost;
        localStorage.setItem("scoreAddAmount", scoreAddAmount)
    }
    updateText();
}

function scoreReset() {
    score = 0;
    localStorage.setItem("score", score);

    scoreAddAmount = 1;
    scoreAddAmountUpgradeCost = scoreAddAmount * 75;
    localStorage.setItem("scoreAddAmount", scoreAddAmount);

    updateText();
}

function scoreAdd() {
    score += scoreAddAmount;
    localStorage.setItem("score", score);
    scoreText.innerText = `points: ${score}`;
}

function getData() {
    if (localStorage.getItem("score") === null) {
        score = 0;
    } else {
        score = localStorage.getItem("score");
        score = parseInt(score);
    }
    if (localStorage.getItem("scoreAddAmount") === null) {
        scoreAddAmount = 0;
    } else {
        scoreAddAmount = localStorage.getItem("scoreAddAmount");
        scoreAddAmount = parseInt(scoreAddAmount);
    }

    updateText();
}

function updateText() {
    scoreAddAmountUpgradeCost = scoreAddAmount * 75;
    perClickCurrent.innerText = `${scoreAddAmount} per click`;
    perClickCost.innerText = `(cost: ${scoreAddAmountUpgradeCost})`;
    scoreText.innerText = `points: ${score}`;
}