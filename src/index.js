const prompts = require('prompts');

const main = require('./main');

const questions = require('./assets/prompts');
const calculations = require('./assets/calculations');

const getToken = require('./utils/getToken');
const getUpStreamNumber = require('./utils/getUpStreamNumber');
const getGameVersion = require('./utils/getGameVersion');

(async () => {
    const response = await prompts(questions);

    const gamePin = response.gamePin
    const upstreamNumber = await getUpStreamNumber(gamePin)
    const gameVersion = calculations.calc(await getGameVersion(gamePin))
    const token = await getToken();
    const botName = response.username;

    main.run(upstreamNumber, gameVersion, gamePin, token, botName);
    
})();