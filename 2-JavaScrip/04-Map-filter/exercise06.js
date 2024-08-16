// You have an array of objects where each object has properties `name` and `category`.
// Use the `reduce` method to group these objects by category.
// Input: [ {name: “Bread”, category: “Grocery”}, {name: “Butter”, category: “Grocery”}, {name: “Shampoo”, category: “Personal Care”}]
// Output: { “Grocery”: [“Bread”, “Butter”], “Personal Care”: [“Shampoo”]}

// ============ 6 ================
const items = [
  { name: "banan", category: "fruit" },
  { name: "apple", category: "fruit" },
  { name: "orange", category: "fruit" },
  { name: "sting", category: "drink" },
  { name: "coffee", category: "drink" },
];

const groupedByCategory = items.reduce(function (acc, item) {
  // Check if the category already exists in the accumulator object
  if (!acc[item.category]) {
    // If it doesn't exist, create an array for that category
    acc[item.category] = [];
  }
  // Push the item's name into the category array
  acc[item.category].push(item.name);
  return acc;
}, {});

console.log(groupedByCategory);
