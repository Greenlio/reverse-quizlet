const axios = require('axios');
const io = require('socket.io-client');
const colors = require('colors');

module.exports.run = async (upStreamNumber, gameVersion, gamePin, token, botName) => {
    const socket = io('https://quizlet.com/', {
        path: `/multiplayer/${upStreamNumber}/${gameVersion}/${gamePin}/games/socket`,
        query: {
            gameId: gamePin,
            token: token
        },
        transports: ['polling']
    });

    socket.on('connect', () => {
        if (socket.connected == true) {
            console.log('Joined Game!'.green);
        };

        socket.emit('player-join', {
            image: null,
            username: botName,
        });
    });
};