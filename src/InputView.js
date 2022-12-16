/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  MINIMUM_BRIDGE_SIZE: 3,
  MAXIMUM_BRIDGE_SIZE: 20,

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (answer) => {
      try {
        this.invaildateBridgeSize(answer); 
      } catch(e) {
        MissionUtils.Console.print(e);
      }
    });
  },
  invaildateBridgeSize(bridgeSize) {
    if(isNaN(bridgeSize)) {
      throw '[ERROR] 입력 값이 숫자가 아닙니다.';
    }
    if(bridgeSize < this.MINIMUM_BRIDGE_SIZE || bridgeSize > this.MAXIMUM_BRIDGE_SIZE) {
      throw '[ERROR] 입력 값이 숫자가 아닙니다.';
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
