let x,y,brKvadrati=100,size=5,raztoqnie=0,clicked=false,kydeX,kydeY;

function update() {

}

function draw() {
	for(x=0; x<brKvadrati; x++) {
		for(y=0; y<brKvadrati; y++) {
			if(x+y==brKvadrati-1 || x-y==0 || x==brKvadrati/2 || y==brKvadrati/2) {
				context.fillStyle = '#555';
				context.fillRect(x*(size+raztoqnie), y*(size+raztoqnie), size, size);
			}
		}
	}

	if(clicked){
		drawLine(kydeX, kydeY, mouseX, mouseY);
	}
}

function mousedown() {
	clicked=true;
	kydeX=mouseX;
	kydeY=mouseY;
}

function mouseup() {
	clicked=false;
}