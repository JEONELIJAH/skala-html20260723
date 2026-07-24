function showMyBag() {
    const myBag = [
        new Item("여권 ✈️", 1),
        new Item("스마트폰 📱", 2),
        new Item("지갑 👛", 1),
    ];

    let message = `🎒 [내 가방 속 물품 목록]
--------------------------------`;

  for (let i = 0; i < myBag.length; i++) {
    message += `\n- ${myBag[i].name} : ${myBag[i].count}개`;
  }
message += `\n--------------------------------
총 물품 종류: ${myBag.length}가지`;

    alert(message);
}

function Item(name, count) {
    this.name = name;
    this.count = count;
}