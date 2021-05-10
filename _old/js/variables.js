/**************************************************************************************************
 * Variables.js
 * 
 * Sets up variables that need to be available throughout the game and files.
 * 
 * To-Do:
 * - 
 *************************************************************************************************/

console.info('Init ⚙️ variables.js');

// Cavans object
const canvas = document.querySelector('canvas');
// Canvas draw context
const c = canvas.getContext('2d');
// Grid object with unit and tile info
let grid = { unit: {}, tile: { set: [] } };
// Player object
let player = {};
// Enemies object with max amount and set info
let enemies = { max: null, set: [] };
// Player move boolean
let playerMove = true;
// Enemies move boolean
let enemiesMove = false;