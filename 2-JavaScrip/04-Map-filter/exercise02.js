// Given an array of numbers which includes duplicates,
// use `filter` method to create a new array that contains only unique values
// ========= 2 ===========

function filterUniqueItem(getArrNumber) {
  let uniqueArrNumber = getArrNumber.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return uniqueArrNumber;
}

let arrNumber = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9];
const uniqueItem = filterUniqueItem(arrNumber);
console.log(uniqueItem);
