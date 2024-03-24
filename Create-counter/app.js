/**
 * @param {number} n
 * @return {Function} counter
 */
function createCounter(n) {
  let currentValue = n;
  // return a function
  return function counter() {
    const result = currentValue;

    currentValue++;

    return result;
  };
}

// Sample Test Cases

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

const secondCounter = createCounter(42);
console.log(secondCounter()); // 42
console.log(secondCounter()); // 43
