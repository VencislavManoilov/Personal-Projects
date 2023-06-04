let pointX = [],
    pointY = [],
    brPoints = 10,
    size = 50,
    brSvyrzani = 0,
    svyrzani1 = [],
    svyrzani2 = [],
    fixedUpdateTime = 100,
    distanse = 2.5,
    werePointX = [],
    werePointY = [],
    speed = 35,
    activaded = [],
    izbran1 = 0,
    rules = false
;

svyrzani1 = [0, 1, 1, 6, 3, 1];
svyrzani2 = [3, 3, 0, 5, 3, 5];
brSvyrzani = 6;

for(i=0; i<brPoints; i++) {
    pointX[i] = randomInteger(window.innerWidth-50);
    werePointX[i] = pointX[i];

    pointY[i] = randomInteger(window.innerHeight-50);
    werePointY[i] = pointY[i];

    activaded[i] = false;
}

setInterval(FixedUpdate, fixedUpdateTime);

function update() {
    for(i=0; i<brPoints; i++) {
        pointX[i] += (werePointX[i] - pointX[i])/speed;
        pointY[i] += (werePointY[i] - pointY[i])/speed;

        if(activaded[i]) {
            pointX[i] = mouseX - size/2;
            pointY[i] = mouseY - size/2;

            werePointX[i] = pointX[i];
            werePointY[i] = pointY[i];
        }

        if(pointX[i] < 0) {
            pointX[i] = 0;
            werePointX[i] = 0;
        }if(pointX[i] > window.innerWidth - size) {
            pointX[i] = window.innerWidth - size;
            werePointX[i] = window.innerWidth - size;
        }if(pointY[i] < 0) {
            pointY[i] = 0;
            werePointY[i] = 0;
        }if(pointY[i] > window.innerHeight - size) {
            pointY[i] = window.innerHeight - size;
            werePointY[i] = window.innerHeight - size;
        }
    }
}

function FixedUpdate() {
    for(i=0; i<brPoints; i++) {
        if(!activaded[i]) {
            werePointX[i] += randomInteger(distanse) - randomInteger(distanse);
            werePointY[i] += randomInteger(distanse) - randomInteger(distanse);
        }
    }
}

function draw() {
    for(i=0; i<brPoints; i++) {
        drawImage(ballOrTree, pointX[i], pointY[i], size, size);

        for(s=0; s<brSvyrzani; s++) {
            drawLine(pointX[svyrzani1[s]] + size/2, pointY[svyrzani1[s]] + size/2, pointX[svyrzani2[s]] + size/2, pointY[svyrzani2[s]] + size/2);
        }
    }

    context.fillStyle = 'Orange';
    context.font = '25px Arial';

    context.fillText("R to show/hide rules", 10, 10);
    if(rules) {
        context.fillText("Space to connect points", 10, 40);
        context.fillText("Mouse to change point position", 10 , 70);
        context.fillText("Enter to add point", 10, 100);
        context.fillText("Backspace to delete point", 10, 130);
        context.fillText("Q to reset generation", 10, 160);
        context.fillText("Delete to delete all connects", 10, 190);
    }
}

function mousedown() {
    let totalActivaded = 0;
    for(i=0; i<brPoints; i++) {
        if(areColliding(pointX[i], pointY[i], size, size,  mouseX, mouseY, 1, 1) && totalActivaded <= 0) {
            activaded[i] = true;
            totalActivaded++;
        }
    }
}

function mouseup() {
    for(i=0; i<brPoints; i++) {
        if(areColliding(pointX[i], pointY[i], size, size,  mouseX, mouseY, 1, 1)) {
            activaded[i] = false;
        }
    }
}

function keyup(key) {
    for(i=0; i<brPoints; i++) {
        if(areColliding(mouseX, mouseY, 1, 1,  pointX[i], pointY[i], size, size)  &&  key == 32) {
            if(izbran1 == 0) {
                svyrzani1[brSvyrzani] = i;
                izbran1 = 1
            } else {
                svyrzani2[brSvyrzani] = i;
                brSvyrzani++;

                izbran1 = 0;
            }
        }
    }

    //console.log(key);

    if(key == 13) {
        pointX[brPoints] = mouseX - size/2;
        werePointX[brPoints] = pointX[brPoints];

        pointY[brPoints] = mouseY - size/2;
        werePointY[brPoints] = pointY[brPoints];

        activaded[brPoints] = false;

        brPoints++;
    } else if(key == 8) {
        for(i=0; i<brPoints; i++) {
            if(areColliding(mouseX, mouseY, 1, 1,  pointX[i], pointY[i], size, size)) {
                pointX[i] = pointX[brPoints - 1];
                werePointX[i] = werePointX[brPoints - 1];

                pointY[i] = pointY[brPoints - 1];
                werePointY[i] = werePointY[brPoints - 1];

                activaded[i] = activaded[brPoints - 1];

                brPoints--;
            }
        }
    } else if(key == 82) {
        rules = !rules;
    } else if(key == 81) {
        location.reload();
    } else if(key == 46) {
        for(s=0; s<brSvyrzani; s++) {
            svyrzani1[s] = -1;
            svyrzani2[s] = -1;
            brSvyrzani = 0;
        }
    }
}