// Cavans object
const canvas = document.querySelector('canvas');
// Canvas draw context
const c = canvas.getContext('2d');

// Window width
let windowWidth = window.innerWidth;
// Window height
let windowHeight = window.innerHeight;

function setCanvasSize() {
    canvas.width = windowWidth;
    canvas.height = windowHeight;
}

setCanvasSize();

window.addEventListener('resize', function () {// Window width
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    setCanvasSize();
});