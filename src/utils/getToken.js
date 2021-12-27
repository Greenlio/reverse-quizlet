const got = require('got')

async function getToken() {
    const response = await got("https://quizlet.com/live", {
        "headers": {
            'User-Agent': 'Quizlet.JS'
        },
    }).text();

    return response.split(`"multiplayerToken":"`)[1].split(`",`)[0]
};

module.exports = getToken