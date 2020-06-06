let anagrams = (string) => {
  if (!string || typeof string !== "string") {
    console.log("enter a string!");
  } else if (string.length < 2) {
    return string;
  }
  let permutationsArray = [];

  for (let i = 0; i < string.length; i++) {
    // do something
    let char = string[i];
    let remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);
    // console.log(char, remainingChars)

    for (let permutation of anagrams(remainingChars)) {
      permutationsArray.push(char + permutation);
    }
  }
  return permutationsArray;
};

console.log(anagrams("east"));
