const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const BridgeGameEndController = require("./BridgeGameEndController");

const BridgeGameFailController = require("./BridgeGameFailController");

class BridgeMoveController {
    #bridgeGame;

    constructor(bridgeGame) {
        this.#bridgeGame = bridgeGame;
    }

    exetute() {
        InputView.readMoving(input => {
            const controller = this.inputCallback(input);
            controller.exetute();
        });
    }

    inputCallback(moving) {
        try {
            if (this.#bridgeGame.move(moving)) {
                OutputView.printMap(this.#bridgeGame.getPath(), this.#bridgeGame.isSuccess());
                return this;
            }
            return new BridgeGameEndController(this.#bridgeGame);
        } catch(e) {
            return new BridgeGameFailController(this.#bridgeGame);
        }
    }
}

module.exports = BridgeMoveController;
