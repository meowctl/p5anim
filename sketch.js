var img = [];

function preload() {
    var i = 0;
    for (var j = 1; j <= 8; i++, j++) {
        img[i] = loadImage("assets/Dead (" + j + ").png");
    }
    for (var j = 1; j <= 10; i++, j++) {
        img[i] = loadImage("assets/Idle (" + j + ").png");
    }
    for (var j = 1; j <= 12; i++, j++) {
        img[i] = loadImage("assets/Jump (" + j + ").png");
    }
    for (var j = 1; j <= 8; i++, j++) {
        img[i] = loadImage("assets/Run (" + j + ").png");
    }
    for (var j = 1; j <= 10; i++, j++) {
        img[i] = loadImage("assets/Walk (" + j + ").png");
    }
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    frameRate(30);
    image(img[frameCount % img.length], 140, 50, 200, 200);
}