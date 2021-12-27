const axios = require('axios');

async function getUpStreamNumber(gamePin) {
    const filters = {
        gameCode: gamePin,
        isInProgress: true,
        isDeleted: false,
    };

    const response = await axios.get(`https://quizlet.com/webapi/3.2/game-instances?filters=${encodeURIComponent(JSON.stringify(filters))}&perPage=500`);

    if (response.data.responses[0].models.gameInstance[0] == undefined) return console.log('Game not found!'.red);

    return response.data.responses[0].models.gameInstance[0].upstreamNumber
}

module.exports = getUpStreamNumber