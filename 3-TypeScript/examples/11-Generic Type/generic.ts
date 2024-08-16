function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello, TypeScript!"); 
let output2 = identity<number>(123); 

console.log("Output 1:", output1); // type of output1 is string
console.log("Output 2:", output2); // type of output2 is number

//heloo Kali 02
console.log("Hello testing");
