console.log("connection");

/*********************************************************
  taking the value to the javascript.
*********************************************************/
let text = document.getElementById("text-area");

/***********************************************************
  saving the text to the local storage..
************************************************************/
function saveInput() {
  localStorage.setItem("savedText", text.value);
}
/***********************************************************
  checking the text with the key is presnt are not..
************************************************************/

if (localStorage.getItem("savedText")) {
  text.value = localStorage.getItem("savedText");
}

/***********************************************************
  adding the event listener to text area.
************************************************************/
text.addEventListener("input", saveInput);

/************************************************************
   dark mode light mode theme mode
************************************************************/
let colorChange = document.getElementsByClassName("mainContainer")[0];
let clicked = false;
function toggleMode() {
  let toggleButton = document.getElementById("toggle");
  // body.classList.toggle(darkMode);
  let body = document.getElementById("holeBody");
  body.classList.add("darkMode");
  if (clicked) {
    clicked = false;
    toggleButton.innerText = "Dark Mode";
    toggleButton.style.backgroundColor = "green";
    toggleButton.style.color = "white";
    body.style.background = "";
  } else {
    clicked = true;
    toggleButton.innerText = "light Mode";
    toggleButton.style.backgroundColor = "white";
    toggleButton.style.color = "black";
    body.style.background = "black";
  }
}
