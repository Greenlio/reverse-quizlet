const got = require('got')

async function getInfo() {
    const response = await got("https://quizlet.com/live", {
        "headers": {
            'User-Agent': 'Quizlet.JS'
        },
    }).text();

    return {
        token: response.split(`"multiplayerToken":"`)[1].split(`",`)[0],
        playerId: response.split('uid')[1].split(`"`)[2],
        checkPointToken: response.split(`"checkpointToken":"`)[1].split(`",`)[0],
        uid: response.split(`"uid":"`)[1].split(`",`)[0]
    }
};

module.exports = getInfo