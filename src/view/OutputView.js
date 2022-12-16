/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const constants = require("../Constants");

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(path, success) {
    MissionUtils.Console.print(this.mapSideToString(path, constants.MOVING[1], success));
    MissionUtils.Console.print(this.mapSideToString(path, constants.MOVING[0], success));
  },
  mapSideToString(path, side, success) {
    const map = Array.from({length: path.length}, () => ' ');

    for(let i = 0; i < path.length; i++) {
      const mark = !success && i === path.length-1 ? 'X' : 'O';

      if(path[i] === side) {
        map[i] = mark;
      }
    }
    return '[ ' + map.join(' | ') + ' ]';
  },


  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(path, success, tryNum) {
    MissionUtils.Console.print('최종 게임 결과');

    this.printMap(path, success);
    MissionUtils.Console.print(`게임 성공 여부: ${success?'성공':'실패'}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${tryNum}`);
  },
};

module.exports = OutputView;
