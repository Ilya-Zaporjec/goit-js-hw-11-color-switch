// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

import colors from "./data.js";
const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');

btnStart.addEventListener("click", runColor);
btnStop.addEventListener("click", stopColor);

const maxNum = colors.length;
let minNum;
let counterId = null;

if (maxNum === 0) {
  // backgroundcolor #fff
} else {
  minNum = 1;
}

function changeRandomColor() {
  const indColor = colors[randomIntegerFromInterval(minNum, maxNum) + 1];
  document.body.style.backgroundColor = `${indColor}`;
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function runColor() {
  btnStart.disabled = true;
  btnStop.disabled = false;
  counterId = setInterval(changeRandomColor, 1000);
  console.log("run");
}

function stopColor() {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(counterId);
  console.log("stop");
}
