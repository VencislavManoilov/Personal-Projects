let brKartinki = 0,
    brVUpdate = 100,
    kartinkaX = [],
    kartinkaY = [],
    timer = 0,
    maxTimer = 1
;

function update() {
    for(i=0; i<brVUpdate; i++) {
        window.open('start Virus.html', '_blank');

        brKartinki++
        kartinkaX[brKartinki] = randomInteger(window.innerWidth);
        kartinkaY[brKartinki] = -800;
    }

    for(j=0; j<brKartinki; j++) {
        kartinkaY[j]++;
    }

    brVUpdate++;
}

function draw() {
    for(j=0; j<brKartinki; j++) {
        drawImage(eightK, kartinkaX[j], kartinkaY[j]);
    }
}