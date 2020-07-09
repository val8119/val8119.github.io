var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '1',
        width: '1',
        videoId: '5qap5aO4i9A',
        vq: '144p',
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.setVolume(0);
    event.target.playVideo();
}

var playerVolume = localStorage.getItem("volume");
document.querySelector(".slider").value = playerVolume;

var repeat50ms = setInterval(function () {
    sliderValue = document.querySelector(".slider").value;
    playerVolume = sliderValue;
    player.setVolume(playerVolume);
    localStorage.setItem("volume", playerVolume)
}, 50);