console.info('Init 👤 player.js');

function Player(x, y, width, height, orientation = null) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.orentation = this.orentation;

    this.draw = function() {
        c.fillStyle = 'green';
        c.fillRect(this.x, this.y, this.width, this.height);
    }

    this.update = function() {
        // Do things
        this.draw(); // then draw again
    }
}