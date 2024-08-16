// 7. Write a function that count vowels of a string that provided as an input and return the count of vowels (a, e, i, o, u)
function countVowels(inputString) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of inputString.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Example usage:
console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("OpenAI")); // Output: 4
console.log(countVowels("JavaScript")); // Output: 3
