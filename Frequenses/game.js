let f1 = 0.0375 * 2, x1 = 100, f2 = 0.0375 * 3, y2, time = 0, lineX = [], lineY = [];

function update() {
    x1 = 250 + Math.sin(f1 * (time + 42.5)) * 100;
    y2 = 200 + Math.sin(f2 * time) * 100;
    time++;

    lineX.push(x1 + 25);
    lineY.push(y2 + 25);

    if(lineX.length > 260) {
        lineX.shift();
        lineY.shift();
    }
}

function draw() {
    fillRect(x1, 40, 50, 50, "black");
    drawLine(x1 + 25, 65, x1 + 25, 325, 1, "black");

    fillRect(90, y2, 50, 50, "black");
    drawLine(115, y2 + 25, 375, y2 + 25, 1, "black");

    fillArc(x1 + 25, y2 + 25, 2.5, "black");

    for(let i = 0; i < lineX.length - 1; i++) {
        drawLine(lineX[i], lineY[i], lineX[i + 1], lineY[i + 1], 2, "black");
    }
}