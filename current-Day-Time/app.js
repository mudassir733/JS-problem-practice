// * Task is
// * 1. Write a JavaScript program to display the current day and time in the following format.
// * Sample Output : Today is : Tuesday.
// * Current time is : 10 PM : 30 : 38

// Create new Date
const today = new Date();
// getting the day
let day = today.getDay();
// Array of the day list
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "saturday",
];

// Display the current day
let currentDay = dayList[day];

// Get the current hour, minute, and second
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
// Determine if it's AM or PM
let prepend = hour >= 12 ? "AM" : "PM";
// Convert 24-hour format to 12-hour format
hour = hour >= 12 ? hour - 12 : hour;
// Check for special cases when hour is 0
if (hour === 0 && prepend === "PM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepend = "Noon";
  } else {
    hour = 12;
    prepend = "PM";
  }
}
// Check for special cases when hour is 0
if (hour === 0 && prepend === "AM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepend = "Midnight";
  } else {
    hour = 12;
    prepend = "AM";
  }
}
// Display the current time
console.log(
  `Today is: ${currentDay} And Time is ${prepend} : ${hour} : ${minute} : ${second}`
);

// * The task is completed :)
