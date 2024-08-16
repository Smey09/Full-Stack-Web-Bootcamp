const fs = require("fs");

function writeFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, "utf-8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

writeFile("./input.txt", "Hello, world!")
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.error(err);
  });
