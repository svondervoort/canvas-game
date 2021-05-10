/**************************************************************************************************
 * Controls.js
 * 
 * This file is used to trigger events on the player and enemies when pressing the arrow keys or
 * swipe in a direction.
 * 
 * To-Do:
 * - Add swipe event
 *************************************************************************************************/

console.info('Init 🕹️ controls.js');

/**************************************************************************************************
 * On keydown update the player object and send event to player.update
 *************************************************************************************************/

window.addEventListener('keydown', function (e) {
    player.update(e);
});