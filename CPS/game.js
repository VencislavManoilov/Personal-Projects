let cps = 0,
	start,
	maxSeconds = prompt('Колко сек искаш?'),
	timer = maxSeconds * 100
;

window.oncontextmenu = function () {
    return false;
}

function update() {
	if(start) {
		timer--;
	}

	if(timer <= 0) {
		start = false;
	}

	if(cps > localStorage.CpsRecord) {
		localStorage.CpsRecord = cps;
	}
}

function draw() {
	context.fillStyle = 'black';
	context.font = '50px Arial';
	if(timer <= 0) {
		context.fillText("Press R to restart", window.innerWidth/2 - 225, window.innerHeight/2 + 50);
	} else {
		drawImage(clickCanvas, 5, 150, window.innerWidth-10, window.innerHeight-155);
	}

	context.font = '25px Arial';

	context.fillText("Clickes: " + cps, window.innerWidth/2 - 150, 30);
	context.fillText("Time: " + timer/100, window.innerWidth/2, 30);
	context.fillText("Record: " + localStorage.CpsRecord, window.innerWidth/2 - 100, 60);
}

function mouseup() {
	if(timer > 0) {
		start = true;
		cps++;
	}
}

function keyup(key) {
	if(timer <= 0) {
		location.reload();
	}
}