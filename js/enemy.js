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
    this.moved = false;

    this.draw = function () {
        c.fillStyle = 'red';
        c.fillRect(this.x, this.y, grid.unit.size, grid.unit.size);
    }

    this.update = function (input = null) {
        if (enemiesMove == true && this.moved == false) {
            this.moved = true;
        }
        this.draw(); // then draw again
    }
}

/**************************************************************************************************
 * Generate the first set of enemies and place them on random locations
 *************************************************************************************************/

function getEnemySpawnLocation() {
    let output = { x: null, y: null }
    output.x = (Math.floor(Math.random() * grid.tile.x)) * grid.tile.size + grid.unit.offset;
    output.y = (Math.floor(Math.random() * grid.tile.y)) * grid.tile.size + grid.unit.offset;

    // To-Do: check if the position is empty
    return output;
}

/**************************************************************************************************
 * Generate the first set of enemies and place them on random locations
 *************************************************************************************************/

function generateEnemies() {
    for (let i = 0; i < enemies.max; i++) {
        x = getEnemySpawnLocation().x;
        y = getEnemySpawnLocation().y;
        enemies.set.push(new Enemy(x, y));
    }
}

/**************************************************************************************************
 * If an enemy dies add a new one
 *************************************************************************************************/

function generateEnemy() {
    x = getEnemySpawnLocation().x;
    y = getEnemySpawnLocation().y;
    enemies.set.push(new Enemy(x, y));
}

/**************************************************************************************************
 * Update all enemies
 *************************************************************************************************/

function updateEnemies() {
    let unmovedEnemies = 0;
    // Check if all enemies have moved
    for (let i = 0; i < enemies.set.length; i++) {
        enemies.set[i].update();

        if (enemies.set[i].moved == false) {
            unmovedEnemies += 1;
        }
    }
    // If all enemies have moved reset move variables
    if (unmovedEnemies == 0) {
        playerMove = true;
        enemiesMove = false;
        for (let i = 0; i < enemies.set.length; i++) {
            enemies.set[i].moved = false;
        }
    }
}