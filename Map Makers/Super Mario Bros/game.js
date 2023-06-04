// for maps
let tipPole = [], pole = [], brKoloni = askForNum('Колко колони искаш?', 1), brRedove = 20, size = 25, izbranVidPole = 1;

// others
let clicked = false, copyX = 10, copyY = brRedove*size + 10, copyR = size*0.75, copied = false, camera = 0, centerX = 10, centerY = brRedove*size + 135, centerR = size*0.5;

for(x=0;x<brKoloni;x++) {
	pole[x]=[];
	
	for(y=0;y<brRedove;y++) {
		pole[x][y] = 0;
	}
}

tipPole[1] = box;
tipPole[2] = boxItem;
tipPole[3] = boxItemBoxed;
tipPole[4] = boxItemDisabled;
tipPole[5] = boxItemDisabledBoxed;
tipPole[6] = dirt;
tipPole[7] = pipe;
tipPole[8] = sign;
tipPole[9] = signExit;
tipPole[10] = signLeft;
tipPole[11] = signRight;

function update() {
	if(clicked && mouseX < brKoloni*size - camera && mouseY < brRedove*size) {
		pole[Math.floor((mouseX + camera)/size)][Math.floor(mouseY/size)] = izbranVidPole;

		copied = false;
	}

	if(MoveLeft()) {
		camera -= size;
	} else if(MoveRight()) {
		camera += size;
	}
}

function draw() {
	for(x=0; x<brKoloni; x++) {
		for(y=0; y<brRedove; y++) {
			strokeRect(x*size - camera, y*size, size, size, 1, 'grey');

			if(pole[x][y] > 0 && tipPole[pole[x][y]] != undefined) {
				drawImage(tipPole[pole[x][y]], x*size - camera, y*size, size, size);
			}
		}
	}

	fillText('Choose:', 10, brRedove*size + 50, 25, 'Arial', 'black');

	for(let i=0; i<tipPole.length; i++) {
		fillText(i+1, (10 + i*(size - 10) + 5) + i*(size + 5), brRedove*size + 110, 15, 'Arial', 'black');

		if(i != 0) {
			drawImage(tipPole[i], (10 + i*(size - 10)) + i*(size + 5), brRedove*size + 80, size, size);
		} else {
			strokeRect(10, brRedove*size + 80, size, size, 1, 'black');
		}
	}

	drawImage(copy, copyX, copyY, copyR*2, copyR*2);
	drawImage(center, centerX, centerY, centerR*2, centerR*2);

	if(copied) {
		fillText("Codied to clipboard", copyX + copyR*2.5, copyY+10, 25, 'Arial', 'black');
	}
}

function mousedown() {
	clicked = true;
	console.log()
}

function mouseup() {
	clicked = false;

	for(let i=0; i<tipPole.length; i++) {
		if(areColliding((10 + i*(size - 10)) + i*(size + 5), brRedove*size + 80, size, size,  mouseX, mouseY, 1, 1)) {
			izbranVidPole = i;
		}
	}

	if(distance(mouseX, mouseY, copyX + copyR, copyY + copyR) <= copyR) {
		copied = true;

		navigator.clipboard.writeText(JSON.stringify(pole));
	} else if(distance(mouseX, mouseY, centerX + centerR, centerY + centerR) <= centerR) {
		camera = 0;
	}
}

function keyup(key) {
	// console.log(key);

	let maxPoleta = tipPole.length;

	if(tipPole.length > 9) {
		maxPoleta = 9;
	}

	if(key + 49 >= 49 || key + 49 <= maxPoleta) {
		izbranVidPole = key - 49;
	}
}

function MoveLeft() {
	if(isKeyPressed[65] || isKeyPressed[37]) {
		return true;
	}

	return false;
}

function MoveRight() {
	if(isKeyPressed[68] || isKeyPressed[39]) {
		return true;
	}

	return false;
}

// This are featurs from my engine
function isNumber(n) {
	return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

function askForNum(sentence, minimumNum) {
	num = prompt(sentence);

	if(!isNumber(num) || num < minimumNum) {
		num = minimumNum;
	}

	return num;
}