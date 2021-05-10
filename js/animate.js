function animate() {
    // Check for animationFrame
    requestAnimationFrame(animate);
    // Clear the canvas
    c.clearRect(0, 0, canvas.width, canvas.height);
    // Draw world
    world.draw();
    // Draw player
    player.draw();
    // Draw enemies
    updateEnemies();
}

animate();