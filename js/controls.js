console.info('Init 🕹️ controls.js');

/**************************************************************************************************
 * Controls.js
 * 
 * This file is used to trigger events on the player and enemies when pressing the arrow keys or
 * swipe in a direction.
 * 
 * To-Do:
 * - Add swipe event
 *************************************************************************************************/

window.addEventListener('keydown', function(e){
    player.update(e);
});