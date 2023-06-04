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
        this.k = 0.001;
        this.dy = 0;
    }

    update() {
        this.dotAccel = (Math.hypot(this.dot1.x - this.dot2.x, this.dot1.y - this.dot2.y) - this.restLen) * this.k;
        this.dotAccel2 = (Math.hypot(this.dot2.x - this.dot1.x, this.dot2.y - this.dot1.y) - this.restLen) * this.k;

        // this.dotAccel -= this.friction * this.dotSpeedX;
        // this.dotAccel -= this.friction * this.dotSpeedY;

        this.dotSpeedX += Math.cos(Math.atan2(this.dot1.y - this.dot2.y, this.dot1.x - this.dot2.x)) * this.dotAccel;
        this.dotSpeedY += Math.sin(Math.atan2(this.dot1.y - this.dot2.y, this.dot1.x - this.dot2.x)) * this.dotAccel + 0.0025;
        if(this.dot2.y > windowSizeY) {
            this.dot2.y = windowSizeY;
            this.dotSpeedY = -this.dotSpeedY/1.1;
        }
        this.dotSpeedX /= this.friction;
        this.dotSpeedY /= this.friction;

        // this.dotAccel -= this.friction * this.dotSpeedX;
        // this.dotAccel -= this.friction * this.dotSpeedY;

        this.dotSpeedX2 += Math.cos(Math.atan2(this.dot2.y - this.dot1.y, this.dot2.x - this.dot1.x)) * this.dotAccel2;
        this.dotSpeedY2 += Math.sin(Math.atan2(this.dot2.y - this.dot1.y, this.dot2.x - this.dot1.x)) * this.dotAccel2 + 0.0025;
        if(this.dot1.y > windowSizeY) {
            this.dot1.y = windowSizeY;
            this.dotSpeedY2 = -this.dotSpeedY2/1.1;
        }
        this.dotSpeedX2 /= this.friction;
        this.dotSpeedY2 /= this.friction;

        this.dot2.x += this.dotSpeedX;
        this.dot2.y += this.dotSpeedY;

        this.dot1.x += this.dotSpeedX2;
        this.dot1.y += this.dotSpeedY2;
    }

    draw() {
        drawLine(this.dot1.x, this.dot1.y, this.dot2.x, this.dot2.y, 1, "Red");
        fillRect(this.dot2.x - 5, this.dot2.y - 5, 10, 10, "Black");
        fillRect(this.dot1.x - 5, this.dot1.y - 5, 10, 10, "Black");
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
        this.y += this.dy;

        if(this.y > windowSizeY) {
            this.dy = 0;
            this.touchingGrass = true;
        } else {
            this.touchingGrass = false;
        }
    }
}

let width = 6, heigth = 4;
for(let x = 0; x < width; x++) {
    for(let y = 0; y < heigth; y++) {
        dots.push(new Dot(500 + x * 50, 250 + y * 50, 1));
    }
}

for(let i = 0; i < dots.length; i++) {
    for(let j = 0; j < dots.length; j++) {
        if(i != j) {
            springs.push(new Spring(dots[i], dots[j], distance(dots[i].x, dots[i].y, dots[j].x, dots[j].y)));
        }
    }
}

let startDotLenght = dots.length;
for(let x = 0; x < width; x++) {
    for(let y = 0; y < heigth; y++) {
        dots.push(new Dot(800 + x * 50, 250 + y * 50, 1));
    }
}

for(let i = startDotLenght; i < dots.length; i++) {
    for(let j = startDotLenght; j < dots.length; j++) {
        if(i != j) {
            springs.push(new Spring(dots[i], dots[j], distance(dots[i].x, dots[i].y, dots[j].x, dots[j].y)));
        }
    }
}

function update() {
    for(let i = 0; i < springs.length; i++) {
        springs[i].update();
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

    // for(let i = 0; i < startDotLenght; i++) {
    //     for(let i2 = 0; i2 < startDotLenght; i2++) {
    //         if(i != i2) {
    //             for(let j = startDotLenght; j < dots.length; j++) {
    //                 for(let j2 = startDotLenght; j2 < dots.length; j2++) {
    //                     if(j != j2) {
    //                         if(intersects(dots[i].x, dots[i].y, dots[i2].x, dots[i2].y, dots[j].x, dots[j].y, dots[j2].x, dots[j2].y)) {
    //                             dots[i].x -= Math.cos(Math.atan2(dots[i].y - dots[j].y, dots[i].x - dots[j].x)) * 100;
    //                             dots[i].y -= Math.sin(Math.atan2(dots[i].y - dots[j].y, dots[i].x - dots[j].x)) * 100;
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

    let mindist = 15, maxdist = 350;
    // for(let i = 0; i < startDotLenght; i++) {
    //     for(let j = startDotLenght; j < dots.length; j++) {
    //         let dist = distance(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
    //         if(dist < mindist) {
    //             let angle = Math.atan2(dots[i].y - dots[j].y, dots[i].x - dots[j].x);
    //             dots[i].x += Math.cos(angle) * (mindist - dist);
    //             dots[i].y += Math.sin(angle) * (mindist - dist);

    //             dots[j].x -= Math.cos(angle) * (mindist - dist);
    //             dots[j].y -= Math.sin(angle) * (mindist - dist);
    //         }
    //     }
    // }
    for(let i = 0; i < dots.length; i++) {
        for(let j = 0; j < dots.length; j++) {
            let dist = distance(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
            if(dist < mindist) {
                let angle = Math.atan2(dots[i].y - dots[j].y, dots[i].x - dots[j].x);
                dots[i].x += Math.cos(angle) * (mindist - dist);
                dots[i].y += Math.sin(angle) * (mindist - dist);

                dots[j].x -= Math.cos(angle) * (mindist - dist);
                dots[j].y -= Math.sin(angle) * (mindist - dist);
            }
        }
    }

    for(let i = 0; i < springs.length; i++) {
        let dist = distance(springs[i].dot1.x, springs[i].dot1.y, springs[i].dot2.x, springs[i].dot2.y);
        if(dist > maxdist) {
            let angle = Math.atan2(springs[i].dot2.y - springs[i].dot1.y, springs[i].dot2.x - springs[i].dot1.x);
            springs[i].dot2.x = springs[i].dot1.x + Math.cos(angle) * maxdist;
            springs[i].dot2.y = springs[i].dot1.y + Math.sin(angle) * maxdist;
        }
    }
}

function draw() {
    // for(let i = 0; i < springs.length; i++) {
    //     springs[i].draw();
    // }

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

    context.beginPath();
    context.moveTo(dots[startDotLenght].x, dots[startDotLenght].y);
    for(let i = 1; i < heigth; i++) {
        context.lineTo(dots[i + startDotLenght].x, dots[i + startDotLenght].y);
    }

    for(let i = 0; i < width; i++) {
        context.lineTo(dots[heigth - 1 + i * heigth + startDotLenght].x, dots[heigth - 1 + i * heigth + startDotLenght].y);
    }

    for(let i = 0; i < heigth - 1; i++) {
        context.lineTo(dots[(width * heigth - 2) - i + startDotLenght].x, dots[(width * heigth - 2) - i + startDotLenght].y);
    }

    for(let i = 0; i < width; i++) {
        context.lineTo(dots[(width - 1) * heigth - heigth * i + startDotLenght].x, dots[(width - 1) * heigth - heigth * i + startDotLenght].y);
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

function intersects(a,b,c,d,p,q,r,s) {
    let det, gamma, lambda;
    det = (c - a) * (s - q) - (r - p) * (d - b);
    if (det === 0) {
        return false;
    } else {
        lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
        gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
        return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
    }
};