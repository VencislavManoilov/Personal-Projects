// For bullets
let brPatroni = 0,
    patronX = [],
    patronY = [],
    patronDx = [],
    patronDy = [],
    sizePatron = 10,
    spam = false
;

// For movement
let sizeX = 50,
    sizeY = 50,
    myX = window.innerWidth/2 - sizeX/2,
    myY = window.innerHeight/2 - sizeY/2,
    dx = 0,
    dy = 0,
    speed = 0.15
;

// other
let barier = true;

function update() {
    dx /= 1.05; myX += dx;
    dy /= 1.05; myY += dy;

    for(i=0; i<brPatroni; i++) {
        patronX[i] += patronDx[i];
        patronY[i] += patronDy[i];
    }

    if(isKeyPressed[65]) {
        dx -= speed;
    } else if(isKeyPressed[68]) {
        dx += speed;
    }

    if(isKeyPressed[87]) {
        dy -= speed;
    } else if(isKeyPressed[83]) {
        dy += speed;
    }

    if(barier) {
        if(myX < 12.5) {
            myX += (12.5 - myX)/10;
        }
        if(myX > window.innerWidth-62.5) {
            myX += (window.innerWidth-62.5 - myX)/10;
        }
        
        if(myY < 12.5) {
            myY += (12.5 - myY)/10;
        }
        if(myY > window.innerHeight-62.5) {
            myY += (window.innerHeight-62.5 - myY)/10;
        }
    }

    if(spam) {
        // patronX[brPatroni] = myX + sizeX/2 - sizePatron/2;
        // patronY[brPatroni] = myY + sizeY/2 - sizePatron/2;
        // patronDx[brPatroni] = -(myX + sizeX/2 - mouseX)/100;
        // patronDy[brPatroni] = -(myY + sizeY/2 - mouseY)/100;
        // brPatroni++;
    }
}

function draw() {
    drawImage(backStars, 0, 0, window.innerWidth, window.innerHeight);
    drawImage(box, myX, myY, 50, 50);

    for(i=0; i<brPatroni; i++) {
        drawImage(ballOrTree, patronX[i], patronY[i], 10, 10);
    }

    context.strokeStyle = 'cyan';

    if(areColliding(window.innerWidth/2-75, 30, 100, 25,  mouseX, mouseY, 1, 1)) {
        context.fillStyle = 'orange';
    } else {
        context.fillStyle = 'yellow';
    }
    context.font = '25px Arial';
    context.fillText("Бариера", window.innerWidth/2-75, 30);

    if(barier) {
        context.lineWidth = 25;
        context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
    }
}

function mousedown() {
    spam = true;
    patronX[brPatroni] = myX + sizeX/2 - sizePatron/2;
    patronY[brPatroni] = myY + sizeY/2 - sizePatron/2;
    patronDx[brPatroni] = -(myX + sizeX/2 - mouseX)/100;
    patronDy[brPatroni] = -(myY + sizeY/2 - mouseY)/100;
    brPatroni++;
}

function mouseup() {
    spam = false;

    if(areColliding(window.innerWidth/2-75, 30, 100, 25,  mouseX, mouseY, 1, 1)) {
        barier = !barier;
    }
}