let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let initiate;

const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");

function displayTime() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds % 60 == 0) {
      seconds = 0;
      minutes++;
      if (minutes % 60 == 0) {
        minutes = 0;
        hours++;
        if (hours % 24 == 0) {
          hours = 0;
        }
      }
    }
  }

  let hour = hours < 10 ? "0" + hours : hours;
  let min = minutes < 10 ? "0" + minutes : minutes;
  let sec = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

  ms = ms.toString().padStart(3, '0').slice(0, 2);

  document.querySelector(".milliseconds").innerHTML = ms;
  document.querySelector(".seconds").innerHTML = sec;
  document.querySelector(".minutes").innerHTML = min;
  document.querySelector(".hours").innerHTML = hour;
}

function start() {
  startBtn.disabled = true; // Disable the start button
  initiate = setInterval(displayTime, 10);
}

function stop() {
  clearInterval(initiate);
  startBtn.disabled = false; // Enable the start button when stopped
}

function reset() {
  clearInterval(initiate);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector(".milliseconds").innerHTML = "00";
  document.querySelector(".seconds").innerHTML = "00";
  document.querySelector(".minutes").innerHTML = "00";
  document.querySelector(".hours").innerHTML = "00";
  startBtn.disabled = false; // Enable the start button after reset
}
