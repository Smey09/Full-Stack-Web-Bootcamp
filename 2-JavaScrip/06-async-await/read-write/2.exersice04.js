const fs = require("fs");

function writeFile(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, err => {
      if (err) {
        reject(err);
      } else {
        resolve('Writing is successful');
      }
    });
  });
}

module.exports = writeFile;
