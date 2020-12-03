const coinText = document.getElementById("text");

const arr = ["heads!", "tails!"]

coinText.parentElement.addEventListener("click", function () {
    coinText.innerHTML = arr[Math.floor(Math.random() * arr.length)];
});