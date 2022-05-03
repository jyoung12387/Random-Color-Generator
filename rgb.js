// const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.querySelector(".generate");
const outputDiv = document.querySelector(".output");
const rgbResult = document.getElementById("result");

btn.addEventListener("click", function () {
  const randomRGB = getRandomRGB();
  outputDiv.style.backgroundColor = randomRGB;
  rgbResult.textContent = randomRGB;
});

// function that takes in min and max and returns a random whole
// number between those values
function getRandomNumber(min, max) {
  result = Math.round(Math.random() * (max - min) + min);
  return result;
}

// get a random RGB value
function getRandomRGB() {
  let r = getRandomNumber(0, 255);
  let g = getRandomNumber(0, 255);
  let b = getRandomNumber(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}
