// Given an array of numbers, use the `reduce` method to find the maximum number of the array

// =========== 5 ===========
// const numbers = [10, 5, 80, 1, 7, 3, 9];

// const maxNumber = numbers.reduce(function (max, current) {
//   return current > max ? current : max;
// }, numbers[0]);

// console.log(maxNumber);

const numbers = [10, 5, 80, 1, 7, 3, 9];

const maxNumber = numbers.reduce(function (max, current) {
  if (current > max) {
    return current;
  } else {
    return max;
  }
});
console.log(maxNumber);

// let maxNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > maxNumber) {
//     maxNumber = numbers[i];
//   }
// }

// console.log(maxNumber);
