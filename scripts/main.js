window.onresize = buildStickers;

function main() {
    const tryMe = document.querySelector(".tryMeButton");
    tryMe.onclick = () => {
        console.log("try me clicked");
        buildStickers();
    }
    // const stickerRow = document.querySelector(".stickerRow");
    // removeAllExceptFirst(stickerRow);
    buildStickers();
}

function buildStickers() {
    let w = window.innerWidth;
    let numOfStickers = Math.floor((w - 120) / 34);
    console.log(w);
    console.log(numOfStickers);
    const stickerRow = document.querySelector(".stickerRow");
    removeAllExceptFirst(stickerRow);
    for (let i = 0; i < numOfStickers; i++) {
        const child = document.createElement("div");
        child.className = "sticker";
        child.style.backgroundColor = randColor();
        stickerRow.appendChild(child);
    }
}

function removeAllExceptFirst(parent) {
    while (parent.childNodes.length > 2) {
        parent.removeChild(parent.lastChild);
    }
}

function randColor() {
    let randInt = Math.floor(Math.random() * 6);
    if (randInt == 0) return "white";
    if (randInt == 1) return "yellow";
    if (randInt == 2) return "orange";
    if (randInt == 3) return "red";
    if (randInt == 4) return "blue";
    if (randInt == 5) return "green";
}

main();