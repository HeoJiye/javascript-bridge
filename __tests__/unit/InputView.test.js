const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../../src/InputView");

const mockQuestions = (answers) => {
    MissionUtils.Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
      return acc.mockImplementationOnce((question, callback) => {
        callback(input);
      });
    }, MissionUtils.Console.readLine);
};

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

describe("InputView unit test", () => {
  test("다리 길이 입력: 예외) 입력 값이 숫자가 아닌 경우", () => {
      mockQuestions(["d"]);

      const logSpy = getLogSpy();
      InputView.readBridgeSize();

      expectLogContains(getOutput(logSpy), ["[ERROR]"]);
  });
  test("다리 길이 입력: 예외) 입력 값이 범위에서 벗어난 경우 (1)", () => {
    mockQuestions([1]);

    const logSpy = getLogSpy();
    InputView.readBridgeSize();

    expectLogContains(getOutput(logSpy), ["[ERROR]"]);
  });
  test("다리 길이 입력: 예외) 입력 값이 범위에서 벗어난 경우 (2)", () => {
    mockQuestions([30]);

    const logSpy = getLogSpy();
    InputView.readBridgeSize();

    expectLogContains(getOutput(logSpy), ["[ERROR]"]);
  });
});