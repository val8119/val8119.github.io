// variables
const container = document.querySelector(".cont");
const contButtonYes = document.getElementById("START-GAME");
const contMessage = document.querySelector(".cont-text");

// listeners
contButtonYes.addEventListener("click", game);

// functions
function createButton(buttonText, color) {
    var newButton = document.createElement("button");
    if (color === "normal") {
        newButton.setAttribute("class", "normal-button")
    } else if (color === "red") {
        newButton.setAttribute("class", "red-button")
    } else if (color === "green") {
        newButton.setAttribute("class", "green-button");
    }
    newButton.setAttribute("id", buttonText);
    newButton.innerHTML = buttonText;
    container.appendChild(newButton);
}

function reloadPage() {
    location.reload();
}

// game
function game() {
    contButtonYes.remove();
    contMessage.innerHTML = "Very well. You are in the middle of a room with two doors leading to somewhere. Pick one.";

    createButton("LEFT", "normal");
    createButton("RIGHT", "normal");

    document.getElementById("LEFT").addEventListener("click", function () {
        document.getElementById("LEFT").remove();
        document.getElementById("RIGHT").remove();
        contMessage.innerHTML = "Wrong door. You died from falling into a hole.";
        createButton("RETRY", "red");
        document.getElementById("RETRY").addEventListener("click", reloadPage);
    });

    document.getElementById("RIGHT").addEventListener("click", function () {
        document.getElementById("LEFT").remove();
        document.getElementById("RIGHT").remove();
        contMessage.innerHTML = "You arrive in a pink room. There's a phone on a table. Do you try to call someone?";
        createButton("YES", "green");
        createButton("NO", "red");
        document.getElementById("YES").addEventListener("click", function () {
            document.getElementById("YES").remove();
            document.getElementById("NO").remove();
            contMessage.innerHTML = "Bad luck. The phone doesn't work." + "<br />" + " Ok. Let's move on. You move towards the other end of the room. There are two doors again.";
            createButton("LEFT", "normal");
            createButton("RIGHT", "normal");

            document.getElementById("LEFT").addEventListener("click", function () {
                document.getElementById("LEFT").remove();
                document.getElementById("RIGHT").remove();
                contMessage.innerHTML = "You go into blue room. There are 2 phonebooths in there. A call costs 1 coin. And you have 1 coin. A little catch! Only one phonebooth works..";
                createButton("LEFT", "normal");
                createButton("RIGHT", "normal");

                document.getElementById("LEFT").addEventListener("click", function () {
                    document.getElementById("LEFT").remove();
                    document.getElementById("RIGHT").remove();
                    contMessage.innerHTML = "You try to call someone. The phonebooth doesn't work. You die.";
                    createButton("RETRY", "red");
                    document.getElementById("RETRY").addEventListener("click", reloadPage);
                });

                document.getElementById("RIGHT").addEventListener("click", function () {
                    document.getElementById("LEFT").remove();
                    document.getElementById("RIGHT").remove();
                    contMessage.innerHTML = "You put the coin in feeling hopeful. To your luck the phone works. Who do you call?";
                    createButton("MOM", "normal");
                    createButton("FRIEND", "normal");
                    createButton("POLICE", "normal");

                    document.getElementById("MOM").addEventListener("click", function () {
                        document.getElementById("MOM").remove();
                        document.getElementById("FRIEND").remove();
                        document.getElementById("POLICE").remove();
                        contMessage.innerHTML = "You dial your mom's phone. She picks up. Hello? Oh, sweety, it's you, hi! How are you?";
                        createButton("Hey mom! I need help. I don't know where I am.", "normal");
                        createButton("Hey mom! I DON'T KNOW WHERE I AM. I'M REALLY SCARED", "normal");
                        createButton("How's life going?", "normal");

                        document.getElementById("Hey mom! I need help. I don't know where I am.").addEventListener("click", function () {
                            document.getElementById("Hey mom! I need help. I don't know where I am.").remove();
                            document.getElementById("Hey mom! I DON'T KNOW WHERE I AM. I'M REALLY SCARED").remove();
                            document.getElementById("How's life going?").remove();
                            contMessage.innerHTML = "Your mom seems worried and calls the police. You win!";
                            createButton("PLAY AGAIN", "green");
                            document.getElementById("PLAY AGAIN").addEventListener("click", reloadPage);
                        });

                        document.getElementById("Hey mom! I DON'T KNOW WHERE I AM. I'M REALLY SCARED").addEventListener("click", function () {
                            document.getElementById("Hey mom! I need help. I don't know where I am.").remove();
                            document.getElementById("Hey mom! I DON'T KNOW WHERE I AM. I'M REALLY SCARED").remove();
                            document.getElementById("How's life going?").remove();
                            contMessage.innerHTML = "You give your mom a heart attack. You lose. You'll die here.";
                            createButton("RETRY", "red");
                            document.getElementById("RETRY").addEventListener("click", reloadPage);
                        });

                        document.getElementById("How's life going?").addEventListener("click", function () {
                            document.getElementById("Hey mom! I need help. I don't know where I am.").remove();
                            document.getElementById("Hey mom! I DON'T KNOW WHERE I AM. I'M REALLY SCARED").remove();
                            document.getElementById("How's life going?").remove();
                            contMessage.innerHTML = "Your mom thinks everything's okay. Finishes the call. You die.";
                            createButton("RETRY", "red");
                            document.getElementById("RETRY").addEventListener("click", reloadPage);
                        });
                    });

                    document.getElementById("POLICE").addEventListener("click", function () {
                        document.getElementById("MOM").remove();
                        document.getElementById("FRIEND").remove();
                        document.getElementById("POLICE").remove();
                        contMessage.innerHTML = "You dial 911. An operator picks up the phone. What do you say?"
                        createButton("Please help me. I don't know where I am.", "normal");
                        createButton("HELP ME! I'M LOST! THE ROOMS ARE ALL CLOSING IN ON ME!", "normal");
                        createButton("Is this a pizza place? I'd like to order a reallllly cheesy pizza right now.", "normal");

                        document.getElementById("Please help me. I don't know where I am.").addEventListener("click", function () {
                            document.getElementById("Please help me. I don't know where I am.").remove();
                            document.getElementById("HELP ME! I'M LOST! THE ROOMS ARE ALL CLOSING IN ON ME!").remove();
                            document.getElementById("Is this a pizza place? I'd like to order a reallllly cheesy pizza right now.").remove();
                            contMessage.innerHTML = "The police came to save you. You win!";
                            createButton("PLAY AGAIN", "green");
                            document.getElementById("PLAY AGAIN").addEventListener("click", reloadPage);
                        });

                        document.getElementById("HELP ME! I'M LOST! THE ROOMS ARE ALL CLOSING IN ON ME!").addEventListener("click", function () {
                            document.getElementById("Please help me. I don't know where I am.").remove();
                            document.getElementById("HELP ME! I'M LOST! THE ROOMS ARE ALL CLOSING IN ON ME!").remove();
                            document.getElementById("Is this a pizza place? I'd like to order a reallllly cheesy pizza right now.").remove();
                            contMessage.innerHTML = "The operator thinks you're just crazy and hangs up. You die.";
                            createButton("RETRY", "red");
                            document.getElementById("RETRY").addEventListener("click", reloadPage);
                        });

                        document.getElementById("Is this a pizza place? I'd like to order a reallllly cheesy pizza right now.").addEventListener("click", function () {
                            document.getElementById("Please help me. I don't know where I am.").remove();
                            document.getElementById("HELP ME! I'M LOST! THE ROOMS ARE ALL CLOSING IN ON ME!").remove();
                            document.getElementById("Is this a pizza place? I'd like to order a reallllly cheesy pizza right now.").remove();
                            contMessage.innerHTML = "The operator hangs up. You die.";
                            createButton("RETRY", "red");
                            document.getElementById("RETRY").addEventListener("click", reloadPage);
                        });
                    });

                    document.getElementById("FRIEND").addEventListener("click", function () {
                        document.getElementById("MOM").remove();
                        document.getElementById("FRIEND").remove();
                        document.getElementById("POLICE").remove();
                        contMessage.innerHTML = "You dial your friend's phone. They don't answer. You die.";
                        createButton("RETRY", "red");
                        document.getElementById("RETRY").addEventListener("click", reloadPage);
                    });
                });
            });

            document.getElementById("RIGHT").addEventListener("click", function () {
                document.getElementById("LEFT").remove();
                document.getElementById("RIGHT").remove();
                contMessage.innerHTML = "You come face to face with a wild bear who kills you. Better luck next time.";
                createButton("RETRY", "red");
                document.getElementById("RETRY").addEventListener("click", reloadPage);
            });
        });

        document.getElementById("NO").addEventListener("click", function () {
            document.getElementById("YES").remove();
            document.getElementById("NO").remove();
            contMessage.innerHTML = "Ok. Let's move on. You move towards the other end of the room. There are two doors again.";

            createButton("LEFT", "normal");
            createButton("RIGHT", "normal");

            document.getElementById("LEFT").addEventListener("click", function () {
                document.getElementById("LEFT").remove();
                document.getElementById("RIGHT").remove();
                contMessage.innerHTML = "You go into blue room. There are 2 phonebooths in there. A call costs 1 coin. And you have 1 coin. A little catch! Only one phonebooth works..";
                createButton("LEFT", "normal");
                createButton("RIGHT", "normal");

                document.getElementById("LEFT").addEventListener("click", function () {
                    document.getElementById("LEFT").remove();
                    document.getElementById("RIGHT").remove();
                    contMessage.innerHTML = "You try to call someone. The phonebooth doesn't work. You die.";
                    createButton("RETRY", "red");
                    document.getElementById("RETRY").addEventListener("click", reloadPage);
                });

                document.getElementById("RIGHT").addEventListener("click", function () {
                    document.getElementById("LEFT").remove();
                    document.getElementById("RIGHT").remove();
                    contMessage.innerHTML = "You put the coin in feeling hopeful. To your luck the phone works. Who do you call?";
                    createButton("MOM", "normal");
                    createButton("FRIEND", "normal");
                    createButton("POLICE", "normal");

                    document.getElementById("MOM").addEventListener("click", function () {
                        document.getElementById("MOM").remove();
                        document.getElementById("FRIEND").remove();
                        document.getElementById("POLICE").remove();
                        contMessage.innerHTML = "You dial your mom's phone. She picks up. Hello? Oh, sweety, it's you, hi! How are you?";
                        createButton("Hey mom! I need help. I don't know where I am.", "normal");
                        createButton("Hey mom! I DON'T KNOW WHERE I AM. I'M REALLY SCARED", "normal");
                        createButton("How's life going?", "normal");

                        document.getElementById("Hey mom! I need help. I don't know where I am.").addEventListener("click", function () {
                            document.getElementById("Hey mom! I need help. I don't know where I am.").remove();
                            document.getElementById("Hey mom! I DON'T KNOW WHERE I AM. I'M REALLY SCARED").remove();
                            document.getElementById("How's life going?").remove();
                            contMessage.innerHTML = "Your mom seems worried and calls the police. You win!";
                            createButton("PLAY AGAIN", "green");
                            document.getElementById("PLAY AGAIN").addEventListener("click", reloadPage);
                        });

                        document.getElementById("Hey mom! I DON'T KNOW WHERE I AM. I'M REALLY SCARED").addEventListener("click", function () {
                            document.getElementById("Hey mom! I need help. I don't know where I am.").remove();
                            document.getElementById("Hey mom! I DON'T KNOW WHERE I AM. I'M REALLY SCARED").remove();
                            document.getElementById("How's life going?").remove();
                            contMessage.innerHTML = "You give your mom a heart attack. You lose. You'll die here.";
                            createButton("RETRY", "red");
                            document.getElementById("RETRY").addEventListener("click", reloadPage);
                        });

                        document.getElementById("How's life going?").addEventListener("click", function () {
                            document.getElementById("Hey mom! I need help. I don't know where I am.").remove();
                            document.getElementById("Hey mom! I DON'T KNOW WHERE I AM. I'M REALLY SCARED").remove();
                            document.getElementById("How's life going?").remove();
                            contMessage.innerHTML = "Your mom thinks everything's okay. Finishes the call. You die.";
                            createButton("RETRY", "red");
                            document.getElementById("RETRY").addEventListener("click", reloadPage);
                        });
                    });

                    document.getElementById("POLICE").addEventListener("click", function () {
                        document.getElementById("MOM").remove();
                        document.getElementById("FRIEND").remove();
                        document.getElementById("POLICE").remove();
                        contMessage.innerHTML = "You dial 911. An operator picks up the phone. What do you say?"
                        createButton("Please help me. I don't know where I am.", "normal");
                        createButton("HELP ME! I'M LOST! THE ROOMS ARE ALL CLOSING IN ON ME!", "normal");
                        createButton("Is this a pizza place? I'd like to order a reallllly cheesy pizza right now.", "normal");

                        document.getElementById("Please help me. I don't know where I am.").addEventListener("click", function () {
                            document.getElementById("Please help me. I don't know where I am.").remove();
                            document.getElementById("HELP ME! I'M LOST! THE ROOMS ARE ALL CLOSING IN ON ME!").remove();
                            document.getElementById("Is this a pizza place? I'd like to order a reallllly cheesy pizza right now.").remove();
                            contMessage.innerHTML = "The police came to save you. You win!";
                            createButton("PLAY AGAIN", "green");
                            document.getElementById("PLAY AGAIN").addEventListener("click", reloadPage);
                        });

                        document.getElementById("HELP ME! I'M LOST! THE ROOMS ARE ALL CLOSING IN ON ME!").addEventListener("click", function () {
                            document.getElementById("Please help me. I don't know where I am.").remove();
                            document.getElementById("HELP ME! I'M LOST! THE ROOMS ARE ALL CLOSING IN ON ME!").remove();
                            document.getElementById("Is this a pizza place? I'd like to order a reallllly cheesy pizza right now.").remove();
                            contMessage.innerHTML = "The operator thinks you're just crazy and hangs up. You die.";
                            createButton("RETRY", "red");
                            document.getElementById("RETRY").addEventListener("click", reloadPage);
                        });

                        document.getElementById("Is this a pizza place? I'd like to order a reallllly cheesy pizza right now.").addEventListener("click", function () {
                            document.getElementById("Please help me. I don't know where I am.").remove();
                            document.getElementById("HELP ME! I'M LOST! THE ROOMS ARE ALL CLOSING IN ON ME!").remove();
                            document.getElementById("Is this a pizza place? I'd like to order a reallllly cheesy pizza right now.").remove();
                            contMessage.innerHTML = "The operator hangs up. You die.";
                            createButton("RETRY", "red");
                            document.getElementById("RETRY").addEventListener("click", reloadPage);
                        });
                    });

                    document.getElementById("FRIEND").addEventListener("click", function () {
                        document.getElementById("MOM").remove();
                        document.getElementById("FRIEND").remove();
                        document.getElementById("POLICE").remove();
                        contMessage.innerHTML = "You dial your friend's phone. They don't answer. You die.";
                        createButton("RETRY", "red");
                        document.getElementById("RETRY").addEventListener("click", reloadPage);
                    });
                });
            });

            document.getElementById("RIGHT").addEventListener("click", function () {
                document.getElementById("LEFT").remove();
                document.getElementById("RIGHT").remove();
                contMessage.innerHTML = "You come face to face with a wild bear who kills you. Better luck next time.";
                createButton("RETRY", "red");
                document.getElementById("RETRY").addEventListener("click", reloadPage);
            });
        });
    });
}