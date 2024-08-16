// Given an array of user objects which include property name and age, 
// use the `map` method to create a new array that contains just the names of the users


// ========== 3 =============

const arrUsers = [
  { name: "Sothea Mab", age: 18 },
  { name: "Reaksmey Roem", age: 21 },
  { name: "Yem Somoun", age: 20 },
];

function handleName(getUser) {
  let filterNameUser = getUser.map((user) => user.name);
  return filterNameUser;
}
const afterFilter = handleName(arrUsers);
console.log(afterFilter);
