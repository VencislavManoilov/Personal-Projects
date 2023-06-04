let myY=window.innerHeight-80,dY=0,gravity=true,pause=false,brVragove=0,vragX=[],vragY=[],time=150,topOrBottom=[],speed=3,savedSpeed=3,score=0,death=false,bestscore=score,raztoqnie=150,tipRazmer=[],vragXsize=[],vragYsize=[],poSredata=false;

function update() {
    if(areColliding(50, myY, 50, 50,  0, 0, window.innerWidth, 30)){
        myY=30
        dY=0
    }if(areColliding(50, myY, 50, 50,  0, window.innerHeight-30, window.innerWidth, 30)){
        myY=window.innerHeight-80
        dY=0
    }

    for(i=0; i<=brVragove; i++){
        vragX[i]=vragX[i]-speed

        if(vragX[i]<-100){
            score=score+1
            vragX[i]=vragX[brVragove]
            vragY[i]=vragY[brVragove]
            topOrBottom[i]=topOrBottom[brVragove]
            vragXsize[i]=vragXsize[brVragove]
            vragYsize[i]=vragYsize[brVragove]
            vragX[i]=vragX[brVragove]
            brVragove=brVragove-1

            if(score>=bestscore){
                bestscore=score
            }
        }
    }

    if(pause){
        speed=speed/1.05
    }else{
        if(speed<savedSpeed){
            speed=speed+0.0125
        }else{
            if(score<10){
                savedSpeed=3
                speed=3
                raztoqnie=150
            }if(score>=10 && score<25){
                savedSpeed=5
                raztoqnie=100
            }if(score>=25 && score<50){
                savedSpeed=7
                raztoqnie=75
            }if(score>=50 && score<100){
                savedSpeed=9
                raztoqnie=50
            }if(score>=100){
                savedSpeed=12
                raztoqnie=25
            }

            if(poSredata){
                myY=(window.innerHeight-50)/2
            }else{
                if(gravity){
                    dY=dY+1.5
                }else{
                    dY=dY-1.5
                }
            
                myY=myY+dY
            }
            time=time+1
        
        }

        if(time>=raztoqnie){
            brVragove=brVragove+1
            vragX[brVragove]=window.innerWidth
            topOrBottom[brVragove]=randomInteger(2)
            tipRazmer[brVragove]=randomInteger(3)
            if(topOrBottom[brVragove]==0){
                vragY[brVragove]=30
            }if(topOrBottom[brVragove]==1){
                if(tipRazmer[brVragove]==2){
                    vragY[brVragove]=window.innerHeight-130
                }else{
                    vragY[brVragove]=window.innerHeight-60
                }
            }

            if(tipRazmer[brVragove]==0){
                vragXsize[brVragove]=30
                vragYsize[brVragove]=30
            }if(tipRazmer[brVragove]==1){
                vragXsize[brVragove]=100
                vragYsize[brVragove]=30
            }if(tipRazmer[brVragove]==2){
                vragXsize[brVragove]=30
                vragYsize[brVragove]=100
            }

            time=0
        }
    }

    for(i=0; i<=brVragove; i++){
        if(areColliding( 50, myY, 50, 50,  vragX[i], vragY[i], vragXsize[i], vragYsize[i])){
            death=true
            if(score>=bestscore){
                bestscore=score
            }
        }
    }
}

function draw() {
    if(death){
        drawImage(GameOverSign, (window.innerWidth-800)/2, (window.innerHeight-600)/2)
        drawImage(Play, (window.innerWidth-50)/2, (window.innerHeight+160)/2)

        context.font="30px Arial"
        context.fillStyle="orangered"
        context.fillText("Score:", (window.innerWidth-800)/2+200, (window.innerHeight-600)/2+350)
        context.fillText(score, (window.innerWidth-800)/2+290, (window.innerHeight-600)/2+350)
        context.fillText("Best Score:", (window.innerWidth-800)/2+370, (window.innerHeight-600)/2+350)
        context.fillText(bestscore, (window.innerWidth-800)/2+530, (window.innerHeight-600)/2+350)

        brVragove=0
    }else{
        drawImage(paddle, 0, 0, window.innerWidth, 30)
        drawImage(paddle, 0, window.innerHeight-30, window.innerWidth, 30)
        if(pause){
            drawImage(Resume, window.innerWidth-80, window.innerHeight-27.5, 25, 25)
        }else{
            drawImage(Pause, window.innerWidth-80, window.innerHeight-30, 30, 30)
        }
        
        for(i=0; i<=brVragove; i++){
            drawImage(box, vragX[i], vragY[i], vragXsize[i], vragYsize[i])
        }

        drawImage(boxAlienYellowSquare, 50, myY, 50, 50)

        context.font="20px Arial"
        context.fillStyle="black"
        context.fillText("Score:", 50, 20)
        context.fillText(score, 110, 20)
        context.fillText("Best Score:", window.innerWidth-172.5, 20)
        context.fillText(bestscore, window.innerWidth-65, 20)
    }
}

function keydown(key) {

    //console.log(key)

    if(key==32){
        if(gravity){
            gravity=false
        }else{
            gravity=true
        }
    }

    if(death){
        death=false
        score=0
        gravity=true
        brVragove=0
        time=150
        speed=3
        savedSpeed=3
    }

    if(key==82){
        if(poSredata){
            poSredata=false
        }else{
            poSredata=true
        }
    }

    if(key==81){
        score++
    }
}

function mousedown() {
    if(areColliding(window.innerWidth-80, window.innerHeight-30, 30, 30,  mouseX, mouseY, 1, 1)){
        if(pause){
            pause=false
        }else{
            savedSpeed=speed
            pause=true
        }
    }else{
        if(gravity){
            gravity=false
        }else{
            gravity=true
        }
    }

    if(areColliding( (window.innerWidth-50)/2, (window.innerHeight+160)/2, 50, 50,  mouseX, mouseY, 1, 1)){
        if(death){
            death=false
            score=0
            gravity=true
            brVragove=0
            time=150
            speed=3
            savedSpeed=3
        }
    }
}