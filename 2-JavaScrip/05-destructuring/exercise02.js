// 2. Given the object of person {name: “Alice”, age: 25, job: “Developer”},
//     use object destructuring to extract the ‘name’ & ‘age’ properties and console.log it out

const person = { name: "Alice", age: 25, job: "Developer" };

const { name, age } = person;

console.log(name, age);
