const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday"
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();

// const data = JSON.parse(dataJSON);
// console.log(data.title);

const JSONBuffer = fs.readFileSync("1-json.json");
const dataJSON = JSONBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Priyanka";
data.age = 23;

const JSONstr = JSON.stringify(data);
fs.writeFileSync("1-json.json", JSONstr);
