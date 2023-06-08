let angle = 90, dist = windowSizeY/2, R = dist/10, x = windowSizeX/2 + Math.cos(angle * Math.PI/180) * dist, y = Math.sin(angle * Math.PI/180) * dist, time = 0;

function update() {
    time++;

    x = windowSizeX/2 + Math.cos(angle * Math.PI/180) * dist;
    y = Math.sin(angle * Math.PI/180) * dist;

    dist = windowSizeY/2;
    R = dist/10;

    angle = Math.cos(time/1.5 * Math.PI/180) * 25 + 90;
}

function draw() {
    drawLine(windowSizeX/2, 0, x, y, 10, "#rgba(232, 132, 152, 1)");
    strokeArc(x, y, R, 20, "rgb(196, 114, 130)");
    context.fillStyle = "rgba(232, 132, 152, 1)";
    context.fill();

    UpdateParticles();
}