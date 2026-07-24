function calculateScore() {
    var subjects = ["HTML", "CSS", "JavaScript"];
    var total = 0;

    for (let i = 0; i < subjects.length; i++) {
        const input = prompt(`${subjects[i]} 점수를 입력하세요`);
        if (input == null || input == "") {
            alert("계산을 종료합니다.");
            return;
        }

        const currentScore = Number(input);
        if (!Number.isInteger(currentScore) || currentScore < 0 || currentScore > 100) {
            alert("0 이상 100 이하의 정수로 입력해 주세요.");
            i--;
            continue;
        }

        total += currentScore;
    }

    let result = "";

    if (total / 3 > 60) {
        result = "🎉 합격입니다! 우수자로 선정되었습니다.";
    } else {
        result = "🔥 불합격입니다!";
    }

    alert(`====== 📊 성적 결과표 ======
- 총점: ${total}점
- 평균: ${total / 3}점
------------------------------
- 결과: ${result}`);
}