let dots = [], springs = [], timeToDis = 3, time = 0, opacity = 100;

changeBg("Black");

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
        this.friction = 1.025;
        this.k = 0.01;
        this.dy = 0;
    }

    update() {
        this.dotAccel = (Math.hypot(this.dot1.x - this.dot2.x, this.dot1.y - this.dot2.y) - this.restLen) * this.k;
        this.dotAccel2 = (Math.hypot(this.dot2.x - this.dot1.x, this.dot2.y - this.dot1.y) - this.restLen) * this.k;

        // this.dotAccel -= this.friction * this.dotSpeedX;
        // this.dotAccel -= this.friction * this.dotSpeedY;

        this.dotSpeedX += Math.cos(Math.atan2(this.dot1.y - this.dot2.y, this.dot1.x - this.dot2.x)) * this.dotAccel;
        this.dotSpeedY += Math.sin(Math.atan2(this.dot1.y - this.dot2.y, this.dot1.x - this.dot2.x)) * this.dotAccel + 0.05;
        if(this.dot2.y > windowSizeY) {
            this.dot2.y = windowSizeY;
            this.dotSpeedY = -this.dotSpeedY/1.1;
        }
        this.dotSpeedX /= this.friction;
        this.dotSpeedY /= this.friction;

        // this.dotAccel -= this.friction * this.dotSpeedX;
        // this.dotAccel -= this.friction * this.dotSpeedY;

        this.dotSpeedX2 += Math.cos(Math.atan2(this.dot2.y - this.dot1.y, this.dot2.x - this.dot1.x)) * this.dotAccel2;
        this.dotSpeedY2 += Math.sin(Math.atan2(this.dot2.y - this.dot1.y, this.dot2.x - this.dot1.x)) * this.dotAccel2 + 0.05;
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

for(let i = 0; i < 25; i++) {
    dots[i] = new Dot(windowSizeX/2, 100 + i, i);
}

for(let i = 0; i < dots.length - 1; i++) {
    springs.push(new Spring(dots[i], dots[i + 1], 1));
}

let lastX = windowSizeX/2 - windowSizeX/4, lastY = 100;

function update() {
    time += 1;

    for(let i = 0; i < springs.length; i++) {
        springs[i].update();
    }

    if(Input.GetKey(KeyCode.Space)) {
        lastX = mouseX;
        lastY = mouseY;
    }
    dots[0].x = lastX;
    dots[0].y = lastY;

    dots[dots.length - 1].x = mouseX;
    dots[dots.length - 1].y = mouseY;
}

function draw() {
    context.lineCap = "round";
    for(let i = 0; i < springs.length; i++) {
        // springs[i].draw();
        drawLine(dots[i].x, dots[i].y, dots[i + 1].x, dots[i + 1].y, 10, "SaddleBrown");
    }

    if(time < timeToDis * 250) {
        opacity = 100;
    } else {
        opacity = 100 - (time - timeToDis * 250)
    }

    transparent(opacity);
    strokeText("Hold space to move the start of the rope.", 10, 10, 25, "Arial Black", 1, "white");

    UpdateParticles();
}