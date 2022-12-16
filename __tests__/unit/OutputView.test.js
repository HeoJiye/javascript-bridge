const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = require("../../src/OutputView");

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
    
});

