const asyncFunction = async () => {
  const result1 = await new Promise((resolve) =>
    setTimeout(() => resolve(1), 1000)
  );
  console.log(result1); // 1

  const result2 = result1 * 2;
  console.log(result2); // 2

  const result3 = result2 * 2;
  console.log(result3); // 4
};

asyncFunction();
