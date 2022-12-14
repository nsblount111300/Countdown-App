const button = document.getElementById("input-button");

button.addEventListener("click", function onClick() {
  const daysLeft = document.getElementById("days-left");
  const hoursLeft = document.getElementById("hours-left");
  const minutesLeft = document.getElementById("minutes-left");
  const secondsLeft = document.getElementById("seconds-left");
  const title = document.getElementById("title");
  const inputTitle = document.getElementById("input");
  const inputDate = document.getElementById("input-date");
  title.innerHTML = "Days until " + inputTitle.value + ":";
  const custom = new Date(inputDate.value);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24; //milliseconds
  let timerId;
  const today = new Date();
  const timeSpan = custom - today;
  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  daysLeft.innerHTML = days + " Days";
  hoursLeft.innerHTML = hours + " Hours";
  minutesLeft.innerHTML = minutes + " Minutes";
  secondsLeft.innerHTML = seconds + " Seconds";

  document.getElementById("input-countdown").style.opacity = 0;
  document.getElementById("input-countdown").style.height = 0;
  document.getElementById("input-countdown").style.width = 0;

  document.getElementById("reset-button").style.opacity = 100;

  timerId = setInterval(onClick, second);
});
