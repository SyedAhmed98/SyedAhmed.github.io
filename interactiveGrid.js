let pointGridArr = [];
let density = 64;
let xCount;
let yCount;

let xOffset;
let yOffset;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    clear();
    canvas.parent("gameContainer");

    xCount = Math.floor(windowWidth / density);
    yCount = Math.floor(windowHeight / density);

    xOffset = density / 2;
    yOffset = density / 2;

    for (let y = 0; y < yCount; y++) {
        let jagged = [];
        for (let x = 0; x < xCount; x++) {
            jagged.push(createVector(x * density + xOffset, y * density + yOffset));
        }
        pointGridArr.push(jagged);
    }
    console.log(pointGridArr);

    noStroke();
    fill(132, 176, 38);
}

function draw() {
    clear();

    for (let y = 0; y < yCount; y++) {
        for (let x = 0; x < xCount; x++) {
            let currentVec = pointGridArr[y][x];
            circle(currentVec.x, currentVec.y, 8);
        }
    }
}