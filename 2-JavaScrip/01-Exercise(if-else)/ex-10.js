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
