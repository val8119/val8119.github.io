function rollOnce() {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById("roll-btn").innerHTML = "You rolled " + randomNumber;
}

function autoroll() {
    var count = 0;
    var average = 0;
    var total = 0;
    autorollTextArea = document.getElementById("autoroll-value")
    var times = document.getElementById("autoroll-times").value;
    autorollTextArea.value = "";
    for (var i = 0; i < times; i++) {
        randomNumber = Math.floor(Math.random() * 6) + 1;
        count++;
        total += randomNumber;
        average = total / count;
        autorollTextArea.value += count + "/" + times + " | Current roll " + randomNumber + " | Average: " + Math.round((average + Number.EPSILON) * 100) / 100 + "\n";
        autorollTextArea.scrollTop = autorollTextArea.scrollHeight;
    }
}