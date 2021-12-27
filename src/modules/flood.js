const io = require('socket.io-client');
const chalk = require('chalk');
const crypto = require('crypto');

const LiveEmitters = require('../assets/LiveEmitters');

const sleep = require('../utils/sleep');

async function flood(upStreamNumber, gameVersion, gamePin, token) {
    const botName = crypto.randomBytes(10).toString('hex');

    const socket = io(LiveEmitters.baseUrl, {
        path: `/multiplayer/${upStreamNumber}/${gameVersion}/${gamePin}/games/socket`,
        query: {
            gameId: gamePin,
            token: token
        },
        reconnectionAttempts: 5,
        reconnectionDelay: 250,
        reconnectionDelayMax: 2000,
        timeout: 5000,
        forceNew: true,
    });

    socket.on(LiveEmitters.connect, async () => {
        if (socket.connected == true) {
            console.log('Joined Game '.green + 'with name ' + chalk.blue(botName));
        };

        socket.emit(LiveEmitters.playerJoin, {
            image: null,
            username: botName,
        });

        socket.disconnect();
    });
};

module.exports = flood