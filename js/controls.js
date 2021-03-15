console.info('Init 🕹️ controls.js');

window.addEventListener('keydown', function(e){
    switch (e.keyCode) {
        case 37:
            // Left
            player.x -= grid.size;
            break;
        case 38:
            // Up
            player.y -= grid.size;
            break;
        case 39:
            // Right
            player.x += grid.size;
            break;
        case 40:
            // Down
            player.y += grid.size;
            break;
    }
});