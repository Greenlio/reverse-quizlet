const mainQuestions = [
    {
        type: 'number',
        name: 'gamePin',
        message: 'Enter Game Pin: ',
    },
    {
        type: 'text',
        name: 'username',
        message: 'Enter Bot Name: ',
    },
];

const floodQuestions = [
    {
        type: 'number',
        name: 'gamePin',
        message: 'Enter Game Pin: ',
    },
    {
        type: 'number',
        name: 'floodAmount',
        message: 'How many bots do you want to send?: ',
    },
];

module.exports = { mainQuestions, floodQuestions }