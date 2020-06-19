exports.sendSMS = (str) => str.toUpperCase()
exports.message = message

const fetch = require("node-fetch");
const { getRandomQuote } = require('./quoteAPI.js')

var twilio = require('twilio');
//var quote = getRandomQuote();
//var myJSON = JSON.stringify(getRandomQuote());
//let promise = getRandomQuote();
//console.log(promise);
//promise.then(getRandomQuote());
async function myJSON() {
    data = await getRandomQuote();
    getRandomQuote().then((data) => {
        console.log(data);
    })
}

myJSON()

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('ACc56594f4add37f5c40b4f8b3b30ed634', '39e8816d9975c8ce9cce116a4bea971d');

// Send the text message.
function message() {
    client.messages.create({
        to: '+14168337224',
        from: '+12057497305',
        body: myJSON
    });
}
console.log("this is random quote" + getRandomQuote());


