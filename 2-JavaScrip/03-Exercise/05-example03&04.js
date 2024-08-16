// Use the example 3 & 4, write in the below scenario:
// --- 1. Read the context of `input.txt`
// --- 2. Append “First modification” to the content and write it to `output1.txt`
// --- 3. Read `output1.txt` and append “Second modification” to the file `output2.txt`
// --- 4. Finally read `output2.txt` and print to the console

const fs = require("fs");

// Step 1: Read the content of 'input.txt'
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input.txt:", err);
    return;
  }

  // Step 2: Append "First modification" and write to 'output1.txt'
  const firstModification = data + " First modification";
  fs.writeFile("output1.txt", firstModification, (err) => {
    if (err) {
      console.error("Error writing to output1.txt:", err);
      return;
    }

    // Step 3: Read 'output1.txt' and append "Second modification" to 'output2.txt'
    fs.readFile("output1.txt", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading output1.txt:", err);
        return;
      }

      const secondModification = data + " Second modification";
      fs.writeFile("output2.txt", secondModification, (err) => {
        if (err) {
          console.error("Error writing to output2.txt:", err);
          return;
        }

        // Step 4: Read 'output2.txt' and print to the console
        fs.readFile("output2.txt", "utf8", (err, finalData) => {
          if (err) {
            console.error("Error reading output2.txt:", err);
            return;
          }

          console.log("Final content of output2.txt:", finalData);
        });
      });
    });
  });
});
