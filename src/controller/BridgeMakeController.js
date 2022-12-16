const InputView = require("../view/InputView");
const BridgeGame = require("../model/BridgeGame");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");

const BridgeMoveController = require("../BridgeMoveController");

class BridgeMakeController {
    exetute() {
        InputView.readBridgeSize(inputCallback);
    }
    inputCallback(input) {
        const bridge = BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate);
        const bridgeGame = new BridgeGame(bridge);

        const controller = new BridgeMoveController(bridgeGame);
        controller.exetute();
    }
}

module.exports = BridgeMakeController;
