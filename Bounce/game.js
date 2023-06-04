let brBalls = 100, ball = [];

let arc = {
    position: new Vector2(windowSizeX/2, windowSizeY/2),
    R: 250,
}

class Ball {
    constructor(position, r, speedX, speedY, color) {
        this.position = position;
        this.r = r;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;

        this.dx = 1.1;
        this.dy = 0;
    }

    update() {
        if(distance(this.position, arc.position) > arc.R - this.r) {
            angle = getAngleFrom2Points(this.position, arc.position);
            let ballAngle = getAngleFrom2Points(this.position, new Vector2(this.position.x + this.speedX / this.dx, this.position.y + this.speedY + this.dy));
            let resultAngle = ballAngle + 90 - angle;
            this.speedX = MoveForwardX(resultAngle, 4);
            this.speedY = MoveForwardY(resultAngle, 4);
            this.dy = 0;
            this.position.x += MoveForwardX(angle, randomInteger(2, 5));
            this.position.y += MoveForwardY(angle, randomInteger(2, 5));
        }

        this.position.x += this.speedX / this.dx;
        this.position.y += this.speedY + this.dy;

        this.dy += 0.125;
    }

    draw() {
        fillArc(this.position, this.r, this.color);
    }
}

for(let i = 0; i < brBalls; i++) {
    angle = randomInteger(0, 360);
    ball[i] = new Ball(new Vector2(randomInteger(arc.position.x - MoveForwardX(angle, arc.R - 50), arc.position.x + MoveForwardX(angle, arc.R - 50)), randomInteger(arc.position.y - MoveForwardY(angle, arc.R - 50), arc.position.y + MoveForwardY(angle, arc.R - 50))), 25, randomInteger(-4, 4), randomInteger(-4, 4), "rgb(" + randomInteger(25, 255) + ", " + randomInteger(25, 255) + ", " + randomInteger(25, 255) + ")");
}

changeBg("black");

function update() {
    arc.position = new Vector2(windowSizeX/2, windowSizeY/2);

    for(let i = 0; i < brBalls; i++) {
        ball[i].update();
    }
}

function draw() {
    fillArc(arc.position, 2, "white");
    strokeArc(arc.position, arc.R, 2, "white");

    angle = getAngleFrom2Points(arc.position, new Vector2(mouseX, mouseY));
    drawLine(new Vector2(MoveForwardX(angle, arc.R + 100) + arc.position.x, MoveForwardY(angle, arc.R + 100) + arc.position.y), arc.position, 2, "white");

    for(let i = 0; i < brBalls; i++) {
        ball[i].draw();
    }

    UpdateParticles();
}

function getAngleFrom2Points(position1, position2) {
    return Math.atan2( position2.y - position1.y, position2.x - position1.x ) * ( 180 / Math.PI );
}