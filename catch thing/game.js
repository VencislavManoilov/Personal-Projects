let play=true,time=100,score=0,bestScoreCatchThing=0;

let basket = {
	"x" : window.innerWidth/2-50,
	"y" : window.innerHeight-100,
}

let thing = {
	"brThings" : 0,
	"x" : [],
	"y" : [],
}

let audio = new Audio('Wii Shop Channel Song (3 minutes version).mp3');

function update() {
	basket.x=mouseX-50;
	y = window.innerHeight-100;

	if(play) {
		audio.play();
	}else{
		audio.currentTime = 0;
	}

	time++;
	if(time>100) {
		thing.brThings++;
		thing.x[thing.brThings]=randomInteger(window.innerWidth-50);
		thing.y[thing.brThings]=-50;
		time=0;
	}

	for(i=0; i<thing.brThings; i++) {
		thing.y[i]+=3;

		if(areColliding(thing.x[i], thing.y[i], 50, 50,  basket.x, basket.y, 100, 50)) {
			thing.x[i]=window.innerWidth+10000;
			score++;
			if(score>localStorage.bestScoreCatchThing) {
				localStorage.bestScoreCatchThing=score;
			}
		}
	}
}

function draw() {
	context.fillStyle = 'black';
	context.font = '25px Arial';
	context.fillText("Score: " + score, 50, 25);

	context.fillText("Bestscore: " + localStorage.bestScoreCatchThing, window.innerWidth-250, 25)

	drawImage(box, basket.x, basket.y-10, 100, 75);

	context.fillStyle = '#666';
	context.fillRect(5, window.innerHeight-35, 30, 30)

	for(i=0; i<thing.brThings; i++) {
		drawImage(butterfly, thing.x[i], thing.y[i], 50, 50)
	}
}

function mouseup() {
	if(areColliding(5, window.innerHeight-35, 30, 30,  mouseX, mouseY, 1, 1)) {
		play = !play
	}
}