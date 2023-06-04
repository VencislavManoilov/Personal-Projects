let myX=375,myY=275,dX=0,dY=0,heartX=0,heartX2=50,heartX3=100,dead=false,laserX=-1000,live=3,forNoDeathTime=true,noDeathTime=0

function update(){
    myX=myX+dX
    myY=myY+dY
    
    if(live<3){
        heartX3=-1000
    }if(live<2){
        heartX2=-1000
    }if(live<1){
        heartX=-1000
        laserX=150
        myX=375
        myY=375
        if(dead==false){
            console.log("Press R to restart")
            dead=true
        }
    }
    if(live>0){
        heartX=50
        laserX=-1000
        dead=false
    }
    if(live>1){
        heartX2=100
    }
    if(live>2){
        heartX3=150
    }
    
    if(mouseX>myX-35){
        if(mouseX<myX){
            dX=dX+0.05
        }
    }
    if(mouseX>myX-20){
        if(mouseX<myX){
            dX=dX+0.025
        }
    }
    
    if(mouseX<myX+85){
        if(mouseX>myX+50){
            dX=dX-0.05
        }
    }
    if(mouseX<myX+70){
        if(mouseX>myX+50){
            dX=dX-0.025
        }
    }
    
    //
    
    if(mouseY>myY-35){
        if(mouseY<myY){
            dY=dY+0.05
        }
    }
    if(mouseY>myY-20){
        if(mouseY<myY){
            dY=dY+0.025
        }
    }
    
    if(mouseY<myY+85){
        if(mouseY>myY+50){
            dY=dY-0.05
        }
    }
    if(mouseY<myY+70){
        if(mouseY>myY+50){
            dY=dY-0.025
        }
    }
    
    if(areColliding(mouseX, mouseY, 1, 1,  myX, myY, 50, 50)){
        if(forNoDeathTime==false){
            live=live-1
            myX=375
            myY=275
        }
    }
    
    if(forNoDeathTime==true){
        noDeathTime=noDeathTime+1
    }else{
        if(myX<50){
            myX=50
        }
        if(myX>750){
            myX=750
        }
        if(myY<50){
            myY=50
        }
        if(myY>550){
            myY=550
        }
    }
    
    if(noDeathTime==50){
        myX=-1000
    }if(noDeathTime==100){
        myX=375
    }if(noDeathTime==150){
        myX=-1000
    }if(noDeathTime==200){
        myX=375
    }if(noDeathTime==250){
        myX=-1000
    }if(noDeathTime==300){
        myX=375
        forNoDeathTime=false
        noDeathTime=0
    }
    
    dX=dX/1.05
    dY=dY/1.05
}

function draw(){
    drawImage(paddle, 50, 50, 750, 550)
    drawImage(heartSmall, heartX, 550, 50, 50)
    drawImage(heartSmall, heartX2, 550, 50, 50)
    drawImage(heartSmall, heartX3, 550, 50, 50)
    drawImage(box, myX,myY, 50, 50)
    drawImage(laserRed[2], laserX, 50, 550, 550)
}

function keyup(key){
    if(live<1){
        if(key==82){
            live=3
            dead=false
            myX=375
            myY=275
            forNoDeathTime=true
        }
    }
}