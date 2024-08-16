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
