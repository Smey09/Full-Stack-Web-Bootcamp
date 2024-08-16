// 7. Write a function that takes an object and a list of property names to filter out.
//     Return a new object that contains all the properties of the original object except those specified in the list
//     Example: object = {a:1, b:2, c:3, d:4}
//                     filterProps(object, “b”, “d”) // Should Return:  {a:1, c:3}

function filterProps(obj, ...propsToFilter) {
  // Create a shallow copy of the original object
  const filteredObj = { ...obj };

  // Iterate over each property to filter out
  propsToFilter.forEach((prop) => {
    // Delete the property from the copied object
    delete filteredObj[prop];
  });

  return filteredObj;
}

// Example usage:
const object = { a: 1, b: 2, c: 3, d: 4 };
console.log(filterProps(object, "b", "d")); // Output: {a: 1, c: 3}
