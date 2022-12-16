const BridgeMaker = require("../../src/BridgeMaker");

describe("BridgeMaker unit test", () => {
    test("입력된 길이의 다리 생성", () => {
        const randomNumbers = ["1", "0", "0"];
        const mockGenerator = randomNumbers.reduce((acc, number) => {
            return acc.mockReturnValueOnce(number);
        }, jest.fn());

        const bridge = BridgeMaker.makeBridge(3, mockGenerator);
        expect(bridge).toEqual(["U", "D", "D"]);
    });
});