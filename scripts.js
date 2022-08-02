// Write your JavaScript code here.
// Remember to pay attention to page loading!

const takeOff = document.getElementById("takeoff");
const flightStatus = document.getElementById("flightStatus");
const shuttleFlightScreen = document.getElementById("shuttleBackground");
const shuttleHeight = document.getElementById("spaceShuttleHeight");
const landButton = document.getElementById("landing");
const abortButton = document.getElementById("missionAbort");
const upBttn = document.getElementById("up");
const downBttn = document.getElementById("down");
const leftBttn = document.getElementById("left");
const rightBttn = document.getElementById("right");
const rocket = document.getElementById("rocket");

let position = 0;

window.addEventListener("load", (event) => {
  console.log("Page is fully loaded.");
});

takeOff.addEventListener("click", function () {
  if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
    flightStatus.innerHTML = "Shuttle in flight.";
    shuttleFlightScreen.style.backgroundColor = "blue";
    spaceShuttleHeight.innerHTML = 10000;
  }
});

landButton.addEventListener("click", function () {
  window.alert("The shuttle is landing. Landing gear engaged.");
  flightStatus.innerHTML = "The shuttle has landed.";
  shuttleFlightScreen.style.backgroundColor = "green";
  spaceShuttleHeight.innerHTML = 0;
  rocket.style.left = 0;
});

abortButton.addEventListener("click", function () {
  if (window.confirm("Confirm that you want to abort the mission.")) {
    flightStatus.innerHTML = "Mission aborted.";
    shuttleFlightScreen.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;
    rocket.style.left = 0;
  }
});

leftBttn.addEventListener("click", function () {
  rocket.style.position = "relative";
  if (position > -260) {
    position -= 10;
    rocket.style.left = `${position}px`;
  }
});

rightBttn.addEventListener("click", function () {
  rocket.style.position = "relative";
  if (position < 260) {
    position += 10;
    rocket.style.left = `${position}px`;
  }
});

upBttn.addEventListener("click", function () {
  let shuttleHeight = parseInt(spaceShuttleHeight.innerHTML);
  shuttleHeight += 10000;
  spaceShuttleHeight.innerHTML = shuttleHeight;
});

downBttn.addEventListener("click", function () {
  let shuttleHeight = parseInt(spaceShuttleHeight.innerHTML);
  if (shuttleHeight > 10000) {
    shuttleHeight -= 10000;
  }
  spaceShuttleHeight.innerHTML = shuttleHeight;
});
