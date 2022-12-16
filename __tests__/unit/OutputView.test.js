const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = require("../../src/view/OutputView");

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

const getOutput = (logSpy) => {
    return [...logSpy.mock.calls].join("");
};

const expectLogContains = (received, logs) => {
    logs.forEach((log) => {
      expect(received).toEqual(expect.stringContaining(log));
    });
};

const expectBridgeOrder = (received, upside, downside) => {
    const upsideIndex = received.indexOf(upside);
    const downsideIndex = received.indexOf(downside);
  
    expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe("OutputView unit test", () => {
    test("다리 건너기 결과 출력 (진행중 또는 성공)", () => {
        const logSpy = getLogSpy();
        OutputView.printMap(['U', 'D', 'U'], true);
        
        const log = getOutput(logSpy);
        console.log(log);
        expectLogContains(log, [
            "[ O |   | O ]",
            "[   | O |   ]"
        ]);
        expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
    });
    test("다리 건너기 결과 출력 (실패)", () => {
        const logSpy = getLogSpy();
        OutputView.printMap(['U', 'D', 'U'], false);

        const log = getOutput(logSpy);
        console.log(log);
        expectLogContains(log, [
            "[ O |   | X ]",
            "[   | O |   ]"
        ]);
        expectBridgeOrder(log, "[ O |   | X ]", "[   | O |   ]");
    });
    test("게임 결과 출력 (성공)", () => {
        const logSpy = getLogSpy();
        OutputView.printResult(['U', 'D', 'U'], true, 1);

        const log = getOutput(logSpy);
        expectLogContains(log, [
            "최종 게임 결과",
            "[ O |   | O ]",
            "[   | O |   ]",
            "게임 성공 여부: 성공",
            "총 시도한 횟수: 1",
        ]);
        expectBridgeOrder(log, "[ O |   | X ]", "[   | O |   ]");
    });
    test("게임 결과 출력 (실패)", () => {
        const logSpy = getLogSpy();
        OutputView.printResult(['U', 'D', 'U'], false, 5);

        const log = getOutput(logSpy);
        expectLogContains(log, [
            "최종 게임 결과",
            "[ O |   | X ]",
            "[   | O |   ]",
            "게임 성공 여부: 실패",
            "총 시도한 횟수: 5",
        ]);
        expectBridgeOrder(log, "[ O |   | X ]", "[   | O |   ]");
    });
});

