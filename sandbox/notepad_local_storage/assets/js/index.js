const notepadTextarea = document.querySelector(".notepad-textarea");
const saveButton = document.querySelector(".save-button");
const clearButton = document.querySelector(".clear-button");

// set text on load
window.addEventListener("load", function () {
    notepadTextarea.value = localStorage.getItem("notepadText");
});

// save text
saveButton.addEventListener("click", function () {
    localStorage.setItem("notepadText", notepadTextarea.value);
});

// save text
clearButton.addEventListener("click", function () {
    notepadTextarea.value = "";
});