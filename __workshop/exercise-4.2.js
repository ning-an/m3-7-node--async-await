const request = require('request-promise');
const { get } = require('request-promise');

const getTronaldDumpQuote = async () => {
  // write write write
  const quote = await request({
    uri: 'https://api.tronalddump.io/random/quote',
    headers: {
      'Accept': 'application/json'
  },
    json: true
  })
  return quote.value;
};

getTronaldDumpQuote().then( res => console.log(res, 'exercise 4.2') );

module.exports = { getTronaldDumpQuote };