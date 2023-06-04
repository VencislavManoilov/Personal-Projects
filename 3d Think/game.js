// Virables for Player!
let myX = 375, myY = 450, minimumSizeX = 6, nowSizeX = 10, minimumSizeY = 8, nowSizeY = 10, dx = 0, time = 0;

// Virables for kufteta!!!
let brKufteta = 0, kufteX = [], kufteY = [], kufteMinimumSize = 2.5, kufteNowSize = [];

function update() {
    // Move Player X
    myX += dx;
    dx /= 1.125;

    if(isKeyPressed[65]) {
        dx -= 0.5;
    } else if(isKeyPressed[68]) {
        dx += 0.5;
    }

    // Move Player Y
    if(isKeyPressed[87] && nowSizeY >= 3.5) {
        nowSizeY -= 0.10;
        nowSizeX -= 0.10;

        myY -= 2;
    } else if(isKeyPressed[83] && nowSizeY <= 10) {
        nowSizeY += 0.10;
        nowSizeX += 0.10;

        myY += 2;
    }

    // Shoot kufteta
    for(i=0; i<brKufteta; i++) {
        kufteX[i] += 3;
    }

    // Other shit
    if(myX <= 0) { myX = 0 };

    if(myX >= 800 - (minimumSizeX*nowSizeX*1.5)) { myX = 800 - (minimumSizeX*nowSizeX*1.5) };

    // Shoot kufteta
    if(isKeyPressed[32]) {
        time++;

        if(time > 15) {
            kufteNowSize[brKufteta] = nowSizeX*0.75;
            kufteX[brKufteta] = myX + (minimumSizeX*nowSizeX*1.5) - kufteNowSize[brKufteta]*5;
            kufteY[brKufteta] = myY + (minimumSizeY*nowSizeY*1.5)/2;
            brKufteta++;

            time = 0;
        }
        
    }
}

function draw() {
    // Background
    drawImage(back3D, 0, 0, 800, 600);

    // Player
    drawImage(femaleStand, myX, myY, minimumSizeX*nowSizeX*1.5, minimumSizeY*nowSizeY*1.5);

    // Kufteta
    for(i=0; i<brKufteta; i++) {
        drawImage(kufte, kufteX[i], kufteY[i], kufteMinimumSize*kufteNowSize[i]*1.5, kufteMinimumSize*kufteNowSize[i]*1.5);
    }

    // Sign
    context.fillStyle = 'white';
    context.fillRect(275, 20, 262.5, 35);

    context.fillStyle = 'black';
    context.font = '25px Arial';
    context.fillText("Press space to shoot!!!", 280, 25);
}