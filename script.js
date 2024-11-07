const basket = document.getElementById('basket');
const item = document.getElementById('item');
const scoreElement = document.getElementById('score');
const gameContainer = document.getElementById('game-container');
let score = 0;
let basketPosition = 160;
let itemPositionY = 0;
let itemPositionX = Math.random() * 380;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && basketPosition > 0) {
        basketPosition -= 20;
    } else if (e.key === 'ArrowRight' && basketPosition < 320) {
        basketPosition += 20;
    }
    basket.style.left = `${basketPosition}px`;
});

function dropItem() {
    itemPositionY += 5;
    item.style.top = `${itemPositionY}px`;
    item.style.left = `${itemPositionX}px`;

    // Check if item reached the basket
    if (itemPositionY >= 560 && Math.abs(itemPositionX - basketPosition) < 60) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
        resetItem();
    } else if (itemPositionY > 600) {
        alert('Game Over! Final Score: ' + score);
        resetGame();
    }
}

function resetItem() {
    itemPositionY = 0;
    itemPositionX = Math.random() * 380;
}

function resetGame() {
    score = 0;
    scoreElement.textContent = 'Score: 0';
    resetItem();
}

setInterval(dropItem, 50);
