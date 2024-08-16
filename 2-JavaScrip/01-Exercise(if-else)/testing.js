// // 1. Iterate through the numbers 1 to 10, and at each iteration print “i”

// for (i = 0; i <= 10; i++) {
//   console.log(i);
// }

// // 2. Iterate through the numbers 10 to 1, and at each iteration print “i”

// for (i = 10; i >= 1; i--) {
//   console.log(i);
// }

// // 3. Convert numerical grades into letter grades (A, B, C, D, E, F)
// let score = 80;
// if (score >= 90) {
//   console.log("Grade A");
// } else if (score >= 80) {
//   console.log("grade B");
// } else if (score >= 70) {
//   console.log("Grade C");
// } else if (score >= 60) {
//   console.log("Grade D");
// } else if (score >= 50) {
//   console.log("Grade E");
// } else {
//   console.log("Grade F");
// }

// // 4. A company has a list of employees and their salary in separate arrays...
// const employees = ["person1", "person2", "person3"];
// const salaries = [1000, 1500, 2000];
// const employeeSalaries = {};

// for (let i = 0; i < employees.length; i++) {
//   employeeSalaries[employees[i]] = salaries[i];
// }
// console.log(employeeSalaries);

// //5. Write a loop that displays from 1 to 10 except even numbers (យកលេខសេះ)
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// // 6. Write a program that count the old and even numbers from the list of numbers containing 1 to 10
// let oldCount = 0;
// let evenCount = 0;
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 1) {
//     oldCount++;
//     console.log(i);
//   } else {
//     evenCount++;
//   }
// }
// console.log("oldCount is :" + oldCount);
// console.log("evenCount is :" + evenCount);

// 7. Write a program that prints...
let Fizz = 0;
let Buzz = 0;
let FizzBuzz = 0;
for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    FizzBuzz++;
  } else if (i % 3 == 0) {
    Fizz++;
  } else if (i % 5 == 0) {
    Buzz++;
  }
}
console.log("FizzBuzz is :" + FizzBuzz);
console.log(Fizz);
console.log(Buzz);

// 8. Write a program that uses a loop to calculate the sum of all numbers in an array.

//9. Write a program that prints all prime numbers between 1 and 100.

// 10. Write a program that finds the largest number in an array using a loop.
