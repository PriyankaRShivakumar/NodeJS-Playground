//Object Shorthand Syntax
// const name = "Priyanka";
// const userage = 23;
// const user = {
//   name, // Here both are same
//   age: userage,
//   location: "Bangalore"
// };
// console.log(user);

// //Object Destructuring

const product = {
  label: "A Red Notebook",
  price: 3,
  stock: 201,
  salePrice: undefined
};
// //Normal accesss
// // const label = product.label;
// // const stock = product.stock;
// // Destructuring syntax
// const { label: productLabel, stock, rating = 5 } = product; //Here label and stock variables will be created with values product.label and product.stock
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("Order", product);
