function Player() {
    this.x = (windowWidth / 2) - (gridSize / 2);
    this.y = (windowHeight / 2) - (gridSize / 2);

    this.draw = function () {

        c.fillStyle = 'black';
        c.fillRect(this.x, this.y, gridSize, gridSize);
    }
}