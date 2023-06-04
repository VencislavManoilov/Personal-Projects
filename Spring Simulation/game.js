let spring1 = {
    position: new Vector2(250, 250),
    size: new Vector2(25, 25)
}

let spring2 = {
    position: new Vector2(250, 350),
    size: new Vector2(25, 25),
    maxDistance: 0,
    k: 0.01,
}

function update() {
    if(clicked) {
        spring2.position = new Vector2(mouseX - spring2.size.x/2, mouseY - spring2.size.y/2);
    } else {
        spring2.position.x = ((spring1.position.x - spring2.position.x) - spring2.maxDistance)*spring2.k;
        spring2.position.y = ((spring1.position.y - spring2.position.y) - spring2.maxDistance)*spring2.k;
    }
}

function draw() {
    fillRect(spring1.position, spring1.size, "black");
    drawLine(new Vector2(spring1.position.x + spring1.size.x/2, spring1.position.y + spring1.size.y/2), new Vector2(spring2.position.x + spring2.size.x/2, spring2.position.y + spring2.size.y/2), 2, "black");
    fillRect(spring2.position, spring2.size, "black");
}

function mousedown() {
    if(areColliding(spring2.position, spring2.size,  new Vector2(mouseX, mouseY), new Vector2(1, 1))) {
        clicked = true;
    }
}

function mouseup() {
    clicked = false;
}