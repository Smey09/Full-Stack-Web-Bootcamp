// 3. Given the object user { id: 1, name: “Sok”, address: {street: “123 Main St”, city: “PP”}},
//     use destructuring to extract the street and city

const user = {
  id: 1,
  name: "Sok",
  address: {
    street: "123 main st",
    city: "PP",
  },
};

const {
  address: { street, city },
} = user;

console.log(`${street},${city}`);
