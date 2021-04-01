
const gridSize = 64;
const stepSize = gridSize / 4;
// Create player
const player = new Player();
// Create enemies
const enemies = [];
for (let i = 0; i < 5; i++) {
    const enemy = new Enemy(Math.floor(Math.random() * windowWidth), Math.floor(Math.random() * windowHeight));
    enemies.push(enemy);
}