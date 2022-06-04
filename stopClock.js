var s = 0; // secondscount
var ms = 0; // milisecscount
var interval; //totaltime

var buttons = document.querySelectorAll(".btn");
/* all the buttons ie; start, stop and reset are now in an array of 'buttons' */

var stime = document.getElementById("sec");
var mstime = document.getElementById("msec");

buttons[0].addEventListener("click", StartSet);
/* buttons[0] has start button */

function StartSet() {
  //   alert("Start Clicked");
  clearInterval(interval);
  interval = setInterval(setTime, 10);
}

buttons[1].addEventListener("click", StopTime);
/* buttons[1] has stop button */

function StopTime() {
  //   alert("Stop Clicked");
  clearInterval(interval);
}

buttons[2].addEventListener("click", ResetTime);
/* buttons[2] has reset button */
function ResetTime() {
  //   alert("Reset Clicked");
  s = 0;
  ms = 0;
  stime.innerHTML = "00";
  mstime.innerHTML = "00";
}

function setTime() {
  ms += 1;
  if (ms <= 9) {
    var ms2 = "0" + ms;
    mstime.innerHTML = ms2;
  } else if (ms > 9) {
    mstime.innerHTML = ms;
  }
  if (ms >= 99) {
    s += 1;
    ms = 0;
    if (s <= 9) {
      var s2 = "0" + s;
      stime.innerHTML = s2;
    } else if (s > 9) {
      stime.innerHTML = s;
    }
  }
}
