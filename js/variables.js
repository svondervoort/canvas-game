console.info('Init ⚙️ variables.js');

/**************************************************************************************************
 * Variables.js
 * 
 * Sets up variables that need to be available throughout the game and files.
 * 
 * To-Do:
 * - 
 *************************************************************************************************/

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
let grid = {
    unit: {},
    tile: {
        set: []
    },
};
let player = {};
let enemies = {
    max: null,
    set: []
};
let playerMove = true;
let enemiesMove = false;