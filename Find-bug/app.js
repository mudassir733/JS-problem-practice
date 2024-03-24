// Fix the Bug!
const company = "Nike";
const tagline = "Just do it";

// here is the solution to print the 2 constant
console
  .log(company, tagline)

  [
    // by console.log this below code it is throw this error: ReferenceError: Cannot access "tagline" before initialization
    // How to fix this bug???
    (company, tagline)
  ].forEach((el) => console.log(el));
