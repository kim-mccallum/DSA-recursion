// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// Input: 3
// Output:
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence

const countingSheep = function (n) {
  //base case - if n is 0
  if (n === 0) {
    console.log("All sheep jumped over the fence");
  } else {
    //recursive case
    // output of recursive all is the console log
    console.log(`${n}: Another sheep jumped over the fence`);
    // input of the recursive call
    let newNum = n - 1;
    countingSheep(newNum);
  }
};

// test the function
countingSheep(4);

module.exports = { countingSheep };
