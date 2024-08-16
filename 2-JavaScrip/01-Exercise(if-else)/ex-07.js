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
