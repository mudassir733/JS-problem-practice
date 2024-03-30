//TODO: Task:---->
//******  Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". ****//

// Generate a random integer between 1 and 10 (inclusive)
const randomNum = Math.floor(Math.random() * 10);

// Log the generated random number
console.log(randomNum);

// Prompt the user to guess a number between 1 and 10 (inclusive)
const guessNumber = prompt("Please enter a number between 1 and 10");

// Check if the guessed number matches the generated random number
if (guessNumber === randomNum) {
  console.log("Matched Successfully");
} else {
  console.log("Matched Failure please try again!");
}
