/**************************************************************************************************
 * Canvas.js
 * 
 * Resizes canvas to fit a grid within the available window size.
 * 
 * To-Do:
 * - 
 *************************************************************************************************/

console.info('Init 📋 canvas.js');

/**************************************************************************************************
 * Resize canvas to fit a grid within the available window size.
 *************************************************************************************************/

function resizeCanvas() {
    const width = grid.tile.x * grid.tile.size;
    const height = grid.tile.y * grid.tile.size;

    canvas.width = width;
    canvas.height = height;

    generatePlayer();
    generateEnemy(enemies.max);
}