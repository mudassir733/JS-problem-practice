// Get the current date
let today = new Date();
// Get the day of the month
let date = today.getDate();
// Get the month (adding 1 because months are zero-based)
let month = today.getMonth() + 1;
// Get the year
let year = today.getFullYear();
// Add leading zero if the day is less than 10
if (date < 10) {
  date = "0" + date;
}

// Add leading zero if the month is less than 10
if (month < 10) {
  month = "0" + month;
}

// Format the date as mm-dd-yyyy and log it
today = month + "-" + date + "-" + year;
console.log(today);

// Format the date as mm/dd/yyyy and log it
today = month + "/" + date + "/" + year;
console.log(today);

// Format the date as dd-mm-yyyy and log it
today = date + "-" + month + "-" + year;
console.log(today);
