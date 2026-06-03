var img = [];

function preload() {
    var i = 0;
    for (var j = 1; j <= 10; i++, j++) {
        img[i] = loadImage("assets/Idle (" + j + ").png");
    }
    for (var j = 1; j <= 10; i++, j++) {
        img[i] = loadImage("assets/Walk (" + j + ").png");
    }
    for (var j = 1; j <= 12; i++, j++) {
        img[i] = loadImage("assets/Jump (" + j + ").png");
    }
    for (var j = 1; j <= 8; i++, j++) {
        img[i] = loadImage("assets/Run (" + j + ").png");
    }
    for (var j = 1; j <= 8; i++, j++) {
        img[i] = loadImage("assets/Dead (" + j + ").png");
    }
}

function setup() {
    createCanvas(400, 400);
}

// fps alvo
var speed = 15;

function draw() {
    background(220);

    var mult = speed / getTargetFrameRate();
    var frame = Math.floor(((frameCount-1) * mult) % img.length);
    image(img[frame], 140, 50, 200, 200);
}