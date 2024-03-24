/**
 * Returns a 6 digit hexCode prepended with '#' as a valid color code
 * @returns {string} hexCode
 */
function generateRandomHexCode() {
  let hexCode = "#";

  for (let i = 0; i < 3; i++) {
    let hexValue = Math.floor(Math.random() * 256).toString(16);
    if (hexValue.length < 2) {
      hexValue = "0" + hexValue;
    }
    hexCode += hexValue;
  }

  return hexCode;
}

// You can log the results of the function to debug
// Sample Strings
for (let i = 0; i < 100; i++) {
  console.log(generateRandomHexCode());
}
