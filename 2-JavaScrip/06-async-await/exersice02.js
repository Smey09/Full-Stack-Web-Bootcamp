const readFile = require("./read-write/1.exersice03");
const writeFile = require("./read-write/2.exersice04");

readFile("./input.txt")
  .then((data) => {
    console.log("Read File input.txt:", data);
    return writeFile("./output1.txt", data + "\nFirst modification");
  })
  .then((successMessage) => {
    console.log(successMessage);
    return readFile("./output1.txt");
  })
  .then((data) => {
    console.log(`Read File output1.txt: ${data}`);
    return writeFile("./output2.txt", data + "\nSecond modification");
  })
  .then((successMessage) => {
    console.log(successMessage);
    return readFile("./output2.txt");
  })
  .then((data) => {
    console.log("Read File output2.txt:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
