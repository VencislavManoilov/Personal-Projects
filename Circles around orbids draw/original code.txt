let circle = [], dot = [], showCircles = false;

let brSteps = randomInteger(1000, 10000),
    brCircles = randomInteger(3, 3),
    minR = randomInteger(100, 300/2),
    maxR = randomInteger(125, 750/2),
    rotationSpeed = randomInteger(0.001, 0.03),
    colorVar1 = randomInteger(50, 100),
    colorVar2 = randomInteger(45, 80)
;

class Circle {
    constructor(angle, R, speed, left, index) {
        this.angle = angle;

        if(index == 0) {
            this.position = new Vector2(windowSizeX/2, windowSizeY/2);
        } else {
            this.position = new Vector2(circle[index - 1].position.x + Math.cos(this.angle)*circle[index - 1].R, circle[index - 1].position.y + Math.sin(this.angle)*circle[index - 1].R);
        }

        this.R = R;
        this.speed = speed;
        this.left = left;
        this.index = index;
    }

    update() {
        this.position = new Vector2(windowSizeX/2, windowSizeY/2);

        if(this.left) {
            this.angle -= this.speed;
        } else {
            this.angle += this.speed;
        }

        if(this.index > 0) {
            this.position = new Vector2(circle[this.index - 1].position.x + Math.cos(this.angle)*circle[this.index - 1].R, circle[this.index - 1].position.y + Math.sin(this.angle)*circle[this.index - 1].R);
        }

        if(this.index == brCircles - 1) {
            dot[dot.length] = this.position;
        }
    }

    draw() {
        if(showCircles) {
            strokeArc(this.position, this.R, 2, "white")
        }
    }
}

for(let i = 0; i < brCircles; i++) {
    circle[i] = new Circle(randomInteger(0, 360), randomInteger(minR, maxR), randomOddInteger(0.001, 0.1), randomInteger(0, 1), i);
}

for(let j = 0; j < brSteps; j++) {
    for(let i = 0; i < brCircles; i++) {
        circle[i].update();
    }
}

changeBg("black");

function update() {

}

function draw() {
    for(let i = 0; i < brCircles; i++) {
        circle[i].draw();
    }

    for(let j = 1; j < dot.length; j++) {
        context.strokeStyle = "hsl(" + j + ", " + colorVar1 + "%, " + colorVar2 + "%)";
        // context.strokeStyle = "white";
        drawLine(dot[j], dot[j - 1], 2);
    }

    UpdateParticles();
}

function keydown(key) {
    if(key == KeyCode.Enter) {
        circle[brCircles] = new Circle(randomInteger(0, 360), randomInteger(minR, maxR), randomOddInteger(0.01, 0.1), randomInteger(0, 1), brCircles);
        brCircles++;

        dot.length = 0;
    }

    if(key == KeyCode.Space) {
        showCircles = !showCircles;
    }

    if(key == KeyCode.Backspace) {
        circle.length--;
        brCircles--;
        dot.length = 0;
    }
}