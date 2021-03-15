console.info('Init 🔲 grid.js');

function generateGrid() {
    // Calculate X grid
    grid.tile.x = Math.floor(canvas.width / grid.tile.size);
    if(isEven(grid.tile.x)) {
        grid.tile.x -= 1;
    }

    // Calculate Y grid
    grid.tile.y = Math.floor(canvas.height / grid.tile.size);
    if(isEven(grid.tile.y)) {
        grid.tile.y -= 1;
    }

    // calculate playingField
    playingField.offsetX = (canvas.width - (grid.tile.x * grid.tile.size)) / 2;
    playingField.offsetY = (canvas.height - (grid.tile.y * grid.tile.size)) / 2;
    playingField.width = grid.tile.x * grid.tile.size;
    playingField.height = grid.tile.y * grid.tile.size;

    // Generate tiles
    for(let gridY = 0; gridY < grid.tile.y; gridY++) {
        for(let gridX = 0; gridX < grid.tile.x; gridX++) {
            const x = (gridX * grid.tile.size) + playingField.offsetX;
            const y = (gridY * grid.tile.size) + playingField.offsetY;

            grid.tile.set.push(new Tile(x, y));
        }
    }
}

function drawGrid() {
    // Fill up canvas
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);

    c.fillStyle = 'white';
    c.fillRect(playingField.offsetX, playingField.offsetY, playingField.width, playingField.height);

    for(let i = 0; i < grid.tile.set.length; i++) {
        grid.tile.set[i].draw();
    }
}