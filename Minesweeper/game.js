function update() { };
const RAZMER_POLE = {
    x: 10,
    y: 10
};
const BROI_MINI = 10;
 
let pole = [];
let otvoreno = [];
let broiMini = [];
let flag = [];
let pobeda = false;
let zaguba = false;
let po4nAhLi = false;
 
for (let i = 0; i < RAZMER_POLE.x; i++) {
    pole[i] = [];
    otvoreno[i] = [];
    broiMini[i] = [];
    flag[i] = [];
    for (let j = 0; j < RAZMER_POLE.y; j++) {
        pole[i][j] = 0;
        otvoreno[i][j] = false;
        broiMini[i][j] = 0;
        flag[i][j] = false;
    }
}
 
function otvori(x, y) {
    otvoreno[x][y] = true
    if (broiMini[x][y] == 0) {
        for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <= 1; dj++) {
                if (x + di >= 0 &&
                    x + di < RAZMER_POLE.x &&
                    y + dj >= 0 &&
                    y + dj < RAZMER_POLE.y) {
                    if (!otvoreno[x + di][y + dj]) {
                        otvori(x + di, y + dj);
                    }
                }
            }
        }
    }
}
 
function draw() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, 600, 600);
 
    for (let i = 0; i < RAZMER_POLE.x; i++) {
        for (let j = 0; j < RAZMER_POLE.y; j++) {
            if (otvoreno[i][j]) {
                context.fillStyle = '#00ff00';
                context.fillRect(i * 600 / RAZMER_POLE.x, j * 600 / RAZMER_POLE.y, 600 / RAZMER_POLE.x, 600 / RAZMER_POLE.y);
 
                if (broiMini[i][j] != 0) {
                    context.font = '30px Tahoma';
                    context.fillStyle = '#000000';
                    context.fillText(broiMini[i][j],
                        i * 600 / RAZMER_POLE.x + 10,
                        j * 600 / RAZMER_POLE.y + 30);
                }
            } else if (flag[i][j]) {
                context.fillStyle = '#ff0000';
                context.fillRect(i * 600 / RAZMER_POLE.x, j * 600 / RAZMER_POLE.y, 600 / RAZMER_POLE.x, 600 / RAZMER_POLE.y);
            } else if (zaguba && pole[i][j] == 1) {
                context.fillStyle = '#ff00ff';
                context.fillRect(i * 600 / RAZMER_POLE.x, j * 600 / RAZMER_POLE.y, 600 / RAZMER_POLE.x, 600 / RAZMER_POLE.y);
            }
            context.strokeStyle = '#ffffff';
            context.lineWidth = 3;
            context.strokeRect(i * 600 / RAZMER_POLE.x, j * 600 / RAZMER_POLE.y, 600 / RAZMER_POLE.x, 600 / RAZMER_POLE.y);
        }
    }
}
 
window.oncontextmenu = function () {
    return false;
}
 
function mouseup(e) {
    let izborX = Math.floor(mouseX / (600 / RAZMER_POLE.x));
    let izborY = Math.floor(mouseY / (600 / RAZMER_POLE.y));
    if (!po4nAhLi) {
        po4nAhLi = true;
        for (let i = 0; i < BROI_MINI; i++) {
            let minaX, minaY;
            do {
                minaX = randomInteger(RAZMER_POLE.x);
                minaY = randomInteger(RAZMER_POLE.y);
            } while (pole[minaX][minaY] == 1 ||
                (minaX == izborX && minaY == izborY));
            pole[minaX][minaY] = 1;
        }
 
        for (let i = 0; i < RAZMER_POLE.x; i++) {
            for (let j = 0; j < RAZMER_POLE.y; j++) {
                for (let di = -1; di <= 1; di++) {
                    for (let dj = -1; dj <= 1; dj++) {
                        if (i + di >= 0 &&
                            i + di < RAZMER_POLE.x &&
                            j + dj >= 0 &&
                            j + dj < RAZMER_POLE.y) {
                            broiMini[i][j] += pole[i + di][j + dj];
                        }
                    }
                }
            }
        }
    }
    if (!zaguba) {
        if (e.which == 3) {
            flag[izborX][izborY] = !flag[izborX][izborY];
        } else if (!flag[izborX][izborY]) {
            if (pole[izborX][izborY] == 1) {
                zaguba = true;
                alert('tapak nedei opitva pak!!! >:D');
                for (let i = 0; i < RAZMER_POLE.x; i++) {
                    for (let j = 0; j < RAZMER_POLE.y; j++) {
                        flag[i][j] = false;
                    }
                }
                return;
            }
            otvori(izborX, izborY);
 
            pobeda = true;
            for (let i = 0; i < RAZMER_POLE.x; i++) {
                for (let j = 0; j < RAZMER_POLE.y; j++) {
                    if (pole[i][j] == 0 && !otvoreno[i][j])
                        pobeda = false;
                }
            }
            if (pobeda)
                alert('bravo pe4el6 boi s japanka');
        }
    }
}