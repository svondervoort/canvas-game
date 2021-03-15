console.info('Init 🗺️ tile.js');

const tileColors = [
    '#ccd5ae',
    '#e9edc9',
    '#fefae0',
    '#faedcd',
    '#d4a373',
]

function Tile(x, y) {
    this.x = x;
    this.y = y;
    this.width = grid.size;
    this.height = grid.size;
    this.color = tileColors[Math.floor(Math.random() * tileColors.length)];

    this.draw = function() {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
    }

    this.update = function() {
        // Do things
        this.draw(); // then draw again
    }
}