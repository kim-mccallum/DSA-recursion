// positional notation with binary
// 10011011 = 155 (1x128 + 0*64 + 0*32 + 1*16 + 1*8 + 0*4 + 1*2 + 1*1)
//  3 ->    11                    (1*2 + 1*1)
// 25 -> 11001 (1*16 + 1*8 + 0*4 + 0*2 + 1*1)

// modulo operator?

function intToBinary(num) {
  let newNum = num;
  binary = "";
  while (newNum > 0) {
    //   each new digit is appended to the beginning of the string
    // will always return a 0 or 1 and add
    binary = (newNum % 2) + binary;
    newNum = Math.floor(newNum / 2);
  }
  return binary;
}

console.log(intToBinary(25));

function binaryRec(int, acc) {
  // save divisions
  acc = acc || [];

  // base cases.
  if (acc.length === 0 && int === 0) return "0";
  if (acc.length === 0 && int === 1) return "1";

  // base case - number is 0 digits
  if (int === 0) {
    // do something
    return acc.reverse().join("");
  }
  // recursive case
  acc.push(int % 2);
  return binaryRec(Math.floor(int / 2), acc);
}

console.log(binaryRec(25));
