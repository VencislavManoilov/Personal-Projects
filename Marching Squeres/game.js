let sizeX = windowSizeX, sizeY = windowSizeY, table = [], z = 0;

let freq = 250, res = 4;

noise.seed(0);

let ofset = [];
for(let x = 0; x < sizeX/res + 2; x++) {
    table[x] = [];
    ofset[x] = [];
    for(let y = 0; y < sizeY/res; y++) {
        table[x][y] = 0;
    }
}

changeBg("black");

function update() {
    for(let x = 0; x < table.length - 1; x++) {
        ofset[x] = [];
        for(let y = 0; y < table[x].length; y++) {
            ofset[x][y] = noise.perlin3(x * res / freq, y * res / freq, z);
            table[x][y] = ofset[x][y];
            if(table[x][y] < noise.perlin3(z, 0, z) * 0.5) {
                table[x][y] = 0;
            } else {
                table[x][y] = 1;
            }

            // if(table[x][y] < 0.5) {
            //     table[x][y] = 0;
            // } else {
            //     table[x][y] = 1;
            // }
        }
    }

    for(let i = 0; i < ofset.length; i++) {
        for(let j = 0; j < ofset[i].length; j++) {
            if(ofset[i][j] < -0.5) {
                ofset[i][j] = -0.5;
            } else if(ofset[i][j] > 0.5) {
                ofset[i][j] = 0.5;
            }
        }
    }

    z += 0.005;
}

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    for(let x = 0; x < table.length - 1; x++) {
        for(let y = 0; y < table[x].length; y++) {
            // if(table[x][y] == 1) {
            //     // fillRect(x * res - res/2 * 0.2, y * res - res/2 * 0.2, res * 0.2, res * 0.2, "#FFFFFF");
            //     fillRect(x * res - res/2 * 0.2, y * res - res/2 * 0.2, res * 0.2, res * 0.2, "rgb(" + ofset[x][y] * 255 * 3 + ", " + ofset[x][y] * 255 * 3 + ", " + ofset[x][y] * 255 * 3 + ")");
            // }
            switch(type(table[x][y], table[x + 1][y], table[x + 1][y + 1], table[x][y + 1])) {
                case 1:
                    drawState(x, y, 3);
                    break;
                case 2:
                    drawState(x, y, 2);
                    break;
                case 3:
                    drawState(x, y, 5);
                    break;
                case 4:
                    drawState(x, y, 1);
                    break;
                case 5:
                    drawState(x, y, 0);
                    drawState(x, y, 2);
                    break;
                case 6:
                    drawState(x, y, 4);
                    break;
                case 7:
                    drawState(x, y, 0);
                    break;
                case 8:
                    drawState(x, y, 0);
                    break;
                case 9:
                    drawState(x, y, 4);
                    break;
                case 10:
                    drawState(x, y, 3);
                    drawState(x, y, 1);
                    break;
                case 11:
                    drawState(x, y, 1);
                    break;
                case 12:
                    drawState(x, y, 5);
                    break;
                case 13:
                    drawState(x, y, 2);
                    break;
                case 14:
                    drawState(x, y, 3);
                    break;
            }
        }
    }
}

function drawState(x, y, state) {
    // switch (state) {
    //     case 0:
    //         drawLine(x * res, y * res + res/2, x * res + res/2, y * res);
    //         break;
    //     case 1:
    //         drawLine(x * res + res/2, y * res, x * res + res, y * res + res/2);
    //         break;
    //     case 2:
    //         drawLine(x * res + res/2, y * res + res, x * res + res, y * res + res/2);
    //         break;
    //     case 3:
    //         drawLine(x * res, y * res + res/2, x * res + res/2, y * res + res);
    //         break;
    //     case 4:
    //         drawLine(x * res + res/2, y * res, x * res + res/2, y * res + res);
    //         break;
    //     case 5:
    //         drawLine(x * res, y * res + res/2, x * res + res, y * res + res/2);
    //         break;
    // }

    let multiplay = 1.5;

    switch (state) {
        case 0:
            drawLine(x * res, y * res + (smooth(x, y + 1) + smooth(x, y))/2 * res * multiplay + res/2, x * res + (smooth(x + 1, y) + smooth(x, y))/2 * res * multiplay + res/2, y * res);
            break;
        case 1:
            drawLine(x * res + (smooth(x + 1, y) + smooth(x, y))/2 * res * multiplay + res/2, y * res, x * res + res, y * res + (smooth(x + 1, y + 1) + smooth(x + 1, y))/2 * res * multiplay + res/2);
            break;
        case 2:
            drawLine(x * res + (smooth(x, y + 1) + smooth(x + 1, y + 1))/2 * res * multiplay + res/2, y * res + res, x * res + res, y * res + (smooth(x + 1, y) + smooth(x + 1, y + 1))/2 * res * multiplay + res/2);
            break;
        case 3:
            drawLine(x * res, y * res + (smooth(x, y) + smooth(x, y + 1))/2 * res * multiplay + res/2, x * res + (smooth(x, y + 1) + smooth(x + 1, y + 1))/2 * res * multiplay + res/2, y * res + res);
            break;
        case 4:
            drawLine(x * res + (smooth(x, y) + smooth(x + 1, y))/2 * res * multiplay + res/2, y * res, x * res + (smooth(x, y + 1) + smooth(x + 1, y + 1))/2 * res * multiplay + res/2, y * res + res);
            break;
        case 5:
            drawLine(x * res, y * res + (smooth(x, y) + smooth(x, y + 1))/2 * res * multiplay + res/2, x * res + res, y * res + (smooth(x + 1, y) + smooth(x + 1, y + 1))/2 * res * multiplay + res/2);
            break;
    }
}

let avarege = 1;
function smooth(x, y) {
    if(x < ofset.length - avarege && x > avarege && y > avarege) {
        if(y < ofset[x].length - avarege) {
            let a = 0, b = 0;
            for(let x2 = -avarege; x2 < avarege + 1; x2++) {
                for(let y2 = -avarege; y2 < avarege + 1; y2++) {
                    a += ofset[x + x2][y + y2];
                    b++;
                }
            }

            return a/b;
        } else {
            return ofset[x][y];
        }
    } else {
        return ofset[x][y];
    }
}

function type(a, b, c, d) {
    return  a * 8 + b * 4 + c * 2 + d * 1;
}