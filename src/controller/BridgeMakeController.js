const InputView = require("../view/InputView");
const BridgeGame = require("../model/BridgeGame");
const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");

const BridgeMoveController = require("./BridgeMoveController");

class BridgeMakeController {
    exetute() {
        InputView.readBridgeSize((input) => {
            const controller = this.inputCallback(input);
            controller.exetute();
        });
    }
    inputCallback(bridgeSize) {
        const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
        const bridgeGame = new BridgeGame(bridge);

        return new BridgeMoveController(bridgeGame);
    }
}

module.exports = BridgeMakeController;
