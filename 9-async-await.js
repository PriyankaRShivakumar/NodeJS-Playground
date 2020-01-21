const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers must be non-negative");
      }
      resolve(a + b);
    }, 2000);
  });
};

//await eliminates multiple then()
const doWork = async () => {
  const sum = await add(1, -99); //wait for 2 seconds
  const sum2 = await add(sum, 50); //wait for 4 seconds
  const sum3 = await add(sum2, 3); //wait for 6 seconds
  return sum3;
};

doWork()
  .then(result => {
    console.log("result", result);
  })
  .catch(e => {
    console.log("Error", e);
  });
