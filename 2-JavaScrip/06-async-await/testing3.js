const readFile = require("./read-write/1.exersice03");
const writeFile = require("./read-write/2.exersice04");

readFile("./input.txt")
  .then((data) => {
    console.log(data);
    return writeFile("./input1.txt", data);
  })
  .then((successMessage) => {
    console.log(successMessage);
    return readFile("./input1.txt");
  })
  .then((data) => {
    console.log(data);
    return writeFile("./input2.txt", data);
  })
  .then((successMessage) => {
    console.log(successMessage);
    return readFile("./input2.txt");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error : ", error);
  });
