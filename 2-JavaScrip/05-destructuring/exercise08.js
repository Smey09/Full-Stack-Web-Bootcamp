const number = [1, 2, 3, 4, 1, 2, 5, 7, 8];

function counter(...arrays) {
  const newNumber = arrays.reduce((acc, current) => {
    if (acc[current]) {
      acc[current] += 1;
    } else {
      acc[current] = 1;
    }
    return acc;
  }, {});
  return newNumber;
}

console.log(counter(1, 2, 3, 4, 1, 2, 5, 7, 8));
