function updownGame() {
    const computerNum = Math.floor(Math.random() * 50) + 1;
    let guessCount = 0;

    while (true) {
        const input = prompt("1부터 50사이의 숫자 중 컴퓨터가 생각한 숫자는 무엇일까요?");
        if (input == null || input == "") {
            alert("게임을 종료합니다.");
            return;
        }

        const guess = Number(input);
        if (!Number.isInteger(guess) || guess < 1 || guess > 50) {
            alert("1~50 정수로 입력해 주세요.");
            continue;
        }

        guessCount++;

        if (guess > computerNum) {
            alert("Down!");
        } else if (guess < computerNum) {
            alert("Up!");
        } else {
            alert(`축하합니다! ${guessCount}번 만에 맞추셨습니다.`);
        }
    }
}