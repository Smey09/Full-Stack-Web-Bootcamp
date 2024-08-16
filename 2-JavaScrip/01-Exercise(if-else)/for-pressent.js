// // Function Expressions
// const sayHi = function () {
//   console.log("Hi,function expressions!");
// };
// sayHi();

// // Function Anonymous
// let sayGoodbye = function () {
//   console.log("Goodbye, anonymous function");
// };
// sayGoodbye();

// (function (name) {
//   //   return `Hello, ${name}!`;
//   console.log(name);
// })
// ;

// Function Expressions
// let sayGoodbye = (text) => {
//   return text.toLowerCase();
// };
// console.log(sayGoodbye("EXPRESSION FUNTIONS"));

// //No name
// // Anonymous it stay in Expressions
// setTimeout(function () {
//   console.log("Hello");
// }, 5000);

// Anonymous in Expressions
// Arrow Function (Expression Function) and Anonymous Function with setTimeout
let sayGoodbyeAndHello = (text) => {
  console.log(text.toLowerCase()); // Calling arrow function directly in console.log
  setTimeout(function () {
    console.log("Hello");
  }, 5000);
};

// Using the Arrow Function and Anonymous Function with setTimeout
sayGoodbyeAndHello("EXPRESSION FUNCTIONS");
