function reverseString(input) {
  let output = ''
  for (let x=0; x < input.length; x++) {
    output = input[x] + output;
  }
  return output;
}

module.exports = reverseString;