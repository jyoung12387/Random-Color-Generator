const hex = [0, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".generate");
const outputDiv = document.querySelector(".output");
const rgbResult = document.getElementById("result");

btn.addEventListener("click", function () {
  const randomHex = getRandomHex();

  outputDiv.style.backgroundColor = randomHex;
  rgbResult.textContent = randomHex;

  //   document.body.style.backgroundColor = randomHex;
  //   color.textContent = randomHex;
});

// function that takes in min and max and returns a random whole
// number between those values
function getRandomNumber(min, max) {
  result = Math.round(Math.random() * (max - min) + min);
  return result;
}

// get a random Hex value
function getRandomHex() {
  let hexValues = [];
  for (let i = 0; i < 6; i++) {
    let index = getRandomNumber(0, hex.length - 1);
    hexValues.push(hex[index]);
  }
  return (
    "#" +
    hexValues[0] +
    hexValues[1] +
    hexValues[2] +
    hexValues[3] +
    hexValues[4] +
    hexValues[5]
  );
}
