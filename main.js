//for testing use loop with timer to seee if your able to get quotes and send via text 

const quoteAPIModule = require('./quoteAPI.js')
const { getRandomQuote } = require('./quoteAPI.js')
const { message } = require('./sendSMS.js')

console.log(quoteAPIModule.quoteAPI('test'))
//console.log(getRandomQuote());
return message();
//console.log(message);