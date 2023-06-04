let brNumbers=6, numbers=[], isItBiggest, BiggestCheck, NumbersRadios = 25, clicked, string = "";

for(i=0; i<brNumbers; i++) {
	numbers[i] = randomInteger(NumbersRadios) - randomInteger(NumbersRadios);
}

function update() {

}

function draw() {
	for(i=0; i<brNumbers; i++) {
		context.fillStyle = "Black";
		context.font = "50px Arial";
		context.fillText(numbers[i], i*200 + 100, window.innerHeight/2 - 25);

		if(numbers[i] > BiggestCheck) {
			isItBiggest = i;
			BiggestCheck = numbers[i];
		}

		if(i == 0) {
			BiggestCheck = numbers[i];
			isItBiggest = i;
		}
	}

	if(clicked) {
		drawImage(box, isItBiggest * 200 + 100, window.innerHeight/2 - 100, 25, 25);
	}

	context.fillText("Submit (Space)", 100, window.innerHeight-100);
	context.fillText("Press R to restart", 100, 40);
}

function mousedown() {
	if(areColliding( 100, window.innerHeight-135, 180, 35,  mouseX, mouseY, 1, 1)) {
		clicked = true;
	}
}

function keyup(key) {
	if(key == 82) {
		location.reload();
	} else if(key == 32) {
		clicked = true;
	}
}