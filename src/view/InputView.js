/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  MINIMUM_BRIDGE_SIZE: 3,
  MAXIMUM_BRIDGE_SIZE: 20,
  
  INPUT_UP_MOVING: 'U',
  INPUT_DOWN_MOVING: 'D',

  INPUT_RESTART: 'R',
  INPUT_QUIT: 'Q',
  
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (answer) => {
      try {
        this.invaildateBridgeSize(answer); 
      } catch(e) {
        MissionUtils.Console.print(e);
        this.readBridgeSize(callback);
        return;
      }
      callback(answer);
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
  readMoving() {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (answer) => {
      try {
        this.isExpectValue(answer, [this.INPUT_UP_MOVING, this.INPUT_DOWN_MOVING]);
      } catch (e) {
        MissionUtils.Console.print(e);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (answer) => {
      try {
        this.isExpectValue(answer, [this.INPUT_RESTART, this.INPUT_QUIT]);
      } catch (e) {
        MissionUtils.Console.print(e);
      }
    });
  },

  isExpectValue(value, expectedValues) {
    if(expectedValues.indexOf(value) === -1) {
      throw '[ERROR] 입력 값이 기댓값과 다릅니다.';
    }
  } 
};

module.exports = InputView;
