/**************************************************************************************************
 * Tile.js
 * 
 * Contains the Tile object function that generates a tile and updates it accordingly.
 * 
 * To-Do:
 * - Add various tile types
 *************************************************************************************************/

console.info('Init 🗺️ tile.js');

/**************************************************************************************************
 * Temporary tile colors
 *************************************************************************************************/

const tileColors = [
    '#ccd5ae',
    '#e9edc9',
    '#fefae0',
    '#faedcd',
    '#d4a373',
]

/**************************************************************************************************
 * Create a new tile object
 *************************************************************************************************/

function Tile(x, y) {
    this.x = x;
    this.y = y;
    this.width = grid.tile.size;
    this.height = grid.tile.size;
    this.color = tileColors[Math.floor(Math.random() * tileColors.length)];

    this.draw = function () {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
    }

    this.update = function () {
        // Do things
        this.draw(); // then draw again
    }
}