const fs = require("fs");
// const readFile = require("./read-write/1.exersice03");

function readFile(filtPath) {
  return new Promise((resole, reject) => {
    fs.readFile(filtPath, "utf-8", (err, data) => {
      if (err) {
        reject("Not Found");
      } else {
        resole(data);
      }
    });
  });
}

readFile("./input.txt")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
