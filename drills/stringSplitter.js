function stringSplitter(string, outArr = []) {
  // base case
  if (string.indexOf("/") === -1) {
    outArr.push(string);
    return outArr;
  }
  // recursive case
  else {
    // break on the first '/' push the first to the output array
    outArr.push(string.substring(0, string.indexOf("/")));
    // get last part to pass to the recursive call
    let last = string.substring(string.indexOf("/") + 1);
    return stringSplitter(last, outArr);
  }
}
// test the function
// console.log(stringSplitter("test/recursion/ouch!/again"));

module.exports = { stringSplitter };
