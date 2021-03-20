console.info("Init ℹ️ helpers.js");

/**************************************************************************************************
 * Helpers.js
 * 
 * Contains various helper functions.
 *************************************************************************************************/

/**************************************************************************************************
 * Check if the input is an odd number
 *************************************************************************************************/
const isOdd = function(x) { return x & 1; };

/**************************************************************************************************
 * Check if the input is an even number
 *************************************************************************************************/
const isEven  = function(x) { return !( x & 1 ); };

/**************************************************************************************************
 * Get a random x,y position on the grid
 *************************************************************************************************/
const getXY = function() {
    let output = { x: null, y: null }
    output.x = (Math.floor(Math.random() * grid.tile.x)) * grid.tile.size + grid.unit.offset;
    output.y = (Math.floor(Math.random() * grid.tile.y)) * grid.tile.size + grid.unit.offset;

    // To-Do: check if the position is empty
    return output;
}