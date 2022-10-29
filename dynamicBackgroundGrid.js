let pointGridArr = [];
let density = 32;
let noiseSpeed = 0.004;
let noiseScale = 200;
let currentNoiseZ = 0;
let pointColour = "33, 115, 115";

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    clear();
    canvas.parent("dynamicBackground");
    noStroke();
}

function draw() {
    clear();

    for (let y = 0; y < windowHeight + density; y += density) {
        for (let x = 0; x < windowWidth + density; x += density) {

            let noiseMap = noise(x / noiseScale, y / noiseScale, currentNoiseZ);
            let opacity = map(noiseMap, 0, 1, 0, 0.5);
            let size = map(noiseMap, 0, 1, 2, 32);

            fill(`rgba(${pointColour}, ${opacity})`);
            circle(x, y, size);
        }
    }
    currentNoiseZ += noiseSpeed;
}

function windowResized() {
    clear();
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("dynamicBackground");
}