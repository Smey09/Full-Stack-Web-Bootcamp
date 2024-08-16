function identity(arg) {
    return arg;
}
var output1 = identity("Hello, TypeScript!");
var output2 = identity(123);
console.log("Output 1:", output1); // type of output1 is string
console.log("Output 2:", output2); // type of output2 is number
