const prompts = require('prompts');

const main = require('./main');

const choices = require('./assets/choices');
const { mainQuestions, floodQuestions } = require('./assets/prompts');
const calculations = require('./assets/calculations');

const flood = require('./modules/flood');

const getInfo = require('./utils/getInfo');
const getUpStreamNumber = require('./utils/getUpStreamNumber');
const getGameVersion = require('./utils/getGameVersion');

(async () => {
    const response = await prompts(choices);

    if (response.func.length == 0) {
        return console.log('No choices selected!'.red)
    } else if (response.func.length > 1) {
        return console.log('You can only pick one function at a time'.red);
    } else if (response.func[0] == 'main') {
        const response = await prompts(mainQuestions);

        const gamePin = response.gamePin
        const upstreamNumber = await getUpStreamNumber(gamePin);
        const gameVersion = calculations.calc(await getGameVersion(gamePin));
        const token = await getInfo();


        const botName = response.username;

        main.run(upstreamNumber, gameVersion, gamePin, token.token, botName, token.playerId);
    } else if (response.func[0] == 'flood') {
        const response = await prompts(floodQuestions);

        for (let i = 0; i < response.floodAmount; i++) {
            const gamePin = response.gamePin
            const upstreamNumber = await getUpStreamNumber(gamePin);
            const gameVersion = calculations.calc(await getGameVersion(gamePin));
            const token = await getInfo();

            flood(upstreamNumber, gameVersion, gamePin, token.token, token.playerId);
        };
    };
})();