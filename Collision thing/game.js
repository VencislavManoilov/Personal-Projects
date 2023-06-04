let circle = [], table = [], biggestR = 10;

for(let x = 0; x < 192; x++) {
    table[x] = [];

    for(let y = 0; y < 94; y++) {
        table[x][y] = [];
    }
}

class Obj {
    constructor(x, y, R, color, gravity, index) {
        this.x = x;
        this.y = y;
        this.R = R;
        this.color = color;
        this.gravity = gravity;
        this.dx = 0;
        this.dy = 0;
    }

    draw() {
        fillArc(this.x, this.y, this.R, this.color);
    }

    update() {
        if(this.gravity) {
            this.dy += 0.25;
        }

        if(this.x < this.R) {
            this.x = this.R;
        }

        if(this.x > canvasSizeX - this.R) {
            this.x = canvasSizeX - this.R;
        }

        if(this.y < this.R) {
            this.y = this.R;
        }

        if(this.y > canvasSizeY - this.R) {
            this.y = canvasSizeY - this.R;
            this.dy = 0;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.dx /= this.R;

        this.collide();
    }

    collide() {
        for(let i = 0; i < circle.length; i++) {
            if(this.index != i) {
                if(distance(this.x, this.y, circle[i].x, circle[i].y) < this.R + circle[i].R) {
                    let angle = getAngleFrom2Points(circle[i].x, circle[i].y, this.x, this.y);

                    let dis = distance(this.x, this.y, circle[i].x, circle[i].y);
                    let a = (this.R + circle[i].R) - dis;

                    this.x -= (Math.cos(angle) * a) / 2;
                    this.y -= (Math.sin(angle) * a) / 2;

                    circle[i].x += (Math.cos(angle) * a) / 2;
                    circle[i].y += (Math.sin(angle) * a) / 2;
                }
            }
        }
    }
}

// for(let i = 0; i < 1000; i++) {
//     circle[i] = new Obj(randomInteger(25, canvasSizeX - 25), randomInteger(25, canvasSizeY - 25), randomInteger(5, 25), "hsl(" + randomInteger(0, 255) + ", 100%, 50%)", false, i);
// }

function init() {
    console.log(canvasSizeX);
    console.log(canvasSizeY);
}

let time = 0;

function update() {
    time++;

    for(let i = 0; i < circle.length; i++) {
        circle[i].update();
    }

    if(clicked && time%1 == 0) {
        // circle.push(new Obj(mouseX, mouseY, randomInteger(5, 25), "hsl(" + randomInteger(0, 255) + ", 100%, 50%)", false, i));
        for(let i = 0; i < 5; i++) {
            circle.push(new Obj(mouseX + 5 - randomInteger(0, 10), mouseY + 5 - randomInteger(0, 10), 10, "hsl(" + randomInteger(0, 255) + ", 100%, 50%)", false, i));
        }
    }

    for(let x = 0; x < table.length; x++) {
        for(let y = 0; y < table[x].length; y++) {
            table[x][y] = [];
            for(let i = 0; i < circle.length; i++) {
                if(Math.floor(circle[i].x/biggestR) == x && Math.floor(circle[i].y/biggestR) == y) {
                    table[x][y].push(i);
                }
            }
        }
    }

    // for(let x = 0; x < table.length; x++) {
    //     for(let y = 0; y < table[x].length; y++) {
    //         for(let i = 0; i < table[x][y].length; i++) {
    //             for(let j = 0; j < table[x][y].length; j++) {
    //                 if(i != j) {
    //                     if(distance(circle[table[x][y][i]].x, circle[table[x][y][i]].y, circle[table[x][y][j]].x, circle[table[x][y][j]].y) < circle[table[x][y][i]].R + circle[table[x][y][j]].R) {
    //                         let angle = getAngleFrom2Points(circle[table[x][y][j]].x, circle[table[x][y][j]].y, circle[table[x][y][i]].x, circle[table[x][y][i]].y);

    //                         let dis = distance(circle[table[x][y][i]].x, circle[table[x][y][i]].y, circle[table[x][y][j]].x, circle[table[x][y][j]].y);
    //                         let a = (circle[table[x][y][i]].R + circle[table[x][y][j]].R) - dis;

    //                         circle[table[x][y][i]].x -= (Math.cos(angle) * a) / 2;
    //                         circle[table[x][y][i]].y -= (Math.sin(angle) * a) / 2;

    //                         circle[table[x][y][j]].x += (Math.cos(angle) * a) / 2;
    //                         circle[table[x][y][j]].y += (Math.sin(angle) * a) / 2;
    //                     }
    //                 }
    //             }

    //             for(let x2 = -1; x2 <= 1; x2++) {
    //                 for(let y2 = -1; y2 <= 1; y2++) {
    //                     if(table[x + x2][y + y2] != undefined) {
    //                         for(let k = 0; k < table[x + x2][y + y2].length; k++) {
    //                             if(distance(circle[table[x][y][i]].x, circle[table[x][y][i]].y, circle[table[x + x2][y + y2][k]].x, circle[table[x + x2][y + y2][k]].y) < circle[table[x][y][i]].R + circle[table[x + x2][y + y2][k]].R) {
    //                                 let angle = getAngleFrom2Points(circle[table[x + x2][y + y2][k]].x, circle[table[x + x2][y + y2][k]].y, circle[table[x][y][i]].x, circle[table[x][y][i]].y);

    //                                 let dis = distance(circle[table[x][y][i]].x, circle[table[x][y][i]].y, circle[table[x + x2][y + y2][k]].x, circle[table[x + x2][y + y2][k]].y);
    //                                 let a = (circle[table[x][y][i]].R + circle[table[x + x2][y + y2][k]].R) - dis;

    //                                 circle[table[x][y][i]].x -= (Math.cos(angle) * a) / 2;
    //                                 circle[table[x][y][i]].y -= (Math.sin(angle) * a) / 2;

    //                                 circle[table[x + x2][y + y2][k]].x += (Math.cos(angle) * a) / 2;
    //                                 circle[table[x + x2][y + y2][k]].y += (Math.sin(angle) * a) / 2;
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
}

function draw() {
    for(let i = 0; i < circle.length; i++) {
        circle[i].draw();
    }
}

function getAngleFrom2Points(x1, y1, x2, y2) {
    return Math.atan2(y1 - y2, x1 - x2);
}

let clicked = false;

function mousedown() {
    clicked = true;
}

function mouseup() {
    clicked = false;
}