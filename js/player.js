/**************************************************************************************************
 * Player.js
 * 
 * Contains the Player object function that generates the player and updates it accordingly.
 * 
 * To-Do:
 * - Add orentation logic
 * - Add health logic
 * - Add attack logic
 * - Block player movement when moving towards an enemy
 *************************************************************************************************/

console.info('Init 👤 player.js');

/**************************************************************************************************
 * Create new Player object
 *************************************************************************************************/

function Player(x, y, hp = 3) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.orentation = null;

    this.draw = function () {
        c.fillStyle = 'green';
        c.fillRect(this.x, this.y, grid.unit.size, grid.unit.size);
    }

    this.update = function (input = null) {
        // Do things
        if (input != null && input instanceof KeyboardEvent && playerMove == true) {
            switch (input.keyCode) {
                case 37:
                    // Left
                    if (player.x != grid.unit.offset) {
                        player.x -= grid.tile.size;
                    }
                    playerMove = false;
                    enemiesMove = true;
                    break;
                case 38:
                    // Up
                    if (player.y != grid.unit.offset) {
                        player.y -= grid.tile.size;
                    }
                    playerMove = false;
                    enemiesMove = true;
                    break;
                case 39:
                    // Right
                    if (player.x != (grid.tile.size * (grid.tile.x - 1)) + grid.unit.offset) {
                        player.x += grid.tile.size;
                    }
                    playerMove = false;
                    enemiesMove = true;
                    break;
                case 40:
                    // Down
                    if (player.y != (grid.tile.size * (grid.tile.y - 1)) + grid.unit.offset) {
                        player.y += grid.tile.size;
                    }
                    playerMove = false;
                    enemiesMove = true;
                    break;
            }
        }
        this.draw(); // then draw again
    }
}

/**************************************************************************************************
 * Generate the the player and put him at the center of the canvas
 *************************************************************************************************/

function generatePlayer() {
    x = (canvas.width / 2) - (grid.tile.size / 2 - grid.unit.offset);
    y = (canvas.height / 2) - (grid.tile.size / 2 - grid.unit.offset);
    player = new Player(x, y);
}

/**************************************************************************************************
 * Update the player
 *************************************************************************************************/

function updatePlayer() {
    player.update();
}