console.info('Init ⚙️ variables.js');

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const grid = { size: 32 };
const playingField = { offsetX: null, offsetY: null, width: null, height: null };
const tiles = [];