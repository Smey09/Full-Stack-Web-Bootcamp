const points = ["apple", "banan", "orange", "chery"];

const [firstPoint, , ...otherPoints] = points;
// the spread operator (...)

console.log(firstPoint);
console.log(otherPoints);
// Output : apple
// [ 'orange', 'chery' ]
