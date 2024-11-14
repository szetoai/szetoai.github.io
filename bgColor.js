const main = document.querySelector("main");
const btn = document.querySelector("#color-changer");

// getSingleRandomRgb: Nothing -> Number
// Produces a set of 3 Integers between 0 and 255 (inclusive)
function getSingleRandomRgb() {
  return (Math.floor(255 * Math.random()));
}

// getFullRandomRgb: Nothing -> String
// Produces a string which represents an RGB in string form
function getFullRandomRgb() {
  let rgb = "rgb("
  for (let i=0; i<3; i++) {
    if (i == 2) {
      rgb = rgb + getSingleRandomRgb() + ")"
    }
    else {
      rgb = rgb + getSingleRandomRgb() + ","
    }
  };
  return rgb;
}

// changeBackgroundGradient : Nothing -> String
// Changes the background gradient on the page to 3 random colors
function changeBackgroundGradient() {
  let grads = "linear-gradient("
  for (let i = 0; i < 3; i++)
  if (i == 2) {
    grads = grads + getFullRandomRgb() + ")"
  }
  else {
    grads = grads + getFullRandomRgb() + ","
  };
  main.style.backgroundImage = grads;
}

// Calls changeBackgroundColor when clicked
btn.onclick = changeBackgroundGradient;