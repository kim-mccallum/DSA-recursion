// Identify the following: Input to the program, output, input to recursive call, output of recursive call.

// 1. counting sheep
// input - number of sheep
// output - message - 'Another sheep jumps over the fence' or 'All sheep jumped over the fence'

const countingSheep = function (n) {
  //base case - if n is 0
  if (n === 0) {
    console.log("All sheep jumped over the fence");
  } else {
    //recursive case
    // output of recursive all is the console log
    console.log(`Another sheep jumped over the fence`);
    // input of the recursive call
    let newNum = n - 1;
    countingSheep(newNum);
  }
};
countingSheep(4);

// Power calculator
function powerCalculator(num, pow) {
  if (pow < 0) {
    console.log(`Pow must be >= 0`);
  } else if (pow === 0) {
    // base case
    return 1;
  } else {
    // recursive case
    // input to the recursive case is num and pow - 1
    // output of the recursive all is the number multiplied by what is returned by powerCalculator
    return num * powerCalculator(num, pow - 1);
  }
}

console.log(powerCalculator(10, 2));

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

console.log(reverseString("Ride bikes, go fast!"));
