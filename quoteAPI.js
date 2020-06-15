/*make functions getQuote, getRandomQuote, send message*/
const fetch = require('node-fetch');

var express = require("express"),
  app = express();

const port = process.env.PORT || 8000;
//the app starts listening to the port
app.listen(port, () => {
  console.log("listening on port", port);
});

const randomQuote_url = 'http://localhost:8080/id/1';

async function getRandomQuote() {
    const response = await fetch(randomQuote_url);
    const data = await response.json();
    console.log(data);
}

//getRandomQuote();
export {getRandomQuote};