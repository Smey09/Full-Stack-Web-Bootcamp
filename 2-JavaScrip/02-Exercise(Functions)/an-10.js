// 10. Write a function that takes a non negative number as a parameter and returns the factorial of that parameter
function factorial(number) {
  if (number < 0) {
    return NaN;
  }
  if (number === 0 || number === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // Output is : 120 , (5! = 5 * 4 * 3 * 2 * 1 = 120)
console.log(factorial(0)); // Output is : 1 , (0! = 1)
console.log(factorial(1));
console.log(factorial(10));
