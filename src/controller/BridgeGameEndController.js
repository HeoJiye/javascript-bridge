const OutputView = require("../view/OutputView");

class BridgeGameEndController {
    #bridgeGame;
    #success

    constructor(bridgeGame) {
        this.#bridgeGame = bridgeGame;
    }

    exetute() {
        OutputView.printResult(this.#bridgeGame.getPath(), this.#bridgeGame.isSuccess(), this.#bridgeGame.getTryNum());
    }
}

module.exports = BridgeGameEndController;
