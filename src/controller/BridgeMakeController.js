const InputView = require("../view/InputView");
const BridgeGame = require("../model/BridgeGame");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");

const BridgeMoveController = require("./BridgeMoveController");

class BridgeMakeController {
    exetute() {
        InputView.readBridgeSize((input) => {
            this.bridgeMake(input);
        });
    }
    bridgeMake(bridgeSize) {
        const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
        const bridgeGame = new BridgeGame(bridge);

        new BridgeMoveController(bridgeGame).exetute();
    }
}

module.exports = BridgeMakeController;
