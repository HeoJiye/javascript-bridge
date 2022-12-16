<p align="center">
    <img src="https://woowacourse.github.io/img/logo_full_white.339e6416.png">
</p>

# 미션 - 다리 건너기
작성자: [FE] 허지예(HeoJiye)

<br>

## 🌉 다리 건너기 프로그램 개요
### 📦 Model
- BridgeGame: 다리 건너기 게임을 관리하는 클래스
### 🎨 View
- InputView: 사용자로부터 입력을 받는 역할을 한다.
- OutputView: 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
### 🎮 Controller
- BridgeMakeController: 사용자의 입력을 받아 다리를 생성하고, BridgeMoveController로 제어를 넘긴다.
- BridgeMoveController: 게임 종료까지 사용자의 입력을 받아 다리를 건넌다.
- BridgeGameFailController: 사용자의 입력을 받아 게임을 종료하거나 BridgeMoveController로 제어를 넘겨 재시작한다.

<br>

### ETC
- App
- BridgeMaker
- BridgeRamdomNumberGenerator

<br>

## 📋 기능 목록 나열

###  💻 입력
- [x] 다리 길이 입력
    - [x] 예외) 입력 값이 숫자가 아닌 경우
    - [x] 예외) 입력 값이 범위에서 벗어난 경우
- [x] 플레이어가 이동할 칸 입력
    - [x] 예외) 입력 값이 U 또는 D가 아닌 경우
- [x] 게임 재시작/종료 여부 입력
    - [x] 예외) 입력 값이 R 또는 Q가 아닌 경우

### 🚀 처리
- [x] 입력된 길이의 다리 생성
- [x] 다리 건너기
    - [x] 예외) 건널 수 없는 경우
- [x] 게임 재시작

### 🔊 출력
- [x] 다리 건너기 결과 출력
- [x] 게임 결과 출력
    - 다리 건너기 결과 출력
    - [x] 게임 성공 여부 출력
    - [x] 총 시도한 횟수 출력

### 🔗 연결
- [x] 다리 길이 입력 -> 다리 생성
- [x] 플레이어가 이동할 칸 입력 -> 다리 건너기 처리 -> 다리 건너기 결과 출력(반복)
- [x] 게임 성공 -> 결과 출력
- [x] 게임 실패 -> 재시작 여부 입력 -> 재시작 / 결과 출력

<br>

## ✅ checkList
- 입력 값 예외 발생 시, 오류 출력 후 다시 입력

