const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};

fetchData()
  .then((result) => {
    console.log(result); // 1
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 2
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 4
  })
  .catch((error) => console.error("error: ", error));
