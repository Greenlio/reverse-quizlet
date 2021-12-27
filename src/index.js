const prompts = require('prompts');

const main = require('./main');

const choices = require('./assets/choices');
const questions = require('./assets/prompts');
const calculations = require('./assets/calculations');

const getToken = require('./utils/getToken');
const getUpStreamNumber = require('./utils/getUpStreamNumber');
const getGameVersion = require('./utils/getGameVersion');

(async () => {
    const response = await prompts(choices);

    if (response.func.length == 0) {
        return console.log('No choices selected!'.red)
    } else if (response.func.length > 1) {
        return console.log('You can only pick one function at a time'.red);
    } else if (response.func[0] == 'main') {
        const response = await prompts(questions);
        
        const gamePin = response.gamePin
        const upstreamNumber = await getUpStreamNumber(gamePin);
        const gameVersion = calculations.calc(await getGameVersion(gamePin));
        const token = await getToken();
        const botName = response.username;

        main.run(upstreamNumber, gameVersion, gamePin, token, botName);
    }
})();