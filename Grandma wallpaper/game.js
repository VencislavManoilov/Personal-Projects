let length = 100,
    width = 25,
    changeAngle = 5;
;

function update() {

}

function draw() {
    drawTheThing(250, 250, 0, length);
}

function drawTheThing(x, y, angle, index) {
    let goX = x + Math.cos(angle / 180 * Math.PI) * width, goY = y + Math.sin(angle / 180 * Math.PI) * width;

    drawLine(x, y, goX, goY, 1, "black");
    if(index > 0) {
        drawTheThing(goX, goY, angle + changeAngle * index, index - 1);
    }
}