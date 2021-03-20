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
const grid = {
    unit: {},
    tile: {
        set: []
    },
};