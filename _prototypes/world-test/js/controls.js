window.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 37:
            // Left
            if (world.x != player.x) {
                world.offsetX -= offsetStep;
            }
            break;
        case 38:
            // Up
            if (world.y != player.y) {
                world.offsetY -= offsetStep;
            }
            break;
        case 39:
            // Right
            if (world.x != (player.x + gridSize) - worldWidth) {
                world.offsetX += offsetStep;
            }
            break;
        case 40:
            // Down
            if (world.y != (player.y + gridSize) - worldHeight) {
                world.offsetY += offsetStep;
            }
            break;
    }
});