console.info('Init ➡️ init.js');

// Put new player at the center of the canvas
const player = new Player((canvas.width / 2) - (grid.tile.size / 2 - grid.unit.offset), (canvas.height / 2) - (grid.tile.size / 2 - grid.unit.offset), grid.unit.size, grid.unit.size);

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    player.update();
}

generateGrid();
animate();