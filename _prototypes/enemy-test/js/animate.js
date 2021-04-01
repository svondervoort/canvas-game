function animate() {
    // Check for animationFrame
    requestAnimationFrame(animate);
    // Clear the canvas
    c.clearRect(0, 0, canvas.width, canvas.height);
    // Draw player
    player.draw();
    // Draw enemies
    for (let i = 0; i < enemies.length; i++) {
        getDirectionToPlayer(enemies[i]);
        enemies[i].draw();
    }
}


animate();