module.exports = {
    calc: (gameVersion) => {
        return 45000 + (gameVersion % 1000);
    },
};