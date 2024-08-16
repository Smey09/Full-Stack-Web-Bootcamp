const readFile = require("../read-write/1.exersice03");
const writeFile = require("../read-write/2.exersice04");

// const fs = require("fs/promises"); // Use fs.promises for Promise-based file operations

// Remove the local function definitions for readFile and writeFile

// Example usage
writeFile("./input.txt", "Hello, world!")
  .then(() => {
    console.log("File saved successfully!");
    return readFile("./input.txt"); // Read the file after writing
  })
  .then((data1) => {
    console.log("File contents:", data1);
    return readFile("./input1.txt");
  })
  .then((data2) =>{
    
  })
  .catch((err) => {
    console.error("Error:", err);
  });
