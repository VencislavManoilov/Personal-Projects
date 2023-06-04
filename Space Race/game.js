let playerX=100,playerY=window.innerHeight-100,playerX2=350,playerY2=window.innerHeight-100,dx=0,dy=0,dx2=0,dy2=0,byrzinaNaSpirane=1.1,speedPlayers=0.25,brVragove=0,vragX=[],vragY=[],posoka=[],time=0,KolkoMilisec=20,score=0,score2=0,maxTichki=3,brPatroni=0,patronX=[],patronY=[],brPozvoleni=10,izpolzvani=0,izpolzvani2=0;

function update() {
	playerX += dx;
	playerY += dy;
	playerX2 += dx2;
	playerY2 += dy2;

	dx /= byrzinaNaSpirane;
	dy /= byrzinaNaSpirane;
	dx2 /= byrzinaNaSpirane;
	dy2 /= byrzinaNaSpirane;

	//left and right
	if(isKeyPressed[65]) {
		dx -= speedPlayers;
	} else if(isKeyPressed[68]) {
		dx += speedPlayers;
	}

	if(isKeyPressed[37]) {
		dx2 -= speedPlayers;
	} else if(isKeyPressed[39]) {
		dx2 += speedPlayers;
	}

	//up and down
	if(isKeyPressed[87]) {
		dy -= speedPlayers;
	} else if(isKeyPressed[83]) {
		dy += speedPlayers;
	}

	if(isKeyPressed[38]) {
		dy2 -= speedPlayers;
	} else if(isKeyPressed[40]) {
		dy2 += speedPlayers;
	}

	//player_1
	if(playerX < 0) {
		playerX = 0;
	} else if(playerX + 50 > 250) {
		playerX = 200;
	} else if(playerY > window.innerHeight + 75) {
		playerY = window.innerHeight + 75;
	}

	//player_2
	if(playerX2 < 250) {
		playerX2 = 250;
	} else if(playerX2 + 50 > 500) {
		playerX2 = 450;
	} else if(playerY2 > window.innerHeight + 75) {
		playerY2 = window.innerHeight + 75;
	}

	//vragove spawner
	time++
	if(time >= KolkoMilisec) {
		brVragove++;
		posoka[brVragove] = randomInteger(2);
		if(posoka[brVragove] == 0) {
			vragX[brVragove] = -7.5;
		} else if(posoka[brVragove] == 1) {
			vragX[brVragove] = 507.5;
		}
		vragY[brVragove] = randomInteger(window.innerHeight-125);

		time = 0;
	}

	for(i=0; i<brVragove; i++) {
		if(posoka[i] == 0) {
			vragX[i] += 2;
		} else if(posoka[i] == 1) {
			vragX[i] -= 2;
		}

		if(areColliding( playerX, playerY, 50, 75,  vragX[i], vragY[i], 7.5, 7.5)) {
			playerY = window.innerHeight + 75;
			izpolzvani = 0;
		}
		if(areColliding( playerX2, playerY2, 50, 75,  vragX[i], vragY[i], 7.5, 7.5)) {
			playerY2 = window.innerHeight + 75;
			izpolzvani2 = 0;
		}

		if(vragX[i] < -100) {
			vragX[i] = vragX[brVragove];
			vragY[i] = vragY[brVragove];
			posoka[i] = posoka[brVragove];
			brVragove--;
		} else if(vragX[i] > 600) {
			vragX[i] = vragX[brVragove];
			vragY[i] = vragY[brVragove];
			posoka[i] = posoka[brVragove];
			brVragove--;
		}

		if(vragX[i] < -10) {
			vragX[i] = vragX[brVragove];
			vragY[i] = vragY[brVragove];
			posoka[i] = posoka[brVragove];
			brVragove--;
		} else if(vragX[i] > 510) {
			vragX[i] = vragX[brVragove];
			vragY[i] = vragY[brVragove];
			posoka[i] = posoka[brVragove];
			brVragove--;
		}
	}

	//score sistem
	if(playerY < -75) {
		score++;
		playerY = window.innerHeight + 75;
	}

	if(playerY2 < -75) {
		score2++;
		playerY2 = window.innerHeight + 75;
	}

	for(p=0; p<=brPatroni; p++) {
		patronY[p] -= 7.5;

		for(i=0; i<brVragove; i++) {
			if(areColliding( patronX[p], patronY[p], 5, 10,  vragX[i], vragY[i], 7.5, 7.5)) {
				vragX[i] = vragX[brVragove];
				vragY[i] = vragY[brVragove];
				posoka[i] = posoka[brVragove];
				brVragove--;
			}
		}
	}
}

function draw() {
	context.fillStyle = "white";

	context.font = "50px Arial";
	context.fillText(score, 200, window.innerHeight-75);
	context.fillText(score2, 275, window.innerHeight-75);

	if(score >= maxTichki || score2 >= maxTichki) {
		if(score >= maxTichki) {
			context.fillText("Winner", 25, window.innerHeight/2 - 25);
		} else if(score2 >= maxTichki){
			context.fillText("Winner", 275, window.innerHeight/2 - 25)
		}

		playerY = window.innerHeight - 100;
		playerY2 = window.innerHeight - 100;

		KolkoMilisec = 0;
	} else {
		drawImage(rocket[0], playerX, playerY, 50, 75);
		drawImage(rocket[0], playerX2, playerY2, 50, 75);

		for(i=0; i<=brVragove; i++) {
			context.fillRect(vragX[i], vragY[i], 7.5, 7.5);
		}

		for(p=0; p<=brPatroni; p++) {
			context.fillRect(patronX[p], patronY[p], 5, 15);
		}

		for(z=0; z<brPozvoleni - izpolzvani; z++) {
			context.fillRect( 2.5, (window.innerHeight - 12.5) + z * -12.5, 25, 10);
		}

		for(z=0; z<brPozvoleni - izpolzvani2; z++) {
			context.fillRect( 472.5, (window.innerHeight - 12.5) + z * -12.5, 25, 10);
		}
	}

	context.strokeStyle = "white";
	context.strokeRect(250, -1, 250, window.innerHeight+2);
}

function keyup(key) {
	//console.log(key);

	if(key == 82) {
		location.reload();
	}
}

function keydown(key) {
	if(key == 69) {
		if(brPozvoleni - izpolzvani > 0) {
			brPatroni++;
			patronX[brPatroni] = playerX + 22.5;
			patronY[brPatroni] = playerY - 10;
			izpolzvani++;
		}
	} else if(key == 97) {
		if(brPozvoleni - izpolzvani2 > 0) {
			brPatroni++;
			patronX[brPatroni] = playerX2 + 22.5;
			patronY[brPatroni] = playerY2 - 10;
			izpolzvani2++;
		}
	}
}