// Write a function called that takes an array of numbers
// and a callback function that processes each element
// of the array. Use the callback to square each number in the array.
// (map method of array)

// const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7, 8];

// //call back
// function squaredNumbers(numbers, callback) {
//   return numbers.map(callback);
// }

// //check
// function anSquare(number) {
//   return number * number;
// }

// const squareAn = squaredNumbers(arrayNumber, anSquare);
// console.log(squareAn);

function callBackFunction(arrNumber, getCallBack) {
  // create new var for store each element of array after loop
  const result = [];
  for (let i = 0; i < arrNumber.length; i++) {
    // add the item in array to arr `result`
    result.push(getCallBack(arrNumber[i]));
  }
  // return data
  return result;
}
// arrNumber
const numbers = [1, 2, 3, 4, 5, 6, 7];
// define callback function
const sqCallBack = function (num) {
  return num * num;
};
// invoke callBackFunction with the number of array with squarecallBack
const sqNumber = callBackFunction(numbers, sqCallBack);

// console.log(`${sqNumber}`);
console.log(sqNumber);
