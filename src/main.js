const io = require('socket.io-client');
const colors = require('colors');
const chalk = require('chalk');

const LiveEmitters = require('./assets/LiveEmitters');

module.exports.run = async (upStreamNumber, gameVersion, gamePin, token, botName, playerId) => {
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

    socket.on(LiveEmitters.connect, () => {
        if (socket.connected == true) {
            console.log(chalk.bold.cyanBright('[SOCKET] Websocket connected!'));
            console.log('Joined Game '.green + 'with name ' + chalk.cyan(botName));
        };

        socket.emit(LiveEmitters.playerJoin, {
            image: null,
            username: botName,
        });
    });

    socket.on(LiveEmitters.currentGameState, (data) => {
        if (!data.players[playerId]) {
            console.log('[SOCKET] Kicked from game!'.red)
            console.log(chalk.cyanBright('[SOCKET] Closing websocket connection!'));
            socket.disconnect();
        };
    });
};