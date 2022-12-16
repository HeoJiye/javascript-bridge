const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

const BridgeMoveController = require("./BridgeMoveController");

class BridgeGameFailController {
    #bridgeGame;

    constructor(bridgeGame) {
        this.#bridgeGame = bridgeGame;
    }

    exetute() {
        InputView.readGameCommand((input) => {
            this.inputCallback(input);
        });
    }
    inputCallback(command) {
        if(command === InputView.INPUT_QUIT) {
            OutputView.printResult(this.#bridgeGame.getPath(), false, this.#bridgeGame.getTryNum());
            return;
        }
        if(command === InputView.INPUT_RESTART) {
            this.#bridgeGame.retry();
            new BridgeMoveController(bridgeGame).exetute();
        }
    }
}

module.exports = BridgeGameFailController;
