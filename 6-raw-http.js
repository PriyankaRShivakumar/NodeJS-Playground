const https = require("https");
const url =
  "https://api.darksky.net/forecast/9731a7e5a3beeb908e70547d2656edfc/37.8267,-122.4233";

//create a https request
const request = https.request(url, response => {
  let data = ""; //This is a variable as it changes over time
  //In this case http data is streamed in multiple parts.
  //This means that we have to listen for this individual chunks to come in. When all data has arrived and when the request is done.
  //response.on() helps us to register a handler.
  response.on("data", chunk => {
    data = data + chunk.toString(); // Chunk is a buffer so has to be converted to string
  });

  response.on("end", () => {
    //console.log(data); //This will give the entire data present in that api endpoint in string point.
    const body = JSON.parse(data);
    console.log(body); //This data is in JS format.
  });
});

//Error handling
request.on("error", error => {
  console.log("An Error", error);
});

request.end(); //To end the request
