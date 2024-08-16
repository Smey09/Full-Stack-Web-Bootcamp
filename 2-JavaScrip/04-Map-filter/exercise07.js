const text = "George Raymond Richard Martin";

function readText(reader) {
  const arrayName = reader.split(" ");
  const mapName = arrayName.map((name) => name[0]);
  const result = mapName.reduce((acc, current) => acc + current);
  return result;
}

console.log(readText(text));