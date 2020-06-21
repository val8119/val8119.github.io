function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML = "Your local time is: " + h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function timer() {
  var seconds = 0;
  var minutes = seconds / 60;
  setInterval(function () {
    seconds++;
    if (seconds == 1) {
      document.getElementById("timer").innerHTML = "You have been on the page for " + seconds + " second";
    } else {
      document.getElementById("timer").innerHTML = "You have been on the page for " + seconds + " seconds";
    }

    if (seconds >= 60) {
      minutes = seconds / 60;
      document.getElementById("timer").innerHTML =
        "You have been on the page for " + seconds + " seconds " + "<br />" + "that's " + Math.floor(minutes) + " minutes, what are you doing with your life?";
    }
  }, 1000);
}
