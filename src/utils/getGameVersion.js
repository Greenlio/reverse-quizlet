const axios = require('axios');

async function getGameVersion(gamePin) {
    try {
        const filters = {
            gameCode: gamePin,
            isInProgress: true,
            isDeleted: false,
        };

        const response = await axios.get(`https://quizlet.com/webapi/3.2/game-instances?filters=${encodeURIComponent(JSON.stringify(filters))}&perPage=500`);

        return response.data.responses[0].models.gameInstance[0].gameVersion
    } catch (e) { };
};

module.exports = getGameVersion