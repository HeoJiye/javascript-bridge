const BridgeGame = require("../../src/BridgeGame");

describe("BridgeGame unit test", () => {
    test("다리 건너기", () => {
        const bridgeGame = new BridgeGame(['U', 'D', 'U']);
        
        expect(bridgeGame.move('U')).toEqual(true);
    });
    test("다리 건너기: 예외) 건널 수 없는 경우 (1)", () => {
        const bridgeGame = new BridgeGame(['U', 'D', 'U']);
        
        expect(() => bridgeGame.move('D')).toThrow();
    });
    test("다리 건너기: 예외) 건널 수 없는 경우 (1)", () => {
        const bridgeGame = new BridgeGame(['U', 'D', 'U']);

        bridgeGame.move('U');
        expect(() => bridgeGame.move('U')).toThrow();
    });
    test("다리 건너기: 게임 성공", () => {
        const bridgeGame = new BridgeGame(['U', 'D', 'U']);
        
        bridgeGame.move('U');
        bridgeGame.move('D');
        expect(bridgeGame.move('U')).toEqual(false);
    });
    test("게임 재시작", () => {
        const bridgeGame = new BridgeGame(['U', 'D', 'U']);
        
        bridgeGame.move('U');
        expect(() => bridgeGame.move('U')).toThrow();

        bridgeGame.retry();

        bridgeGame.move('U');
        bridgeGame.move('D');
        expect(bridgeGame.move('U')).toEqual(false);
    });
});