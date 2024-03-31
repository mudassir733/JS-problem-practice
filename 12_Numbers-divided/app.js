// TODO: Task is----->
//* Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).

// Define a function to multiply two numbers and display the result
function multiplyBy() {
  // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
  const num1 = document.getElementById("firstNumber").value;
  const num2 = document.getElementById("secondNumber").value;
  const multiplyBtn = document.querySelector(".multiply");
  const resultEl = document.querySelector("#result");

  // Set the inner HTML of the element with the id "result" to the product of the two numbers
  multiplyBtn.addEventListener("click", () => {
    resultEl.innerHTML = parseInt(num1 * num2);
  });
}
// Call the funtion
multiplyBy();

// Define a function to divide two numbers and display the result
function divideBy() {
  // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
  const num1 = document.getElementById("firstNumber").value;
  const num2 = document.getElementById("secondNumber").value;
  const divideBtn = document.querySelector(".divid");
  const resultEl = document.querySelector("#result");

  // Set the inner HTML of the element with the id "result" to the quotient of the two numbers
  divideBtn.addEventListener("click", () => {
    resultEl.innerHTML = parseInt(num1 / num2);
  });
}

// Call the funtion
divideBy();
