console.info('Init 😈 enemy.js');

/**************************************************************************************************
 * Enemy.js
 * 
 * Containers the Enemy object function that generates enemies and updates it accordingly.
 * 
 * To-Do:
 * - Add various enemy types
 *************************************************************************************************/

 function Enemy(x, y, hp = 1) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.orentation = null;

    this.draw = function() {
        c.fillStyle = 'red';
        c.fillRect(this.x, this.y, grid.unit.size, grid.unit.size);
    }

    this.update = function(input = null) {
        this.draw(); // then draw again
    }
 }

/**************************************************************************************************
 * Generate the first set of enemies and place them on random locations
 *************************************************************************************************/

 function generateEnemies() {
    for(let i = 0; i < enemies.max; i++) {
        x = getXY().x;
        y = getXY().y;
        enemies.set.push(new Enemy(x, y));
    }
    console.log(enemies.set);
 }

/**************************************************************************************************
 * If an enemy dies add a new one
 *************************************************************************************************/

 function generateEnemy() {
    x = getXY().x;
    y = getXY().y;
    enemies.set.push(new Enemy(x, y));
 }

/**************************************************************************************************
 * Update all enemies
 *************************************************************************************************/

 function updateEnemies() {
    for(let i = 0; i < enemies.set.length; i++) { 
        enemies.set[i].update();
    }
 }