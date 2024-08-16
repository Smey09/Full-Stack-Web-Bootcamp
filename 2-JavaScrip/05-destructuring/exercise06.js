// 6. Given the array ‘points’, extract the first point into a variable and store remaining points in an array
//     Example: points = [{x: 1, y:2}, {x:2, y:3}, {x:3, y:4}]
//                     console.log(firstPoint) // {x: 1, y: 2}
//                     console.log(otherPoints) // [{x:2, y:3}, {x:3, y:4}
//                     ]

const points = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 4 },
];

// Destructure the first element and store remaining elements in another array
const [firstPoint, ...otherPoints] = points;

console.log(firstPoint); // Output: {x: 1, y: 2}
console.log(otherPoints); // Output: [{x: 2, y: 3}, {x: 3, y: 4}]
