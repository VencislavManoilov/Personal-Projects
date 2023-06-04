let brKvadrati = 50, kvadratX = [], kvadratY = [], dy = [], tipKvadrat = [], kvadrat = [], transparansy = 0;

for(i=0; i<brKvadrati; i++) {
    kvadratX[i] = randomInteger(window.innerWidth/25) * 25;
    kvadratY[i] = randomInteger(100);
    kvadrat[i] = randomInteger(3);
    dy[i] = 0;
}

tipKvadrat[0] = 'white';
tipKvadrat[1] = 'pink';
tipKvadrat[2] = 'hotpink';

function update() {
    if(transparansy <= 1) {
        transparansy += 0.05/10;
    }

    for(i=0; i<brKvadrati; i++) {
        kvadratY[i] += dy[i];

        dy[i] += 0.0575;

        if(areColliding( kvadratX[i], kvadratY[i], 25, 25,  0, window.innerHeight, window.innerWidth, dy[i])) {
            dy[i] = 0;
        }
    }
}

function draw() {
    context.globalAlpha = transparansy;
    drawImage(PingVisionLogo, window.innerWidth/2 - 250, window.innerHeight/2 - 62.5, 500, 125);
    context.globalAlpha = 1;

    for(i=0; i<brKvadrati; i++) {
        context.fillStyle = tipKvadrat[kvadrat[i]];
        context.fillRect(kvadratX[i], kvadratY[i], 25, 25);
    }
}