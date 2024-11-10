const main = document.querySelector("main");
const btn = document.querySelector("#color-changer");

// getRandomRgb: Nothing -> Number
// Produces a random real number between 0 and 255
function getRandomRgb() {
  return (Math.floor(255 * Math.random()));
}
// changeBackgroundColor: Color -> Color
// Changes the background color of main to a random RGB
function changeBackgroundColor() {
  main.style.backgroundColor = "rgb(" + getRandomRgb() + "," + getRandomRgb() + "," + getRandomRgb() + ")";
}

// Calls changeBackgroundColor when clicked
btn.onclick = changeBackgroundColor;