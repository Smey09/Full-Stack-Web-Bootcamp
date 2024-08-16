// 5. Write a function that could take a parameter that is an array of objects representing products with `name`, `price` and `quantity` property and filter out products with a quantity of zero

const products = [
  { name: "Apple", price: 1.2, quantity: 10 },
  { name: "Banana", price: 0.8, quantity: 0 },
  { name: "Orange", price: 1.5, quantity: 5 },
  { name: "Grapes", price: 2.0, quantity: 0 },
];

function filterOutZeroQuantity(products) {
  return products.filter((product) => product.quantity > 0);
}

const filteredProducts = filterOutZeroQuantity(products);
console.log(filteredProducts);
