let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let initiate;

// const timer = document.querySelector(".timer");

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
  let ms = milliseconds;
  if (ms < 10) {
    ms = "00" + ms;
  } else if (ms < 100) {
    ms = "0" + ms;
  }

  document.querySelector(".milliseconds").innerHTML = ms;
  document.querySelector(".seconds").innerHTML = sec;
  document.querySelector(".minutes").innerHTML = min;
  document.querySelector(".hours").innerHTML = hour;
}

startBtn.addEventListener("click", () => {
  initiate = setInterval(displayTime, 10);
});

stopBtn.addEventListener("click", () => {
  clearInterval(initiate);
});

resetBtn.addEventListener("click", () => {
  clearInterval(initiate);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector(".milliseconds").innerHTML = "000";
  document.querySelector(".seconds").innerHTML = "00";
  document.querySelector(".minutes").innerHTML = "00";
  document.querySelector(".hours").innerHTML = "00";
});
