function factorial(number) {
  // base case
  if (number <= 0) {
    return 1;
  }
  // recursive case
  // n! = n * (n - 1)!
  return number * factorial(number - 1);
}

// console.log(factorial(5));

module.exports = {
  factorial,
};
