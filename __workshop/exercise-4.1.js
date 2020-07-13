const request = require('request-promise');

// getDadJoke
const getDadJoke = request({
    uri: "https://icanhazdadjoke.com/",
    headers: {
        'Accept': 'application/json'
    },
    json: true
})
// 4.1
const getJoke = () => {
    return getDadJoke
            .then(res => res.joke);
}

getJoke().then((data) => console.log(data));

module.exports = { getJoke };