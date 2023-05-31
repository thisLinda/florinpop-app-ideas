document.addEventListener("DOMContentLoaded", function(e) {
  // Get the binary input field and decimal output box elements
  let binaryInput = document.getElementById("binaryInput");
  let decimalOutput = document.getElementById("decimalOutput");

  // Add event listener to binary input field
  binaryInput.addEventListener("input", function(e) {
    // Get the binary input value
    let binaryValue = binaryInput.value;

    // Check if the binary value is valid (consists of 0's and 1's only)
    if (/^[01]{1,8}$/.test(binaryValue)) {
      // Convert the binary value to decimal
      let decimalValue = parseInt(binaryValue, 2);

      // Display the decimal value inside the output box
      decimalOutput.textContent = decimalValue;
    } else {
      // Clear the decimal value if the binary value is invalid
      decimalOutput.textContent = "";
    }
  });
});
