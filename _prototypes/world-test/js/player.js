function Player() {
    this.x = 0;
    this.y = 0;

    this.draw = function () {
        this.x = (windowWidth / 2) - (gridSize / 2);
        this.y = (windowHeight / 2) - (gridSize / 2);

        c.fillStyle = 'black';
        c.fillRect(this.x, this.y, gridSize, gridSize);
    }
}