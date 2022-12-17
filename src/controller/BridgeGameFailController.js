const InputView = require("../view/InputView");
const constants = require("../Constants");

const BridgeMoveController = require("./BridgeMoveController");
const BridgeGameEndController = require("./BridgeGameEndController");

class BridgeGameFailController {
    #bridgeGame;

    constructor(bridgeGame) {
        this.#bridgeGame = bridgeGame;
    }

    exetute() {
        InputView.readGameCommand((input) => {
            const controller = this.inputCallback(input);
            controller.exetute;
        });
    }
    inputCallback(command) {
        if(command === constants.COMMAND.QUIT) {
            return new BridgeGameEndController(this.#bridgeGame, true);
        }
        if(command === constants.COMMAND.RESTART) {
            this.#bridgeGame.retry();
            return BridgeMoveController(bridgeGame);
        }
    }
}

module.exports = BridgeGameFailController;
