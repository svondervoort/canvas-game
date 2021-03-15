console.info('Init ⚙️ variables.js');

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const grid = {
    unit: {},
    tile: {
        set: []
    },
};
const playingField = {};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;