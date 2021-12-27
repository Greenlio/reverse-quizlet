const choices = [
    {
        type: 'multiselect',
        name: 'func',
        message: 'Pick a function to use',
        choices: [
            { title: 'Join Game', description: 'Joins a live game', value: 'main' },
            { title: 'Flood Game', description: 'Floods a live game', value: 'flood' },
        ],
    }
];

module.exports = choices