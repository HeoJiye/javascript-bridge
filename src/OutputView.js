/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(path, success) {
    const map = this.makeMap(path, success);

    MissionUtils.Console.print(this.mapToString(map['U']));
    MissionUtils.Console.print(this.mapToString(map['D']));
  },
  initMap(length) {
    const map = {
      'U': Array.from({length}, () => ' '), 
      'D': Array.from({length}, () => ' ')
    };
    return map;
  },
  makeMap(path, success) {
    const map = this.initMap(path.length);

    for(let i = 0; i < path.length; i++) {
      if(!success && i === path.length-1) {
        map[path[i]][i] = 'X';
        break;
      }
      map[path[i]][i] = 'O';
    }
    return map;
  },
  mapToString(map_side) {
    return '[ ' + map_side.join(' | ') + ' ]';
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
