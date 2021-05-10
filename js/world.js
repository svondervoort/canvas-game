// Create world object
function World() {
    this.x = 0;
    this.y = 0;
    this.offsetX = 0;
    this.offsetY = 0;

    this.draw = function () {
        // Calculate X & Y
        this.x = (windowWidth / 2) - (worldWidth / 2) - this.offsetX;
        this.y = (windowHeight / 2) - (worldHeight / 2) - this.offsetY;

        // Create gradient for visual effect
        const worldGradient = c.createLinearGradient(0, 0, worldWidth, worldHeight);
        worldGradient.addColorStop(0, "red");
        worldGradient.addColorStop(1, "green");

        c.fillStyle = worldGradient;
        c.fillRect(this.x, this.y, worldWidth, worldHeight);
    }
}