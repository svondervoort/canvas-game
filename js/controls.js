window.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 37:
            // Left
            if (world.x != player.x) {
                world.offsetX -= stepSize;
            }
            for (let i = 0; i < enemies.length; i++) {
                enemies[i].x += stepSize;
            }
            break;
        case 38:
            // Up
            if (world.y != player.y) {
                world.offsetY -= stepSize;
            }
            for (let i = 0; i < enemies.length; i++) {
                enemies[i].y += stepSize;
            }
            break;
        case 39:
            // Right
            if (world.x != (player.x + gridSize) - worldWidth) {
                world.offsetX += stepSize;
            }
            for (let i = 0; i < enemies.length; i++) {
                enemies[i].x -= stepSize;
            }
            break;
        case 40:
            // Down
            if (world.y != (player.y + gridSize) - worldHeight) {
                world.offsetY += stepSize;
            }
            for (let i = 0; i < enemies.length; i++) {
                enemies[i].y -= stepSize;
            }
            break;
    }
    switch (e.keyCode) {
        case 37:
        case 38:
        case 39:
        case 40:
            playersTurn = false;
            enemiesTurn = true;
            break;
    }
});