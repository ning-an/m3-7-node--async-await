const request = require('request-promise');

const getGeekJoke = async () => {
  // ha hahahh
  let option = {
    uri: 'https://geek-jokes.sameerkumar.website/api?format=json',
    headers: {
      'Accept': 'application/json'
  },
    json: true,
  }
  const geekJoke = await request(option);
  return geekJoke.joke
};

getGeekJoke().then( res => console.log(res) )

module.exports = { getGeekJoke };