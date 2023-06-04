let myX=0,myY=350,arrowLeftX=600,arrowLeftY=0,arrowRightX=681,arrowRightY=0,start=false,arrow,arrow2,arrow3,arrow4,arrow5,arrow6,arrow7,arrow8,arrowX=-1000,arrowY=600,arrowX2=-1000,arrowY2=680,arrowX3=-1000,arrowY3=760,arrowX4=-1000,arrowY4=840,arrowX5=-1000,arrowY5=920,arrowX6=-1000,arrowY6=1000,arrowX7=-1000,arrowY7=1080,arrowX8=-1000,arrowY8=1160,speed=1.5,level=1,finishX=400,finishY=175,vragX=0,vragY=185,time=0,live=3,heartX=-1000,heartY=550,heartX2=-1000,heartY2=550,heartX3=-1000,heartY3=550,laserX=-1000,laserY=0,vragSpeed=3,dead=false
    
function update(){
    arrowY=arrowY-speed
    arrowY2=arrowY2-speed
    arrowY3=arrowY3-speed
    arrowY4=arrowY4-speed
    arrowY5=arrowY5-speed
    arrowY6=arrowY6-speed
    arrowY7=arrowY7-speed
    arrowY8=arrowY8-speed
    
    time=time+1
    
    if(start==false){
        arrow=randomInteger(100)
        arrow2=randomInteger(100)
        arrow3=randomInteger(100)
        arrow4=randomInteger(100)
        arrow5=randomInteger(100)
        arrow6=randomInteger(100)
        arrow7=randomInteger(100)
        arrow8=randomInteger(100)
        
        if(level==1){
            arrowY=600
            arrowY2=680
            arrowY3=760
            arrowY4=840
            arrowY5=920
            arrowY6=1000
            arrowY7=1080
            arrowY8=1160
        }if(level>1){
            arrowY=1000
            arrowY2=1080
            arrowY3=1160
            arrowY4=1240
            arrowY5=1320
            arrowY6=1400
            arrowY7=1480
            arrowY8=1560
        }
        
        console.log(level, "level")
        start=true
    }
    
    if(myX<=0){
        myX=0
    }
    
    if(arrowY<=-80){
        arrow=randomInteger(100)
        arrowY=arrowY8+80
        vragX=vragX+1
    }
    if(arrowY2<=-80){
        arrow2=randomInteger(100)
        arrowY2=arrowY+80
        vragX=vragX+1
    }
    if(arrowY3<=-80){
        arrow3=randomInteger(100)
        arrowY3=arrowY2+80
        vragX=vragX+1
    }
    if(arrowY4<=-80){
        arrow4=randomInteger(100)
        arrowY4=arrowY3+80
        vragX=vragX+1
    }
    if(arrowY5<=-80){
        arrow5=randomInteger(100)
        arrowY5=arrowY4+80
        vragX=vragX+1
    }
    if(arrowY6<=-80){
        arrow6=randomInteger(100)
        arrowY6=arrowY5+80
        vragX=vragX+1
    }
    if(arrowY7<=-80){
        arrow7=randomInteger(100)
        arrowY7=arrowY6+80
        vragX=vragX+1
    }
    if(arrowY8<=-80){
        arrow8=randomInteger(100)
        arrowY8=arrowY7+80
        vragX=vragX+1
    }
    
    if(arrow<50){
        arrowX=600
    }if(arrow<100){
        if(arrow>=50){
            arrowX=681
        }
    }
    if(arrow2<50){
        arrowX2=600
    }if(arrow2<100){
        if(arrow2>=50){
            arrowX2=681
        }
    }
    if(arrow3<50){
        arrowX3=600
    }if(arrow3<100){
        if(arrow3>=50){
            arrowX3=681
        }
    }
    if(arrow4<50){
        arrowX4=600
    }if(arrow4<100){
        if(arrow4>=50){
            arrowX4=681
        }
    }
    if(arrow5<50){
        arrowX5=600
    }if(arrow5<100){
        if(arrow5>=50){
            arrowX5=681
        }
    }
    if(arrow6<50){
        arrowX6=600
    }if(arrow6<100){
        if(arrow6>=50){
            arrowX6=681  
        }
    }
    if(arrow7<50){
        arrowX7=600
    }if(arrow7<100){
        if(arrow7>=50){
            arrowX7=681
        }
    }
    if(arrow8<50){
        arrowX8=600
    }if(arrow8<100){
        if(arrow8>=50){
            arrowX8=681
        }
    }
    
    if(myX>=400){
        level=level+1
        speed=speed+0.5
        vragSpeed=vragSpeed+1
        myX=0
        vragX=0
        start=false
    }
    
    if(vragX>=400){
        myX=0
        vragX=0
        live=live-1
        console.log("You failed")
        start=false
    }
    
    if(time==100){
        vragX=vragX+vragSpeed
        time=0
    }
    
    if(live<3){
        heartX3=-1000
    }if(live<2){
        heartX2=-1000
    }if(live<1){
        heartX=-1000
        laserX=100
        myX=-1000
        vragX=-1000
        arrowY=600
        arrowY2=680
        arrowY3=760
        arrowY4=840
        arrowY5=920
        arrowY6=1000
        arrowY7=1080
        arrowY8=1160
        if(dead==false){
            console.log("Press R to restart")
            dead=true
        }
    }
    if(live>0){
        laserX=-1000
    }
    if(live>0){
        heartX=0
    }
    if(live>1){
        heartX2=50
    }
    if(live>2){
        heartX3=100
    }
}

function draw(){
    drawImage(backDesert, 0, 0, 800, 600)
    drawImage(paddle, finishX, finishY, 30, 260)
    drawImage(femaleAction, myX, myY, 60, 80)
    drawImage(arrowLeft, arrowLeftX, arrowLeftY, 80, 80)
    drawImage(arrowRight, arrowRightX, arrowRightY, 80, 80)
    drawImage(heroHello, vragX, vragY, 60, 80)
    drawImage(heartSmall, heartX, heartY, 50, 50)
    drawImage(heartSmall, heartX2, heartY2, 50, 50)
    drawImage(heartSmall, heartX3, heartY3, 50, 50)
    drawImage(laserRed[2], laserX, laserY, 600, 600)
    if(arrow<50){
        drawImage(arrowLeft, arrowX, arrowY, 80, 80)
    }if(arrow<100){
        if(arrow>=50){
            drawImage(arrowRight, arrowX, arrowY, 80, 80)
        }
    }
    
    if(arrow2<50){
        drawImage(arrowLeft, arrowX2, arrowY2, 80, 80)
    }if(arrow2<100){
        if(arrow2>=50){
            drawImage(arrowRight, arrowX2, arrowY2, 80,80)
        }
    }
    
    if(arrow3<50){
        drawImage(arrowLeft, arrowX3, arrowY3, 80, 80)
    }if(arrow3<100){
        if(arrow3>=50){
            drawImage(arrowRight, arrowX3, arrowY3, 80, 80)
        }
    }
    
    if(arrow4<50){
        drawImage(arrowLeft, arrowX4, arrowY4, 80, 80)
    }if(arrow4<100){
        if(arrow4>=50){
            drawImage(arrowRight, arrowX4, arrowY4, 80, 80)
        }
    }
    
    if(arrow5<50){
        drawImage(arrowLeft, arrowX5, arrowY5, 80, 80)
    }if(arrow5<100){
        if(arrow5>=50){
            drawImage(arrowRight, arrowX5, arrowY5, 80, 80)
        }
    }
    
    if(arrow6<50){
        drawImage(arrowLeft, arrowX6, arrowY6, 80, 80)
    }if(arrow6<100){
        if(arrow6>=50){
            drawImage(arrowRight, arrowX6, arrowY6, 80, 80)
        }
    }
    
    if(arrow7<50){
        drawImage(arrowLeft, arrowX7, arrowY7, 80, 80)
    }if(arrow7<100){
        if(arrow7>=50){
            drawImage(arrowRight, arrowX7, arrowY7, 80, 80)
        }
    }
    
    if(arrow8<50){
        drawImage(arrowLeft, arrowX8, arrowY8, 80, 80)
    }if(arrow8<100){
        if(arrow8>=50){
            drawImage(arrowRight, arrowX8, arrowY8, 80, 80)
        }
    }
}

function keyup(key){
    
    //console.log("Pressed", key)
    
    if(key==37 || key==65){
        if(areColliding( arrowLeftX, arrowLeftY, 80, 30,  arrowX, arrowY-20, 80, 80)){
            myX=myX+10
            arrowY=arrowY8+80
            arrow=randomInteger(100)
        }if(areColliding( arrowLeftX, arrowLeftY, 80, 30,  arrowX2, arrowY2-20, 80, 80)){
            myX=myX+10
            arrowY2=arrowY+80
            arrow2=randomInteger(100)
        }if(areColliding( arrowLeftX, arrowLeftY, 80, 30,  arrowX3, arrowY3-20, 80, 80)){
            myX=myX+10
            arrowY3=arrowY2+80
            arrow3=randomInteger(100)
        }if(areColliding( arrowLeftX, arrowLeftY, 80, 30,  arrowX4, arrowY4-20, 80, 80)){
            myX=myX+10
            arrowY4=arrowY3+80
            arrow4=randomInteger(100)
        }if(areColliding( arrowLeftX, arrowLeftY, 80, 30,  arrowX5, arrowY5-20, 80, 80)){
            myX=myX+10
            arrowY5=arrowY4+80
            arrow5=randomInteger(100)
        }if(areColliding( arrowLeftX, arrowLeftY, 80, 30,  arrowX6, arrowY6-20, 80, 80)){
            myX=myX+10
            arrowY6=arrowY5+80
            arrow6=randomInteger(100)
        }if(areColliding( arrowLeftX, arrowLeftY, 80, 30,  arrowX7, arrowY7-20, 80, 80)){
            myX=myX+10
            arrowY7=arrowY6+80
            arrow7=randomInteger(100)
        }if(areColliding( arrowLeftX, arrowLeftY, 80, 30,  arrowX8, arrowY8-20, 80, 80)){
            myX=myX+10
            arrowY8=arrowY7+80
            arrow8=randomInteger(100)
        }if(areColliding( arrowRightX, arrowRightY, 80, 10,  arrowX, arrowY-40, 80, 80)){
            myX=myX-10
        }if(areColliding( arrowRightX, arrowRightY, 80, 10,  arrowX2, arrowY2-40, 80, 80)){
            myX=myX-10
        }if(areColliding( arrowRightX, arrowRightY, 80, 10,  arrowX3, arrowY3-40, 80, 80)){
            myX=myX-10
        }if(areColliding( arrowRightX, arrowRightY, 80, 10,  arrowX4, arrowY4-40, 80, 80)){
            myX=myX-10
        }if(areColliding( arrowRightX, arrowRightY, 80, 10,  arrowX5, arrowY5-40, 80, 80)){
            myX=myX-10
        }if(areColliding( arrowRightX, arrowRightY, 80, 10,  arrowX6, arrowY6-40, 80, 80)){
            myX=myX-10
        }if(areColliding( arrowRightX, arrowRightY, 80, 10,  arrowX7, arrowY7-40, 80, 80)){
            myX=myX-10
        }if(areColliding( arrowRightX, arrowRightY, 80, 10,  arrowX8, arrowY8-40, 80, 80)){
            myX=myX-10
        }
    }
    
    if(key==39 || key==68){
        if(areColliding( arrowRightX, arrowRightY, 80, 10,  arrowX, arrowY-50, 80, 80)){
            myX=myX+10
            arrowY=arrowY8+80
            arrow=randomInteger(100)
        }if(areColliding( arrowRightX, arrowRightY, 80, 10,  arrowX2, arrowY2-50, 80, 80)){
            myX=myX+10
            arrowY2=arrowY+80
            arrow2=randomInteger(100)
        }if(areColliding( arrowRightX, arrowRightY, 80, 10,  arrowX3, arrowY3-50, 80, 80)){
            myX=myX+10
            arrowY3=arrowY2+80
            arrow3=randomInteger(100)
        }if(areColliding( arrowRightX, arrowRightY, 80, 10,  arrowX4, arrowY4-50, 80, 80)){
            myX=myX+10
            arrowY4=arrowY3+80
            arrow4=randomInteger(100)
        }if(areColliding( arrowRightX, arrowRightY, 80, 10,  arrowX5, arrowY5-50, 80, 80)){
            myX=myX+10
            arrowY5=arrowY4+80
            arrow5=randomInteger(100)
        }if(areColliding( arrowRightX, arrowRightY, 80, 10,  arrowX6, arrowY6-50, 80, 80)){
            myX=myX+10
            arrowY6=arrowY5+80
            arrow6=randomInteger(100)
        }if(areColliding( arrowRightX, arrowRightY, 80, 10,  arrowX7, arrowY7-50, 80, 80)){
            myX=myX+10
            arrowY7=arrowY6+80
            arrow7=randomInteger(100)
        }if(areColliding( arrowRightX, arrowRightY, 80, 10,  arrowX8, arrowY8-50, 80, 80)){
            myX=myX+10
            arrowY8=arrowY7+80
            arrow8=randomInteger(100)
        }if(areColliding( arrowLeftX, arrowLeftY, 80, 30,  arrowX, arrowY-20, 80, 80)){
            myX=myX-10
        }if(areColliding( arrowLeftX, arrowLeftY, 80, 30,  arrowX2, arrowY2-20, 80, 80)){
            myX=myX-10
        }if(areColliding( arrowLeftX, arrowLeftY, 80, 30,  arrowX3, arrowY3-20, 80, 80)){
            myX=myX-10
        }if(areColliding( arrowLeftX, arrowLeftY, 80, 30,  arrowX4, arrowY4-20, 80, 80)){
            myX=myX-10
        }if(areColliding( arrowLeftX, arrowLeftY, 80, 30,  arrowX5, arrowY5-20, 80, 80)){
            myX=myX-10
        }if(areColliding( arrowLeftX, arrowLeftY, 80, 30,  arrowX6, arrowY6-20, 80, 80)){
            myX=myX-10
        }if(areColliding( arrowLeftX, arrowLeftY, 80, 30,  arrowX7, arrowY7-20, 80, 80)){
            myX=myX-10
        }if(areColliding( arrowLeftX, arrowLeftY, 80, 30,  arrowX8, arrowY8-20, 80, 80)){
            myX=myX-10
        }
    }
    
    if(key==82){
        if(live<1){
            live=3
            myX=0
            vragX=0
            start=false
            level=1
            speed=1
            vragSpeed=5
        }
    }
}