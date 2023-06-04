let sizeX = windowSizeX, sizeY = windowSizeY, table = [], z = 0, arc = [];

let res = 5;

for(let x = 0; x < sizeX/res + 2; x++) {
    table[x] = [];
    for(let y = 0; y < sizeY/res; y++) {
        table[x][y] = 0;
    }
}

for(let i = 0; i < 10; i++) {
    arc.push({x: randomInteger(0, windowSizeX), y: randomInteger(0, windowSizeY)});
}

// arc.push({x: 500, y: 750});
// arc.push({x: 675, y: 750});
// for(let i = 0; i < 5; i++) {
//     arc.push({x: 587.5, y: 700 - i * 100})
//     if(i == 4) {
//         arc.push({x: 587.5, y: 700 - i * 110})
//     }
// }

changeBg("black");

function update() {
    for(let x = 0; x < sizeX/res + 2; x++) {
        for(let y = 0; y < sizeY/res; y++) {
            table[x][y] = 0;
            for(let i = 0; i < arc.length; i++) {
                dist = distance(arc[i].x, arc[i].y, x * res, y * res);
                if(dist < 150) {
                    table[x][y] += 1 - dist/150
                }
            }

            if(table[x][y] > 0.2) {
                table[x][y] = 1;
            } else {
                table[x][y] = 0;
            }
        }
    }

    arc[0].x = mouseX;
    arc[0].y = mouseY;
}

function draw() {
    for(let x = 0; x < table.length - 1; x++) {
        for(let y = 0; y < table[x].length - 1; y++) {
            // if(table[x][y] == 1) {
            //     fillRect(x * res - res/2 * 0.2, y * res - res/2 * 0.2, res * 0.2, res * 0.2, "white");
            // }
            // fillRect(x * res - res/2 * 0.2, y * res - res/2 * 0.2, res * 0.2, res * 0.2, "rgb(" + table[x][y] * 255 + ", " + table[x][y] * 255 + ", " + table[x][y] * 255 + ")");
            if(x != table.length || y != table[x].length) {
                switch(type(table[x][y], table[x + 1][y], table[x + 1][y + 1], table[x][y + 1])) {
                    case 1:
                        drawLine(x * res, y * res + res/2, x * res + res/2, y * res + res, 1, "white");
                        break;
                    case 2:
                        drawLine(x * res + res/2, y * res + res, x * res + res, y * res + res/2, 1, "white");
                        break;
                    case 3:
                        drawLine(x * res, y * res + res/2, x * res + res, y * res + res/2, 1, "white");
                        break;
                    case 4:
                        drawLine(x * res + res/2, y * res, x * res + res, y * res + res/2, 1, "white");
                        break;
                    case 5:
                        drawLine(x * res, y * res + res/2, x * res + res/2, y * res, 1, "white");
                        drawLine(x * res + res/2, y * res + res, x * res + res, y * res + res/2, 1, "white");
                        break;
                    case 6:
                        drawLine(x * res + res/2, y * res, x * res + res/2, y * res + res, 1, "white");
                        break;
                    case 7:
                        drawLine(x * res, y * res + res/2, x * res + res/2, y * res, 1, "white");
                        break;
                    case 8:
                        drawLine(x * res, y * res + res/2, x * res + res/2, y * res, 1, "white");
                        break;
                    case 9:
                        drawLine(x * res + res/2, y * res, x * res + res/2, y * res + res, 1, "white");
                        break;
                    case 10:
                        drawLine(x * res, y * res + res/2, x * res + res/2, y * res + res, 1, "white");
                        drawLine(x * res + res/2, y * res, x * res + res, y * res + res/2, 1, "white");
                        break;
                    case 11:
                        drawLine(x * res + res/2, y * res, x * res + res, y * res + res/2, 1, "white");
                        break;
                    case 12:
                        drawLine(x * res, y * res + res/2, x * res + res, y * res + res/2, 1, "white");
                        break;
                    case 13:
                        drawLine(x * res + res/2, y * res + res, x * res + res, y * res + res/2, 1, "white");
                        break;
                    case 14:
                        drawLine(x * res, y * res + res/2, x * res + res/2, y * res + res, 1, "white");
                        break;
                }
            }
        }
    }
}

function type(a, b, c, d) {
    return  a * 8 + b * 4 + c * 2 + d * 1;
}