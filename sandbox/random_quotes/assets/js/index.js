window.onload = (event) => {
    getQuote()
};

document.getElementById("generate-quote").addEventListener("click", function () {
    getQuote()
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getQuote() {
    quoteIndex = getRandomInt(1643);

    var request = new XMLHttpRequest();

    request.open("GET", "https://type.fit/api/quotes", true);

    request.onload = function () {
        var data = JSON.parse(this.response);
        document.getElementById("quote-body").innerHTML = '"' + data[quoteIndex].text + '"';
        document.getElementById("quote-author").innerHTML = data[quoteIndex].author;
    }

    request.send();
}