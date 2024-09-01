
let countDownDate = new Date("sep 19, 2024 09:00:00").getTime();
let Day = document.getElementById("DAYS");
let MINTES = document.getElementById("MINTES");

let SECONDS = document.getElementById("SECONDS");

let HOURS = document.getElementById("HOURS");

let Done = document.getElementById("done");

let date = document.getElementById("date");

let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

   Day.innerHTML = days;
    MINTES.innerHTML = minutes ;

    SECONDS.innerHTML = seconds ;

    HOURS.innerHTML = hours ;


  if (distance < 0) {
    clearInterval(x);
      Done.style.display = "block";
      date.style.display = "none";
  }
}, 1000);
