// Create a function that could take an argument
// which is an array of objects. Each object should
// contain property name and age.
// The function should return a new list which only contains
// the user who have higher than 18 years old


//=======1 ============
function handleFilterArr(getUser) {
  let arrfilter = getUser.filter((user) => user.age > 18);
  return arrfilter;
}

// arr declearation
const arrUser = [
  {
    name: "Sothea Mab",
    age: 18,
  },
  {
    name: "Reaksmey Roem",
    age: 19,
  },
  {
    name: "Sothea Len",
    age: 20,
  },
];

const filterArr = handleFilterArr(arrUser);
console.log(`New arr : `, filterArr);
