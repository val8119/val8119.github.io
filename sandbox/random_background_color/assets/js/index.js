document.getElementById("button").addEventListener("click", function () {
    randomColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)
    document.body.style.backgroundColor = randomColor;
    console.log("click")
});

window.addEventListener("load", function () {
    randomColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)
    document.body.style.backgroundColor = randomColor;
});