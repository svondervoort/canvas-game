console.info('Init ➡️ 🛫 init.js');

/**************************************************************************************************
 * Canvas.js
 * 
 * Initiates the game and updates the canvas.
 * 
 * To-Do:
 * - 
 *************************************************************************************************/

function animate() {
    // Check for animationFrame
    requestAnimationFrame(animate);
    // Clear the canvas
    c.clearRect(0, 0, canvas.width, canvas.height);
    // (re)Draw the grid
    drawGrid();
    // Update player
    player.update();
}

generateGrid();

// Put new player at the center of the canvas
const player = new Player((canvas.width / 2) - (grid.tile.size / 2 - grid.unit.offset), (canvas.height / 2) - (grid.tile.size / 2 - grid.unit.offset));

animate();