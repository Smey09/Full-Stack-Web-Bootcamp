// Create a function that takes an array of numbers
// and a callback. The callback should return true
// if a number is even. Use the callback to filter the array synchronously.
// (filter method of array)

const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7, 8];

function squaredNumbers(numbers, callback) {
  return numbers.map(callback);
}

function anSquare(number) {
  return number * number;
}

const squareAn = squaredNumbers(arrayNumber, anSquare);
console.log(squareAn);
