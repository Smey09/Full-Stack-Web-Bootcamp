const readFile = require("./read-write-File/exersice03");
const writeFile = require("./read-write-File/exersice04");

async function handleExcuteFile() {
  try {
    const readInput = await readFile("./input.txt");
    console.log(`Read file content from input.txt:`, readInput);

    const output1 = readInput + "\nFirst modification!";
    await writeFile("./output1.txt", output1);
    console.log("Writing to output1.txt is successful");

    //`Read file contet from output1.txt`,
    const contentOutput1 = await readFile("./output1.txt");
    console.log(contentOutput1);

    const output2 = output1 + "\nSecond modification!";
    await writeFile("./output2.txt", output2);
    console.log("Writing to output2.txt is successful");

    const contentOutput2 = await readFile("./output2.txt");
    console.log(`Read file content from output2.txt`, contentOutput2);
  } catch (error) {
    console.error(error);
  }
}

handleExcuteFile();
