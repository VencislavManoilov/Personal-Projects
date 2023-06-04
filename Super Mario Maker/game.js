let imaliblock=[],brBlockove=0,pipeX=randomInteger((window.innerWidth-100)/50)*50,maxBlockove=4,level=1;

let my = {
	"x" : 50,
	"y" : window.innerHeight-250,
	"dx" : 0,
	"dy" : 0,
	"brJumpove" : 0,
}

for(let x=0; x<window.innerWidth/50; x++) {
	imaliblock[x]=[];
	for(y=0; y<window.innerHeight/50; y++) {
		imaliblock[x][y]=false;
	}
}

function update() {
	my.dx/=1.05;
	my.x+=my.dx;
	my.y+=my.dy;
	my.dy+=0.1;

	if(isKeyPressed[65]) {
		my.dx-=0.3;
	}if(isKeyPressed[68]) {
		my.dx+=0.3;
	}

	if(my.y>window.innerHeight-100) {
		my.y=window.innerHeight-100;
		my.dy=0;
		my.brJumpove=0;
		my.dx/=1.1;
	}

	if(my.x<0) {
		my.x = my.x + (0 - my.x) / 5;
	}if(my.x>window.innerWidth-50) {
		my.x = my.x + (window.innerWidth-50 - my.x) / 5;
	}

	for(x=0; x<window.innerWidth/50; x++) {
		for(y=0; y<window.innerHeight/50; y++) {
			if(imaliblock[x][y]) {
				if(areColliding(my.x+5, my.y+50, 40, 1, x*50, y*50, 50, 1+my.dy) && my.dy>=0){
					my.dy=0;
					my.y=y*50-50;
					my.brJumpove=0;
					my.dx/=1.125;
				}
			}
		}
	}

	if(areColliding( pipeX-my.dx, 50+my.dy, 1-my.dx, 100,  my.x, my.y,  50, 50)) {
		my.dx=0;
		my.x=pipeX-51;
	}if(areColliding( pipeX+100+my.dx, 50+my.dy, 1+my.dx, 100,  my.x+my.dx+2, my.y, 50, 50)) {
		my.dx=0;
		my.x=pipeX+99;
	}if(areColliding( pipeX+my.dx+10, 50, 79-my.dx, 52+my.dy,  my.x, my.y, 50, 50)) {
		my.x=pipeX+25;
		my.dx=0;
		my.dy/=1.25;

		for(i=0; i<window.innerWidth/50; i++) {
			if(i*50==pipeX || i*50==pipeX+50) {
				if(areColliding( my.x, my.y, 50, 50,  i*50, 150, 50, 1+my.dy)) {
					restart();
				}
			}
		}
	}

	for(i=0; i<window.innerWidth/50; i++) {
		if(i*50==pipeX || i*50==pipeX+50) {
			if(areColliding( my.x+5, my.y+50, 40, 1,  i*50, 150, 50, 1+my.dy) && my.dy>=0) {
				my.dy=0;
				my.y=100;
				my.dx/=1.125;
				my.brJumpove=0;
			}
		}
	}
}

function draw() {
	for(i=0; i<window.innerWidth/50; i++) {
		drawImage(dirt, i*50, window.innerHeight-50, 50, 50);

		if(i*50==pipeX || i*50==pipeX+50) {
			drawImage(dirt, i*50, 150, 50, 50);
		}
	}

	for(x=0; x<window.innerWidth/50; x++) {
		for(y=0; y<window.innerHeight/50; y++) {
			context.strokeStyle = 'LightGray';
			context.strokeRect(x*50, y*50, 50, 50);

			if(imaliblock[x][y]) {
				drawImage(dirt, x*50, y*50, 50, 50);
			}

			if(brBlockove<=0) {
				imaliblock[x][y]=false;
			}
		}
	}

	drawImage(dirt, 12.5, 12.5, 25, 25)
	context.fillStyle = 'black';
	context.font = '25px Arial';
	context.fillText("x" + (maxBlockove-brBlockove), 40, 34);

	context.fillText("Level: " + level, window.innerWidth/2-62.5, 34)

	drawImage(MarioStand, my.x, my.y, 50, 50);
	drawImage(pipe, pipeX, 50, 100, 100);
}

function keydown(key) {
	if(key==32) {
		if(my.brJumpove<1) {
			my.dy=-5.55;
			my.brJumpove++;
		}
	}
}

function mouseup() {
	for(x=Math.floor(mouseX/50); x<Math.floor(mouseX/50)+1; x++) {
		for(y=Math.floor(mouseY/50); y<Math.floor(mouseY/50)+1; y++) {
			if(imaliblock[x][y]) {
				brBlockove--;
			}
			if(brBlockove<maxBlockove) {
				imaliblock[x][y] = !imaliblock[x][y];
				if(imaliblock[x][y]) {
					brBlockove++;
				}
			}
		}
	}
}

function restart() {
	level++;

	brBlockove=0, pipeX=randomInteger((window.innerWidth-100)/50)*50, maxBlockove=4;

	my = {
		"x" : 50,
		"y" : window.innerHeight-250,
		"dx" : 0,
		"dy" : 0,
		"brJumpove" : 0,
	}
}