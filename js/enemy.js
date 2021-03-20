console.info('Init 😈 enemy.js');

/**************************************************************************************************
 * Enemy.js
 * 
 * Containers the Enemy object function that generates enemies and updates it accordingly.
 * 
 * To-Do:
 * - Add various enemy types
 *************************************************************************************************/

 function Enemy(x, y) {
    this.draw = function() {
        c.fillStyle = 'red';
        c.fillRect(this.x, this.y, grid.unit.size, grid.unit.size);
    }

    this.update = function(input = null) {
        this.draw(); // then draw again
    }
 }

 function generateEnemy() {
     // Add new enemy to the enemies.set
 }