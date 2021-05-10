// Create world
const world = new World();
// Create player
const player = new Player();
// Create enemies
const enemies = [];
for (let i = 0; i < 5; i++) {
    const x = ((Math.floor(Math.random() * gridSizeX)) * gridSize) + world.x;
    const y = ((Math.floor(Math.random() * gridSizeY)) * gridSize) + world.y;
    const enemy = new Enemy(x, y);
    enemies.push(enemy);
}