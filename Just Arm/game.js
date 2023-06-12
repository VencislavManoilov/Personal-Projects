let angle1 = 0, angle2 = 0, sX = windowSizeX/2, sY = windowSizeY/2, long = 100;
let mX = sX, mY = sY + 100, endX = sX + 200, endY = sY, e = [];

function update() {
    mX = mouseX;
    mY = mouseY;

    if(distance(sX, sY, mX, mY) > long * 2) {
        let angle = Math.atan2(mY - sY, mX - sX);
        mX = sX + Math.cos(angle) * long * 2;
        mY = sY + Math.sin(angle) * long * 2;
    }

    if(error(angle1, angle2) > 0) {
        for(let k = 0; k < 10; k++) {
            e = [], best = {error: Infinity};
            for(let i = -1; i < 2; i++) {
                e[i] = [];
                for(let j = -1; j < 2; j++) {
                    e[i][j] = {a1: angle1 + i, a2: angle2 + j, error: error(angle1 + i, angle2 + j)};

                    if(e[i][j].error < best.error) {
                        best = e[i][j];
                    }
                }
            }

            angle1 = best.a1;
            angle2 = best.a2;

            if(error(angle1, angle2) == 0) {
                k = Infinity;
            }
        }
    }
}

function draw() {
    let x1 = sX + Math.cos(angle1 * Math.PI / 180) * long, y1 = sY + Math.sin(angle1 * Math.PI / 180) * long;
    endX = lastX(angle1, angle2);
    endY = lastY(angle1, angle2);

    drawLine(sX, sY, x1, y1, 2, "black");
    drawLine(x1, y1, endX, endY, 2, "black");

    // strokeArc(sX, sY, 200, 2, "blue")

    // fillArc(mX, mY, 5, "green");

    // fillText("Error: " + error(angle1, angle2), 10, 10, 25, "Arial", "black");
}

function lastX(a1, a2) {
    let x1 = sX + Math.cos(a1 * Math.PI / 180) * long;
    return x1 + Math.cos((a1 + a2) * Math.PI / 180) * long;
}

function lastY(a1, a2) {
    let y1 = sY + Math.sin(a1 * Math.PI / 180) * long;
    return y1 + Math.sin((a1 + a2) * Math.PI / 180) * long;
}

function error(a1, a2) {
    return Math.floor(distance(lastX(a1, a2), lastY(a1, a2), mX, mY));
}