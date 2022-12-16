const BridgeMakeController = require("./controller/BridgeMakeController");

class App {
  play() {
    console.log('다리 건너기 게임을 시작합니다.');

    const controller = new BridgeMakeController();
    controller.exetute();
  }
}

module.exports = App;