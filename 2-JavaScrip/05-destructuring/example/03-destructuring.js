const customer = {
  name: "Charlie",
  address: {
    street: "123 Main St",
    city: "Los Angeles",
  },
};
const {
  name,
  address: { street, city },
} = customer;

console.log(name); // Output: "Charlie"
console.log(`${street}, ${city}`);
console.log(address);
// Output: "123 Main St, Los Angeles"
