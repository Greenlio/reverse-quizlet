const mainQuestions = [
    {
        type: 'number',
        name: 'gamePin',
        message: 'Enter Game Pin: ',
        validate: gamePin => gamePin == "" ? `You did not enter a game pin!` : true
    },
    {
        type: 'text',
        name: 'username',
        message: 'Enter Bot Name: ',
        validate: username => username == "" ? `You did not enter a bot name!` : true
    },
];

const floodQuestions = [
    {
        type: 'number',
        name: 'gamePin',
        message: 'Enter Game Pin: ',
        validate: gamePin => gamePin == "" ? `You did not enter a game pin!` : true
    },
    {
        type: 'number',
        name: 'floodAmount',
        message: 'How many bots do you want to send?: ',
        validate: floodAmount => floodAmount == "" ? `You did not specify how many bots you want to send!` : true
    },
];

module.exports = { mainQuestions, floodQuestions }