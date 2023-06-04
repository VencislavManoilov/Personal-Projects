let myX=window.innerWidth/2-30, myY=window.innerHeight/2-40,dx=0,dy=0,brOblaci=4,oblacX=[],oblacY=[],jump=false,right=true,falling=false,dasepokaveli=false,boxItemX=randomInteger(window.innerWidth-50),trqbvalidasepokaje=true,keyY=window.innerHeight-300,dyK=0,keyX=boxItemX+10,vzehligo=false,end=false,pipeY=window.innerHeight-50,realEnd=false,brSkokove=0,nikagapovechedanedava=false;

for(j=0; j<brOblaci; j++) {
	oblacX[j]=randomInteger(window.innerWidth-100);
	oblacY[j]=randomInteger(300);
}

function update() {
	dy+=0.05
	myY+=dy
	myX+=dx
	dx/=1.05

	if(!trqbvalidasepokaje && !vzehligo) {
		dyK+=0.05
		keyY+=dyK
	}

	if(areColliding( 0, window.innerHeight-50, window.innerWidth, window.innerHeight,  myX, myY, 60, 80)){
		dy=0
		myY=window.innerHeight-130
		jump=false
	}

	if(isKeyPressed[65]) {
		dx-=0.20
		right=false
	}if(isKeyPressed[68]) {
		dx+=0.20
		right=true
	}

	if(myX<0) {
		myX = myX + (0 - myX) / 7.5
	}
	if(myX>window.innerWidth-60) {
		myX = myX + (window.innerWidth-60 - myX) / 7.5
	}
	if(myY<0) {
		myY = myY + (0 - myY) / 7.5
	}

	if(dy>0){
		falling=true
	}else{
		falling=false
	}

	if(areColliding( oblacX[brOblaci-1], oblacY[brOblaci-1], 100, 50,  myX, myY, 60, 80)) {
		if(trqbvalidasepokaje && !nikagapovechedanedava) {
			dasepokaveli=true
			nikagapovechedanedava=true
		}
	}

	if(dasepokaveli) {
		if(areColliding( boxItemX+1, window.innerHeight-300, 49, 1,  myX, myY, 60, 80)) {
	        if(!areColliding( boxItemX, window.innerHeight-300+dy+2, 50, 50, myX, myY, 60, 80)) {
	            myY=window.innerHeight-380
	            dy=0
	            jump=false
	        }
	    }

	    if(areColliding( boxItemX+1, window.innerHeight-267, 1, 50,  myX, myY, 60, 80)  && dy<=0) {
	    	if(!areColliding( boxItemX, window.innerHeight-300, 1, 50, myX, myY, 60, 80)) {
	    		if(!areColliding( boxItemX+50 , keyY, 1, 50, myX, myY, 60, 80)) {
		         	myY=window.innerHeight-266
		         	dasepokaveli=false
		         	trqbvalidasepokaje=false
	            	dy=0
	            	dyK=-2
		       	}
	        }
	    }
	}

	if(!trqbvalidasepokaje) {
		if(keyY>window.innerHeight-65) {
			keyY=window.innerHeight-65
		}

		if(areColliding( keyX, keyY, 30, 15,  myX, myY, 60, 80)) {
			vzehligo=true
		}
	} 

	if(vzehligo) {
		keyX = keyX + (myX+15 - keyX) / 10
		keyY = keyY + (myY - keyY) / 10
	} 

	if(end) {
		pipeY--

		if(pipeY<window.innerHeight-150) {
			pipeY=window.innerHeight-150
		}

		if(areColliding( myX, myY, 60, 80,   window.innerWidth-150, pipeY, 100, 40)) {
			dy/=1.25
			myX=window.innerWidth-130

			if(myY>window.innerHeight-150) {
				realEnd=true
			}
		}
	}

	if(!jump) {
		brSkokove=0;
	}
}

function draw() {
	if(!realEnd) {
		drawImage(rock, 100, window.innerHeight-120, 70, 70);

		for(j=0; j<brOblaci; j++) {
			drawImage(cloud, oblacX[j], oblacY[j], 100, 50)
		}

		context.fillStyle = 'Gainsboro';
		context.font = '25px Arial';
		context.fillText("!", oblacX[brOblaci-1]+40, oblacY[brOblaci-1]+35);

		if(dasepokaveli) {
			drawImage(boxItem, boxItemX, window.innerHeight-300, 50, 50)
		}

		if(!trqbvalidasepokaje) {
			drawImage(key, keyX, keyY, 30, 15)
		}

		if(!jump){
			drawImage(femaleStand, myX, myY, 60, 80);
		}else{
			if(!falling){
				if(right){
					drawImage(femaleJump, myX, myY, 60, 80);
				}else{
					drawImage(femaleJump2, myX, myY, 60, 80);
				}
			}else{
				drawImage(femaleWalk1, myX, myY, 60, 80);
			}
		}

		if(vzehligo && areColliding(myX, myY, 60, 80,  100, window.innerHeight-120, 70, 70)) {
			context.fillStyle = 'orangered';
			context.font = '30px Arial'
			context.fillText("E to enter", 75, window.innerHeight-120)
		}

		if(end) {
			drawImage(pipe, window.innerWidth-150, pipeY, 100, 100)
		}

		for(i=0; i<40; i++) {
			drawImage(dirt, i*50, window.innerHeight-50, 50, 50);
		}
	}else{
		context.fillStyle = 'lime';
		context.font = '100px Arial';
		context.fillText("Victory", window.innerWidth/2-150, window.innerHeight/2);

		context.fillStyle = 'green';
		context.font = '50px Arial';
		context.fillText("Press R to restart", window.innerWidth/2-200, window.innerHeight/2 + 100)
	}
}

function keyup(key) {
	if(key==32) {
		if(brSkokove<2) {
			dy=-6
			jump=true
			brSkokove++
		}
	}

	if(key==69) {
		if(vzehligo && areColliding(myX, myY, 60, 80,  100, window.innerHeight-120, 70, 70)) {
			end=true
			vzehligo=false
			trqbvalidasepokaje=true
		}
	}

	if(realEnd) {
		if(key==82) {
			document.location.reload(true);
		}
	}
	//console.log(key)
}

