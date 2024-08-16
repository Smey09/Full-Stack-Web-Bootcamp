// Use Node.js's fs module to write a file asynchronously `fs.writeFile`.
// Write a function that takes a file path and a callback.
// Use the callback to write the contents of the file to the file path.

const fs = require("fs");

const writetoText = "test write and write file in javascrip";

fs.writeFile("input.txt", writetoText, (err) => {
  if (err) {
    console.error;
    return;
  }
  console.log(writetoText);
});

module.export = writeFile;
