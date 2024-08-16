// 8. Write a program that uses a loop to calculate the sum of all numbers in an array.
const array1 = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < array1.length; i++) {
  sum += array1[i];
}
console.log("total is : " + sum);
