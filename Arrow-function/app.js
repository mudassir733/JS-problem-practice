// Create the greet arrow function here and export it as default.
const greet = (name) => {
  if (typeof name !== "string" || name.length <= 0) {
    return undefined;
  }
  return `Hello, ${name}!`;
};
console.log(greet("sam"));

// Sample Tests for your greet function
console.log(greet("Neo")); // should return "Hello, Neo!"
console.log(greet("Trinity")); // should return "Hello, Trinity!"
console.log(greet("Morpheus")); // should return "Hello, Morpheus!"
