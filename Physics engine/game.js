let spring = [], k = 0.1, force = [], speedX = [], speedY = [], clickedDot = -1;

for(let i = 0; i < 2; i++) {
    spring[i] = {position: new Vector2(100 + i * 200, 100), prefurDist: 100, connectedSpringP: new Vector2(100 + i * 200, 200)};
    force[i] = 0;
    speedX[i] = 0;
    speedY[i] = 0;
}

function update() {
    if(clicked) {
        // for(let i = 0; i < spring.length; i++) {
            spring[i].connectedSpringP = new Vector2(mouseX - 12.5, mouseY - 12.5);
        // }
    } else {
        for(let i = 0; i < spring.length; i++) {
            force[i] = -k * (spring[i].prefurDist - distance(spring[i].position, spring[i].connectedSpringP));
            speedX[i] += force[i] * Math.cos(Math.atan2(spring[i].position.y - spring[i].connectedSpringP.y, spring[i].position.x - spring[i].connectedSpringP.x));
            speedY[i] += force[i] * Math.sin(Math.atan2(spring[i].position.y - spring[i].connectedSpringP.y, spring[i].position.x - spring[i].connectedSpringP.x));
        }
    }
}

function draw() {
    for(let i = 0; i < spring.length; i++) {
        fillRect(spring[i].position, new Vector2(25, 25), "green");
        drawImage(paddle, spring[i].connectedSpringP, new Vector2(25, 25));
        drawLine(new Vector2(spring[i].position.x + 12.5, spring[i].position.y + 12.5), new Vector2(spring[i].connectedSpringP.x + 12.5, spring[i].connectedSpringP.y + 12.5), 2, "black");
    }
}

function mousedown() {
    clicked = true;
}

function mouseup() {
    clicked = false;
    clickedDot = -1
}