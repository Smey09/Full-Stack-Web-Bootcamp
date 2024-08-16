// 9. Write a function that takes an array of numbers as an input and returns the median value
function getMedian(numbers) {
  numbers.sort((a, b) => a - b);

  const midIndex = Math.floor(numbers.length / 2);
  console.log("helllo" + midIndex);

  if (numbers.length % 2 !== 0) {
    return numbers[midIndex];
  }
  return (numbers[midIndex - 1] + numbers[midIndex]) / 2;
}

const numbers1 = [1, 2, 3, 4, 5];
// const numbers2 = [3, 5, 1, 4, 2, 6];

console.log(getMedian(numbers1)); // Output: 3
// console.log(getMedian(numbers2)); // Output: 3.5

