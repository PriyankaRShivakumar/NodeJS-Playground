// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([1, 4, 7]);
//     //reject("Things went wrong!");
//   }, 2000);
// });
// //then is used to register a success function or when resolve is called. catch is used to register a unsuccessful function or when reject is called
// doPromise
//   .then(result => {
//     console.log("Success!", result);
//   })
//   .catch(error => {
//     console.log("Error!", error);
//   });

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// add(1, 2)
//   .then(sum => {
//     console.log(sum);
//     add(sum, 3)
//       .then(sum2 => {
//         console.log(sum2);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   })
//   .catch(e => {
//     console.log(e);
//   });

add(1, 2)
  .then(sum => {
    console.log(sum);
    return add(sum, 3); //returns a promise which will be accessed by next then function
  })
  .then(sum2 => {
    console.log(sum2);
  })
  .catch(e => {
    console.log(e);
  });
