// Define a function that animates the characters of a string
function element_animation() {
  // Get the HTML element by its id
  let element = document.getElementById("target");
  // Access the text node inside the element (assuming no other children)
  let textNode = element.childNodes[0];
  // Extract the initial text content of the text node
  let text = textNode.data;

  // Set up an interval to rotate the characters in the text every 100 milliseconds
  setInterval(function () {
    // Move the last character to the beginning of the string
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 100);
}

// Call the funtion when window is loaded
window.addEventListener("load", function () {
  element_animation();
});
