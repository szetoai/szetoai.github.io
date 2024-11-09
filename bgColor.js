const main = document.querySelector("main");

function getRandomRgb() {
  return (Math.floor(255 * Math.random()));
}

function changeBackgroundColor() {
  main.style.backgroundColor = "rgb(" + getRandomRgb() + "," + getRandomRgb() + "," + getRandomRgb() + ")";
}

const btn = document.querySelector("#color-changer");
btn.onclick = changeBackgroundColor;