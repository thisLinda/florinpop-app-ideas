document.addEventListener("DOMContentLoaded", function(e) {
  let binaryInput = document.getElementById("binaryInput")
  let decimalOutput = document.getElementById("decimalOutput")

  binaryInput.addEventListener("input", function(e) {
    let binaryValue = binaryInput.value
    // if the binary value is valid (consists of 0's and 1's only)
    if (/^[01]{1,8}$/.test(binaryValue)) {
      let decimalValue = parseInt(binaryValue, 2)
      decimalOutput.value = decimalValue
    } else {
      decimalOutput.decimalValue = ""
    }
  })
})
