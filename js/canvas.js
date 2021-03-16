// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

function resizeCanvas() {
    const width = grid.tile.x * grid.tile.size;
    const height = grid.tile.y * grid.tile.size;

    canvas.width = width;
    canvas.height = height;
}