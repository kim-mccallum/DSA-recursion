//MORE OBVIOUS BUT BAD SOLUTION WITH O(2**N) DUE TO REDUNDANT COMPUTATION
// function fibonacci(number) {
//   // base case
//   if (number <= 1) {
//     return 1;
//   }
//   // recursive case
//   return fibonacci(number - 1) + fibonacci(number - 2);
// }

// Memoization is an optimization technique that speeds up applications by storing results of expensive function calls and returning the cached results when the same inputs occur again.
// https://scotch.io/tutorials/understanding-memoization-in-javascript
function fibonacci(num, memo) {
  // memo is an object to cache values already computed
  memo = memo || {};
  // if the value has been computed, don't recompute, just return it
  if (memo[num]) {
    return memo[num];
  }
  if (num <= 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  //   compute and store values in the object
  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}

console.log(fibonacci(7));
