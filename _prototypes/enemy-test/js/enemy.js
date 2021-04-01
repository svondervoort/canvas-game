function Enemy(x, y) {
    this.x = x;
    this.y = y;

    this.draw = function () {
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