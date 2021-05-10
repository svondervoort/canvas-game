/**************************************************************************************************
 * Grid.js
 * 
 * Generates a random tile grid that fits the current window size and draws that grid.
 * 
 * To-Do:
 * - 
 *************************************************************************************************/

console.info('Init 🔲 grid.js');

/**************************************************************************************************
 * Generates a random tile grid that fits the current window size and draws that grid.
 *************************************************************************************************/

function generateGrid() {
    // Calculate X grid
    grid.tile.x = Math.floor(window.innerWidth / grid.tile.size);
    if (isEven(grid.tile.x)) {
        grid.tile.x -= 1;
    }

    // Calculate Y grid
    grid.tile.y = Math.floor(window.innerHeight / grid.tile.size);
    if (isEven(grid.tile.y)) {
        grid.tile.y -= 1;
    }

    // Generate tiles
    for (let gridY = 0; gridY < grid.tile.y; gridY++) {
        for (let gridX = 0; gridX < grid.tile.x; gridX++) {
            const x = gridX * grid.tile.size;
            const y = gridY * grid.tile.size;

            grid.tile.set.push(new Tile(x, y));
        }
    }

    resizeCanvas();
}

/**************************************************************************************************
 * (Re)Draw the tile grid
 *************************************************************************************************/

function drawGrid() {
    for (let i = 0; i < grid.tile.set.length; i++) {
        grid.tile.set[i].update();
    }
}