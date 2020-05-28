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

// test the function
console.log(powerCalculator(10, 2));

module.exports = { powerCalculator };
