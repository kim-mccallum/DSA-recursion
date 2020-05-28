// Reverse a string
function reverseString(string) {
  // base case - empty string
  if (string === "") {
    return string;
  }
  // recursive case - call fn on smaller string
  // each recursive call outputs another call with the first character added
  // when it gets to bottom of the stack, it moves back up, returning the first characters
  // I'm not sure how it rejoins everything at the end
  else {
    return reverseString(string.substring(1)) + string.charAt(0);
  }
}

// test fn
// console.log(reverseString("Ride bikes, go fast!"));

module.exports = { reverseString };
