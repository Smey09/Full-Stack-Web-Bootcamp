// 5. Write a function that could take any number of arguments and calculates their sum and return it
//     Example: console.log(sumAll(1, 2)) // 3
//                     console.log(sumAll(1, 2, 3, 4, 5)) // 15

function sumAll(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(sumAll(1, 2)); // Output: 3
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
