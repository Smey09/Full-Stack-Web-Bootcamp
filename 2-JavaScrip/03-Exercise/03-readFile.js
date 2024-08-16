// Use Node.js's fs module to read a file asynchronously:`fs.readFile`.
// Write a function that takes a file path and a callback.
// Use the callback to print the contents of the file to the console.

const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
