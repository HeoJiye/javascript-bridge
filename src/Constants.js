const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

module.exports = Object.freeze({
    BRIDGE_SIZE: {
        MINIMUM: 3,
        MAXIMUM: 20,
    },
    MOVING: {
        0: 'D',
        1: 'U',
    },
    COMMAND: {
        RESTART: 'R',
        QUIT: 'Q',
    },

});