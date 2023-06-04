let dots = [], springs = [];

class Spring {
    constructor(dot1, dot2, restLen) {
        this.dot1 = dot1;
        this.dot2 = dot2;
        this.restLen = restLen;
        this.dotAccel = 0;
        this.dotSpeedX = 0;
        this.dotSpeedY = 0;
        this.dotAccel2 = 0;
        this.dotSpeedX2 = 0;
        this.dotSpeedY2 = 0;
        this.friction = 1.02;
        this.k = 0.01;
        this.dy = 0;
    }

    update() {
        this.dotAccel = (Math.hypot(this.dot1.x - this.dot2.x, this.dot1.y - this.dot2.y) - this.restLen) * this.k;
        this.dotAccel2 = (Math.hypot(this.dot2.x - this.dot1.x, this.dot2.y - this.dot1.y) - this.restLen) * this.k;

        // this.dotAccel -= this.friction * this.dotSpeedX;
        // this.dotAccel -= this.friction * this.dotSpeedY;

        this.dotSpeedX += Math.cos(Math.atan2(this.dot1.y - this.dot2.y, this.dot1.x - this.dot2.x)) * this.dotAccel;
        this.dotSpeedY += Math.sin(Math.atan2(this.dot1.y - this.dot2.y, this.dot1.x - this.dot2.x)) * this.dotAccel + 0.025;
        if(this.dot2.y > windowSizeY) {
            this.dot2.y = windowSizeY;
            this.dotSpeedY = -this.dotSpeedY/1.1;
        }
        this.dotSpeedX /= this.friction;
        this.dotSpeedY /= this.friction;

        // this.dotAccel -= this.friction * this.dotSpeedX;
        // this.dotAccel -= this.friction * this.dotSpeedY;

        this.dotSpeedX2 += Math.cos(Math.atan2(this.dot2.y - this.dot1.y, this.dot2.x - this.dot1.x)) * this.dotAccel2;
        this.dotSpeedY2 += Math.sin(Math.atan2(this.dot2.y - this.dot1.y, this.dot2.x - this.dot1.x)) * this.dotAccel2 + 0.025;
        if(this.dot1.y > windowSizeY) {
            this.dot1.y = windowSizeY;
            this.dotSpeedY2 = -this.dotSpeedY2/1.1;
        }

        if(this.dot1.x > windowSizeX) {
            this.dot1.x = windowSizeX;
            this.dotSpeedX2 = -this.dotSpeedX2/1.1;
        }


        if(this.dot1.y < 0) {
            this.dot1.y = 0;
            this.dotSpeedY2 = -this.dotSpeedY2/1.1;
        }

        if(this.dot1.x < 0) {
            this.dot1.x = 0;
            this.dotSpeedX2 = -this.dotSpeedX2/1.1;
        }

        this.dotSpeedX2 /= this.friction;
        this.dotSpeedY2 /= this.friction;
    }

    updatePosition() {
        this.dot2.x += this.dotSpeedX;
        this.dot2.y += this.dotSpeedY;

        this.dot1.x += this.dotSpeedX2;
        this.dot1.y += this.dotSpeedY2;
    }

    draw() {
        drawLine(this.dot1.x, this.dot1.y, this.dot2.x, this.dot2.y, 1, "Red");
        fillRect(this.dot2.x - 5, this.dot2.y - 5, 10, 10, "White");
        fillRect(this.dot1.x - 5, this.dot1.y - 5, 10, 10, "White");
    }
}

class Dot {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.startX = x;
        this.startY = y;
        this.index = index;
        this.dy = 0;
        this.touchingGrass = false;
    }

    update() {
        // if(this.index > 0) {
        //     this.x = this.startX;
        //     this.y = this.startY;
        // }

        // this.dy += 0.05;
        this.y += this.dy;

        if(this.y > windowSizeY) {
            // this.y = windowSizeY;
            this.dy = 0;
            this.touchingGrass = true;
        } else {
            this.touchingGrass = false;
        }
    }
}

let aroundDots = 50, width = 6, heigth = 4;
for(let x = 0; x < width; x++) {
    for(let y = 0; y < heigth; y++) {
        dots.push(new Dot(500 + x * 50, 250 + y * 50, 1));
    }
}

for(let i = 0; i < dots.length - 4; i++) {
    // springs.push(new Spring(dots[i], dots[i + 4], 50));
    // if((i + 1)%4 != 0) {
    //     springs.push(new Spring(dots[i], dots[i + 1], 50));
    // }
    // if((i + 1)%4 != 0) {
    //     let strong = distance(dots[i].x, dots[i].y, dots[i + 5].x, dots[i + 5].y);
    //     springs.push(new Spring(dots[i], dots[i + 5], strong));
    // }
    // if(i > 0 && i%4 != 0) {
    //     let strong = distance(dots[i].x, dots[i].y, dots[i + 3].x, dots[i + 3].y);
    //     springs.push(new Spring(dots[i], dots[i + 3], strong));
    // }
}

for(let i = 20; i < 23; i++) {
    springs.push(new Spring(dots[i], dots[i + 1], 50));
}

for(let i = 0; i < dots.length; i++) {
    for(let j = 0; j < dots.length; j++) {
        if(i != j) {
            springs.push(new Spring(dots[i], dots[j], distance(dots[i].x, dots[i].y, dots[j].x, dots[j].y)));
        }
    }
}

// for(let i = 0; i < aroundDots; i++) {
//     dots.push(new Dot(windowSizeX/2 + Math.cos(((360 / aroundDots) * i) / 180 * Math.PI) * 150, windowSizeY/2 + Math.sin(((360 / aroundDots) * i) / 180 * Math.PI) * 150, i + 1));

//     // springs.push(new Spring(dots[0], dots[i + 1], 150));
// }

// // let strong = distance(250 + Math.cos(((360 / aroundDots) * 0) / 180 * Math.PI) * 150, 250 + Math.sin(((360 / aroundDots) * 0) / 180 * Math.PI) * 150,  250 + Math.cos(((360 / aroundDots) * 1) / 180 * Math.PI) * 150, 250 + Math.sin(((360 / aroundDots) * 1) / 180 * Math.PI) * 150);
// // for(let i = 1; i < dots.length - 1; i++) {
// //     springs.push(new Spring(dots[i], dots[i + 1], strong));
// // }

// // springs.push(new Spring(dots[dots.length - 1], dots[1], strong))

// let offset = 20;
// for(let j = 0; j < offset - 1; j += 4) {
//     for(let i = 0; i < dots.length; i++) {
//         if(i < dots.length - 1) {
//             let strong = distance(dots[i].x, dots[i].y, dots[i + 1].x, dots[i + 1].y);
//             springs.push(new Spring(dots[i], dots[i + 1], strong));
//         } else {
//             let strong = distance(dots[i].x, dots[i].y, dots[0].x, dots[0].y);
//             springs.push(new Spring(dots[i], dots[0], strong));
//         }

//         if(i < dots.length - (offset - j)) {
//             let strong = distance(dots[i].x, dots[i].y, dots[i + (offset - j)].x, dots[i + (offset - j)].y);
//             springs.push(new Spring(dots[i], dots[i + (offset - j)], strong));
//         }
//     }

//     for(let i = 0; i < (offset - j); i++) {
//         let strong = distance(dots[dots.length - (offset - j) + i].x, dots[dots.length - (offset - j) + i].y, dots[i].x, dots[i].y);
//         springs.push(new Spring(dots[dots.length - (offset - j) + i], dots[i], strong));
//     }
// }

// dots.push(new Dot(250, 250));
// dots.push(new Dot(250, 350));

// springs.push(new Spring(dots[0], dots[1], 150));

changeBg("black");

function update() {
    for(let i = 0; i < springs.length; i++) {
        springs[i].update();
    }

    for(let i = 0; i < springs.length; i++) {
        springs[i].updatePosition();
    }

    if(Input.GetKey(KeyCode.Space)) {
        dots[0].x = mouseX;
        dots[0].y = mouseY;

        for(let i = 0; i < dots.length; i++) {
            dots[i].dy = 0;
        }
    }

    for(let i = 0; i < dots.length; i++) {
        dots[i].update();
    }
}

function draw() {
    // for(let i = 0; i < springs.length; i++) {
    //     springs[i].draw();
    // }

    // context.beginPath();
    // context.moveTo(dots[0].x, dots[0].y);
    // for(let i = 1; i < dots.length; i++) {
    //     context.lineTo(dots[i].x, dots[i].y);
    // }
    // context.fillStyle = "hotpink";
    // context.fill();

    context.beginPath();
    context.moveTo(dots[0].x, dots[0].y);
    for(let i = 1; i < heigth; i++) {
        context.lineTo(dots[i].x, dots[i].y);
    }

    for(let i = 0; i < width; i++) {
        context.lineTo(dots[heigth - 1 + i * heigth].x, dots[heigth - 1 + i * heigth].y);
    }

    for(let i = 0; i < heigth - 1; i++) {
        context.lineTo(dots[(width * heigth - 2) - i].x, dots[(width * heigth - 2) - i].y);
    }

    for(let i = 0; i < width; i++) {
        context.lineTo(dots[(width - 1) * heigth - heigth * i].x, dots[(width - 1) * heigth - heigth * i].y);
    }

    context.fillStyle = "green";
    context.fill();
}

function keydown(key) {
    if(key == KeyCode.Enter) {
        for(let i = 0; i < dots.length; i++) {
            dots[i].y -= 500;
        }
    }
}