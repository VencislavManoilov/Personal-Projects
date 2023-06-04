let myX=370,myY=490,mouse=false,dY=0,heartX=0,heartX2=30,heartX3=60,heartX4=90,heartX5=120,live=5,dead=false,dead2=false,dX=myX,starodX=dX,speed=0,speedY=0,dY2=mouseY,starodY=dY2,whereIsMouseX,whereIsMouseY,mouseTouchMyX,mouseTouchMyY,dollars=0

function update(){
    
    if(mouse==true){
        myX=mouseX-mouseTouchMyX
        myY=mouseY-mouseTouchMyY
        dY=0
    }else{
        myY=myY+dY
        dY=dY+0.25
    }
    
    if(areColliding( myX, myY, 60, 80,  0, 570, 800, 30)){
        myY=490
        if(dY>15.5){
            live=live-1
        }
        dY=0
    }
    
    if(myX<0){
        myX=0
    }if(myX>740){
        myX=740
    }if(myY<0){
        myY=0
    }if(myY>600){
        myY=490
    }
    
    if(live<5){
        heartX5=-1000
    }if(live<4){
       heartX4=-1000 
    }if(live<3){
        heartX3=-1000
    }if(live<2){
        heartX2=-1000
    }if(live<1){
        heartX=-1000
        myX=-1000
        if(dead==false){
            console.log("You WIN!!!Press R to restart")
            console.log("Press R to restart")
            dead2=false
            dead=true
        }
    }
    if(live>0){
        heartX=0
        if(dead2==false){
            myX=370
            myY=300
            dY=0
            dead2=true
        }
        dead=false
    }
    if(live>1){
        heartX2=30
    }
    if(live>2){
        heartX3=60
    }
    if(live>3){
        heartX4=90
    }
    if(live>4){
        heartX5=120
    }
}

function draw(){
    starodX=dX
    starodY=dY2
    
    dX=myX
    dY2=myY
    
    drawImage(heroStand, myX, myY, 60, 80)
    drawImage(paddle, 0, 570, 800, 30)
    drawImage(heartSmall, heartX, 570, 30, 30)
    drawImage(heartSmall, heartX2, 570, 30, 30)
    drawImage(heartSmall, heartX3, 570, 30, 30)
    drawImage(heartSmall, heartX4, 570, 30, 30)
    drawImage(heartSmall, heartX5, 570, 30, 30)
    
    myX=myX+speed/1.5
    myY=myY-speedY/1.5
    
    if(areColliding( myX, myY, 60, 80,  0, 570, 800, 30)){
        speed=speed/1.25
        speedY=speedY/1.25
    }else{
        speed=speed/1.0125
        speedY=speedY/1.0125
    }
}

function mousedown(){
    if(areColliding( myX, myY, 60, 80,  mouseX, mouseY, 1, 1)){
        mouse=true
        whereIsMouseX=mouseX
        mouseTouchMyX=whereIsMouseX-myX
        
        whereIsMouseY=mouseY
        mouseTouchMyY=whereIsMouseY-myY
    }
}

function mouseup(){
    if(areColliding( myX, myY, 60, 80,  mouseX, mouseY, 1, 1)){
        speed=dX-starodX
        speedY=starodY-dY2
    }
    mouse=false
}

function keyup(key){
    if(key==82){
        if(live<1){
            live=5
        }
    }
}