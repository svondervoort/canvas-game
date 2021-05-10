/**************************************************************************************************
 * Canvas.js
 * 
 * Initiates the game and updates the canvas.
 * 
 * To-Do:
 * - 
 *************************************************************************************************/

console.info('Init ➡️ 🛫 init.js');

/**************************************************************************************************
 * The animate function to redraw everything
 *************************************************************************************************/

function animate() {
    // Check for animationFrame
    requestAnimationFrame(animate);
    // Clear the canvas
    c.clearRect(0, 0, canvas.width, canvas.height);
    // (re)Draw the grid
    drawGrid();
    // Update player
    updatePlayer();
    // Update enemies
    updateEnemies();
}

/**************************************************************************************************
 * Start the basic functions to get the game going
 *************************************************************************************************/

generateGrid();

animate();