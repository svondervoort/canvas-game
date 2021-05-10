function Enemy(x, y) {
    this.x = x;
    this.y = y;
    this.hasMoved = false;

    this.draw = function () {
        if (enemiesTurn == true && this.hasMoved == false) {
            getDirectionToPlayer(this);
            console.log('updating enemy');
            this.hasMoved = true;
        }

        c.fillStyle = 'red';
        c.fillRect(this.x, this.y, gridSize, gridSize);
    }
}

function getDirectionToPlayer(enemy) {
    const differenceX = enemy.x - player.x;
    const distanceX = differenceX < 0 ? -differenceX : differenceX;
    const differenceY = enemy.y - player.y;
    const distanceY = differenceY < 0 ? -differenceY : differenceY;

    if (distanceX > distanceY) {
        if (differenceX > 0) {
            enemy.x -= stepSize;
        } else {
            enemy.x += stepSize;
        }
    } else {
        if (differenceY > 0) {
            enemy.y -= stepSize;
        } else {
            enemy.y += stepSize;
        }
    }
}

function updateEnemies() {
    if (enemiesTurn) {
        console.log('updating enemies');
        for (let i = 0; i < enemies.length; i++) {
            enemies[i].draw();
            enemies[i].hasMoved = false;
        }

        playersTurn = true;
        enemiesTurn = false;
    } else {
        for (let i = 0; i < enemies.length; i++) {
            enemies[i].draw();
        }
    }
}