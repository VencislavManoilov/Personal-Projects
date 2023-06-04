let R = 125,
    cX = 100,
    cY = 100,
    clicked,
    brPoints = R * 2
;

function update() {
    brPoints = R*2;
}

function draw() {
    context.fillStyle = 'black';
    context.fillRect(cX + R, cY + R, 2, 2);

    for(x=0; x<brPoints; x++) {
        for(y=0; y<brPoints; y++) {
            if(isItInCircle(cX + x, cY + y, cX + R, cY + R, R)) {
                context.fillStyle = 'blue';
            } else {
                context.fillStyle = 'red';
            }

            context.fillRect(cX + x * 1, cY + y * 1, 1, 1);
        }
    }
}

function isItInCircle(x, y, cx, cy, r) {
    let distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
    return distancesquared <= r * r;
}

function keydown(key) {
    console.log(key)
    if(key == 38) {
        R++;
    } else if(key == 40) {
        R--;
    }
}