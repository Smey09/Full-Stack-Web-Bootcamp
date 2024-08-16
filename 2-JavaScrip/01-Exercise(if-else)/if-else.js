// 1. Iterate through the numbers 1 to 10, and at each iteration print “i”
for (let i = 1; i <= 10; i++) {
  console.log("Counter Number From 1 to 10 is " + i);
}

// 2. Iterate through the numbers 10 to 1, and at each iteration print “i”
for (let i = 10; i >= 1; i--) {
  console.log("Counter Number From 10 to 1 is " + i);
}

// 3. Convert numerical grades into letter grades (A, B, C, D, E, F)
let score = 60;

if (score >= 90) {
  console.log("Your letter grade is A");
} else if (score >= 80) {
  console.log("Your letter grade is B");
} else if (score >= 70) {
  console.log("Your letter grade is C");
} else if (score >= 60) {
  console.log("Your letter grade is D");
} else if (score >= 50) {
  console.log("Your letter grade is E");
} else console.log("Your letter grade is F");

// 4. A company has a list of employees and their salary in separate arrays...
const employees = ["Lara", "Evee", "Simi"];
const salaries = [1000, 2000, 120.9];
const employeeSalaries = {};

for (let i = 0; i < employees.length; i++) {
  employeeSalaries[employees[i]] = salaries[i];
}
console.log(employeeSalaries);

//5. Write a loop that displays from 1 to 10 except even numbers (យកលេខសេះ)
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// 6. Write a program that count the odd and even numbers from the list of numbers containing 1 to 10
//example 1
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    console.log("count odd numbers" + i);
  } else {
    console.log("count even numbers" + i);
  }
}

// example 2
let evenCount = 0;
let oddCount = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    evenCount++;
    // console.log(i);
  } else {
    oddCount++;
    // console.log(i);
  }
}
console.log("Total even numbers:", evenCount);
console.log("Total odd numbers:", oddCount);

// 7. Write a program that prints...
let Fizz = 0;
let Buzz = 0;
let FizzBuzz = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    FizzBuzz++;
    // console.log(i);
  } else if (i % 3 == 0) {
    Fizz++;
    // console.log(i);
  } else if (i % 5 == 0) {
    Buzz++;
    // console.log(i);
  }
}
console.log("Fizz", Fizz);
console.log("Buzz", Buzz);
console.log("FizzBuzz", FizzBuzz);

// 8. Write a program that uses a loop to calculate the sum of all numbers in an array.
const array1 = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < array1.length; i++) {
  sum += array1[i];
}
console.log("total is : " + sum);

//9. Write a program that prints all prime numbers between 1 and 100.
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}

// 10. Write a program that finds the largest number in an array using a loop.
let array = [6, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let largest = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
    console.log(largest);
  }
}
console.log("largest number is : " + largest);
