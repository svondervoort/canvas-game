console.info('Init ⚙️ config.js');

/**************************************************************************************************
 * Config.js
 * 
 * Set basic configuration variables.
 * 
 * To-Do:
 * - Make the config settings adjustable inside the game
 *************************************************************************************************/

const unitGridRation = 0.5;

// Create grid tile object
grid.tile.size = 64;

// Create grid unit object
grid.unit.size = grid.tile.size * unitGridRation;
grid.unit.offset = (grid.tile.size - grid.unit.size) / 2;