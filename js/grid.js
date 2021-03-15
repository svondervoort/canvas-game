console.info('Init 🔲 grid.js');

function generateGrid() {
    // Calculate X grid
    grid.x = Math.floor(canvas.width / grid.size);
    if(isEven(grid.x)) {
        grid.x -= 1;
    }

    // Calculate Y grid
    grid.y = Math.floor(canvas.height / grid.size);
    if(isEven(grid.y)) {
        grid.y -= 1;
    }

    // calculate playingField
    playingField.offsetX = (canvas.width - (grid.x * grid.size)) / 2;
    playingField.offsetY = (canvas.height - (grid.y * grid.size)) / 2;
    playingField.width = grid.x * grid.size;
    playingField.height = grid.y * grid.size;

    // Generate tiles
    for(let gridY = 0; gridY < grid.y; gridY++) {
        for(let gridX = 0; gridX < grid.x; gridX++) {
            const x = (gridX * grid.size) + playingField.offsetX;
            const y = (gridY * grid.size) + playingField.offsetY;

            tiles.push(new Tile(x, y));
        }
    }
}

function drawGrid() {
    // Fill up canvas
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);

    c.fillStyle = 'white';
    c.fillRect(playingField.offsetX, playingField.offsetY, playingField.width, playingField.height);

    for(let i = 0; i < tiles.length; i++) {
        tiles[i].draw();
    }

    // // Draw X grid
    // for(let x = 0; x < grid.x; x++) {
    //     const coordX = grid.size * x;

    //     c.beginPath();
    //     c.moveTo(coordX, 0);
    //     c.lineTo(coordX, canvas.height);
    //     c.strokeStyle = "#ccc";
    //     c.stroke();
    // }

    // // Draw Y grid
    // for(let y = 0; y < grid.y; y++) {
    //     const coordY = grid.size * y;
    //     c.beginPath();
    //     c.moveTo(0, coordY);
    //     c.lineTo(canvas.width, coordY);
    //     c.strokeStyle = "#ccc";
    //     c.stroke();
    // }

}