let brMangizi=0,mangizaX=[],mangizaY=[],dx=[],dy=[];

let audioMoney = new Audio('Money Money Money! Sound Effect (FREE DOWNLOAD).mp3')

function update() {
	for(i=0; i<brMangizi; i++) {
		dx[i]/=1.0025;
		dy[i]+=0.05;

		mangizaX[i] += dx[i];
		mangizaY[i] += dy[i];
	}

	if(mangizaY[brMangizi]>window.innerHeight) {
		brMangizi=0
	}
}

function draw() {
	drawImage(mangizi, 10, window.innerHeight/2-50, 100, 60);

	context.fillStyle = 'green';
	context.font = '25px Arial';
	context.fillText('Just spam keys', window.innerWidth/2-100, 30);

	for(i=0; i<brMangizi; i++) {
		drawImage(mangizi, mangizaX[i], mangizaY[i], 100, 60);
	}
}

function keyup() {
	brMangizi++;
	mangizaX[brMangizi]=10;
	mangizaY[brMangizi]=window.innerHeight/2-50;
	dx[brMangizi]=randomInteger(4) + 4;
	dy[brMangizi]=0;
	audioMoney.play();
}