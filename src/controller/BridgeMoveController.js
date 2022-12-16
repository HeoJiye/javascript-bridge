const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

const BridgeGameFailController = require("./BridgeGameFailController");

class BridgeMoveController {
    #bridgeGame;

    constructor(bridgeGame) {
        this.#bridgeGame = bridgeGame;
    }

    exetute() {
        InputView.readMoving(input => {
            this.bridgeMove(input);
        });
    }

    bridgeMove(moving) {
        try {
            if (this.#bridgeGame.move(moving)) {
                OutputView.printMap(this.#bridgeGame.getPath(), true);
                this.exetute();
            } else {
                OutputView.printResult(this.#bridgeGame.getPath(), true, this.#bridgeGame.getTryNum());
            }
        } catch(e) {
            new BridgeGameFailController(this.#bridgeGame).extute();
        }
    }
}

module.exports = BridgeMoveController;
