const word = "quit";

function anagrams(string) {
  // store results
  const results = {};

  // recursive function
  function combinations(prefix, remaining) {
    // base case
    if (!remaining.length) {
      results[prefix] = "";
      return;
    }
    // general case
    for (let i = 0; i < remaining.length; i++) {
      combinations(
        prefix + remaining.charAt(i),
        remaining.slice(0, i) + remaining.slice(i + 1)
      );
    }
  }

  combinations("", string);
  return Object.keys(results).join("\n");
}

console.log(anagrams(word));
