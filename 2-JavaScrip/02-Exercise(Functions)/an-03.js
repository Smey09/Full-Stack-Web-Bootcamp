// 3. Write an arrow function that that take an array of numbers as a parameter and returns the average of those numbers

const average = (numbers) => {
  const total = numbers.reduce((acc, num) => acc + num, 0);
  return total / numbers.length;
};

console.log(average([1, 2, 3, 4, 5, 6])); // Output: 3
