console.info('Init 👤 player.js');

/**************************************************************************************************
 * Player.js
 * 
 * Containers the Player object function that generates the player and updates it accordingly.
 * 
 * To-Do:
 * - Add orentation logic
 * - Add health logic
 * - Add attack logic
 * - Block player movement when moving towards an enemy
 *************************************************************************************************/

function Player(x, y) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.orentation = this.orentation;

    this.draw = function() {
        c.fillStyle = 'green';
        c.fillRect(this.x, this.y, grid.unit.size, grid.unit.size);
    }

    this.update = function(input = null) {
        // Do things
        if (input != null && input instanceof KeyboardEvent) {
            switch (input.keyCode) {
                case 37:
                    // Left
                    if (player.x != grid.unit.offset) {
                        player.x -= grid.tile.size;
                    }
                    break;
                case 38:
                    // Up
                    if (player.y != grid.unit.offset) {
                        player.y -= grid.tile.size;
                    }
                    break;
                case 39:
                    // Right
                    if (player.x != (grid.tile.size * (grid.tile.x - 1)) + grid.unit.offset) {
                        player.x += grid.tile.size;
                    }
                    break;
                case 40:
                    // Down
                    if (player.y != (grid.tile.size * (grid.tile.y - 1)) + grid.unit.offset) {
                        player.y += grid.tile.size;
                    }
                    break;
            }
        }
        this.draw(); // then draw again
    }
}