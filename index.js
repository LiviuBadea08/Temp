const h2 = document.getElementsByTagName("h2")[0];
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let sec = 0;
let min = 0;
let hour = 0;
let t;

function tic() {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
    if (min >= 60) {
      min = 0;
      hour++;
    }
  }
}

function add() {
  tic();
  h2.textContent =
    (hour > 9 ? hour : "0" + hour) +
    ":" +
    (min > 9 ? min : "0" + min) +
    ":" +
    (sec > 9 ? sec : "0" + sec);
  timer();
}
function timer() {
  t = setTimeout(add, 1000);
}

timer();
start.onclick = timer;
stop.onclick = function () {
  clearTimeout(t);
};

reset.onclick = function () {
  h2.textContent = "00:00:00";
  sec = 0;
  min = 0;
  hour = 0;
};
