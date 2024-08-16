// 8. Write a function that could sort a list of numbers in ascending order.
// function sortNumbersAscending(numbers) {
//   return numbers.sort((a, b) => a - b);
// }

// const numbers = [5, 2, 9, 1, 5, 6];
// const sortedNumbers = sortNumbersAscending(numbers);
// console.log(sortedNumbers); // Output: [1, 2, 5, 5, 6, 9]

function sortNumbersAscending(numbers) {
  let n = numbers.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (numbers[i - 1] > numbers[i]) {
        // Swap the elements
        let temp = numbers[i - 1];
        numbers[i - 1] = numbers[i];
        numbers[i] = temp;
        swapped = true;
      }
    }
    n--; // Reduce the range of elements to check since the largest element is already sorted
  } while (swapped);
  return numbers; 
}

const numbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = sortNumbersAscending(numbers);
console.log(sortedNumbers); // Output: [1, 2, 5, 5, 6, 9]
