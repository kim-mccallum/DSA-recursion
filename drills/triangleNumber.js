// calculate the number of dots in the nth triangle
// formula for this is dots = n(n + 1)/2
// EXAMPLE
// 4 - 4(4+1)/2 = 10
// *
// **
// ***
// ****
function triNum(n) {
  // base case - returns 1
  if (n <= 1) {
    return n;
    // recursive case - returns number + output of triNum for the step down
  } else {
    return n + triNum(n - 1);
  }
}

// test the function
// console.log(triNum(4));

module.exports = { triNum };
