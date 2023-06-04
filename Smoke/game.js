let obj = [], time = 0;

let sizeSpeed = 1;

class Smoke {
    constructor(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = 50;
        this.angle = randomInteger(0, 360);
    }

    update() {
        this.size += sizeSpeed;

        this.x += this.dx;
        this.y += this.dy;

        this.dx /= 1.01;
        this.dy -= 0.01;
    }

    draw() {
        drawImage(smoke, this.x - this.size/2, this.y - this.size/2, this.size, this.size, this.angle, 15);
    }
}

// for(let i = 0; i < 10; i++) {
//     obj.push(new Smoke(randomInteger(0, windowSizeX), randomInteger(0, windowSizeY), 0, 0));
// }

changeBg("#444");

function update() {
    time++;

    for(let i = 0; i < obj.length; i++) {
        obj[i].update();

        if(obj[i].y + obj[i].size*1.5 < 0) {
            obj.splice(i, 1);
        }
    }

    if(time%1 == 0) {
        obj.push(new Smoke(250, windowSizeY/2 + 150, 5 + randomInteger(0, 3) - 1, -randomInteger(0, 3)));
    }
}

function draw() {
    for(let i = 0; i < obj.length; i++) {
        obj[i].draw();
    }
}