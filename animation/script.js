let brKvadrati = 0, kvadratX = [], kvadratY = [], dy = [], tipKvadrat = [], kvadrat = [], transparansy = 0, time = 25;

tipKvadrat[0] = 'white';
tipKvadrat[1] = 'pink';
tipKvadrat[2] = 'hotpink';

function update() {
    if(transparansy <= 1) {
        transparansy += 0.05/10;
    }

    for(i=0; i<brKvadrati; i++) {
        kvadratY[i] += dy[i];

        dy[i] += 0.025;
    }
	
	if(time >= 5) {
		kvadratX[brKvadrati] = randomInteger(window.innerWidth/25) * 25;
		kvadratY[brKvadrati] = -25;
		kvadrat[brKvadrati] = randomInteger(3);
		dy[brKvadrati] = 0;
		brKvadrati++;
		
		time = 0;
	}
	
	time++;
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