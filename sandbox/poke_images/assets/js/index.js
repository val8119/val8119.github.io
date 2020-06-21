document.getElementById("search-box").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendAPIRequest();
    }
});

function sendAPIRequest() {
    var searchBox = document.getElementById("search-box");

    var request = new XMLHttpRequest();

    request.open("GET", "https://pokeapi.co/api/v2/pokemon/" + searchBox.value, true);

    request.onload = function () {
        if (request.status == 200) {

            var data = JSON.parse(this.response);
            document.getElementById("name").innerHTML = data.name;
            document.getElementById("sprite").src = data.sprites.front_default;
            document.getElementById("HIDDEN").id = "pokemon-container";
            document.getElementsByName("search-box-1")[0].placeholder = "arceus";
        } else {
            document.getElementsByName("search-box-1")[0].placeholder = "invalid";
        }
    }

    request.send();

    searchBox.value = "";

}