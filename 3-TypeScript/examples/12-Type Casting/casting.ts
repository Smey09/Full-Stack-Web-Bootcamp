

// ! <Type>value

let someValue: any = "Hello, TypeScript!";

// Casting using angle bracket syntax
let strValue: string = <string>someValue;

console.log(strValue); // Output: "Hello, TypeScript!"


//! value as Type

let some_Value: any = "Hello, TypeScript!";

// Casting using 'as' syntax
let str_Length: number = (some_Value as string).length;

console.log(str_Length); // Output: 18
