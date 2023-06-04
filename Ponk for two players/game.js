let platformaY=window.innerHeight/2-50, platformaY2=window.innerHeight/2-50,score=0,pouse=true,time=0,speed=5,score2=0,youWin=false,youWin2=false;

let audioPong = new Audio('Pong Sound Effect.mp3');

let ball = {
	"x" : window.innerWidth/2,
	"y" : randomInteger(window.innerHeight-100),
	"posoka" : randomInteger(4),
	"size" : 20,
}

function restart() {
	platformaY=window.innerHeight/2-50,platformaY2=window.innerHeight/2-50,pouse=true,time=0,speed=5;
	ball.x=window.innerWidth/2,ball.y=randomInteger(window.innerHeight-100),ball.posoka=randomInteger(4),ball.size=20;
}

function update() {
	time++
	if(pouse) {
		if(time>100) {
			if(ball.posoka==0) {
				ball.x-=speed
				ball.y-=speed
			}if(ball.posoka==1) {
				ball.x-=speed
				ball.y+=speed
			}if(ball.posoka==2) {
				ball.x+=speed
				ball.y+=speed
			}if(ball.posoka==3) {
				ball.x+=speed
				ball.y-=speed
			}
		}
	}

	if(ball.y>window.innerHeight-ball.size/2) {
		if(ball.posoka==1) {
			ball.posoka=0
		}if(ball.posoka==2) {
			ball.posoka=3
		}
	}if(ball.y<ball.size/2) {
		if(ball.posoka==0) {
			ball.posoka=1
		}if(ball.posoka==3) {
			ball.posoka=2
		}
	}if(ball.x>=ball.size && areColliding(ball.x, ball.y, ball.size, ball.size,  50-ball.size, platformaY, ball.size, 100)) {
		audioPong.play();

		if(ball.posoka==0) {
			ball.posoka=3
		}if(ball.posoka==1) {
			ball.posoka=2
		}
	}if(ball.x<=window.innerWidth-ball.size && areColliding(ball.x, ball.y, ball.size, ball.size,  window.innerWidth-50, platformaY2, ball.size, 100)) {
		audioPong.play();

		if(ball.posoka==2) {
			ball.posoka=1
		}if(ball.posoka==3) {
			ball.posoka=0
		}
	}

	if(isKeyPressed[87]) {
		platformaY-=7
	}if(isKeyPressed[83]) {
		platformaY+=7
	}

	if(isKeyPressed[38]) {
		platformaY2-=7
	}if(isKeyPressed[40]) {
		platformaY2+=7
	}

	if(platformaY<0) {
		platformaY=0
	}if(platformaY>window.innerHeight-100) {
		platformaY=window.innerHeight-100
	}

	if(platformaY2<0) {
		platformaY2=0
	}if(platformaY2>window.innerHeight-100) {
		platformaY2=window.innerHeight-100
	}

	if(ball.x<0) {
		score2++
		restart();
	}if(ball.x>window.innerWidth-25) {
		score++
		restart();
	}

	if(youWin || youWin2) {
		speed=0
	}

	if(score>=9) {
		youWin=true
	}if(score2>=9) {
		youWin2=true
	}
}

function draw() {
	context.fillStyle = 'white'

	if(!youWin && !youWin2) {
		context.fillRect(25, platformaY, ball.size, 100)

		context.fillRect(window.innerWidth-50, platformaY2, ball.size, 100)

		context.beginPath();
		context.arc(ball.x, ball.y, ball.size/2, 0, 2 * Math.PI);
		context.fill();
	}else{
		if(youWin) {
			context.font = '100px Arial';
			context.fillText("Winner", 100, window.innerHeight/2-50);
		}if(youWin2) {
			context.font = '100px Arial';
			context.fillText("Winner", window.innerWidth/2+100, window.innerHeight/2-50);
		}
	}

	context.strokeStyle = 'white';
	context.moveTo(window.innerWidth/2, 0);
    context.lineTo(window.innerWidth/2, window.innerHeight);
    context.stroke();

	context.font = '100px Arial'
	context.fillText(score, window.innerWidth/2-100, 100)
	context.fillText(score2, window.innerWidth/2+50, 100)
}

function keyup(key) {
	//console.log(key)
}