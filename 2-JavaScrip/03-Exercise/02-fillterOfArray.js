// Create a function that takes an array of numbers
// and a callback. The callback should return true
// if a number is even. Use the callback to filter the array synchronously.
// (filter method of array)

const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7, 8];

//call back
function filterArray(numbers, callback) {
  return numbers.filter(callback);
}

//check
function isEven(number) {
  return number % 2 == 0;
}

const answer = filterArray(arrayNumber, isEven);
console.log(answer);
