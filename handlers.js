// nothing here yet...
const { getJoke } = require('./__workshop/exercise-4.1');
const { getTronaldDumpQuote } = require('./__workshop/exercise-4.2');
const { getGeekJoke } = require('./__workshop/exercise-4.3');

const handleJoke = (type) => {
    switch (type) {
        case 'dad':
            return getJoke();
            break;
        case 'geek':
            return getGeekJoke();
            break;
        case 'tronald':
            return getTronaldDumpQuote();
            break;
        default:
            return 'Unrecognized type!'
    }
}

module.exports = { handleJoke };