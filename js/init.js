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
    updatePlayer();
    // Update enemies
    updateEnemies();
}

generateGrid();

animate();