let backY=0,backY2=600,myX=355,myY=490,brPatroni=0,patronX=[],patronY=[],brVragove=0,vragX=[],vragY=[],timeForVrag=50,koq=[],tipVrag=[],charge=false,timeForCharge=0,timeForTimeForVrag=randomInteger(150),sizeX=[],sizeY=[],brVragPatroni=[],tipPatroni=[],vragPatronX=[],vragPatronY=[],ForBrVragPatroni=[],live=100,liveMonitor=0,gamemode=1;

koq[0]=spaceship[4];
sizeX[0]=50;
sizeY[0]=80;

koq[1]=spaceship[2];
sizeX[1]=80;
sizeY[1]=70;

koq[2]=spaceship[1];
sizeX[2]=80;
sizeY[2]=75;

koq[3]=spaceship[7];
sizeX[3]=80;
sizeY[3]=60;

for(iv=0; iv<=brVragove; iv=iv+1){
    tipVrag[iv]=randomInteger(4)
}

for(ivp=0; ivp<=brVragPatroni[tipPatroni[ivp]]; ivp=ivp+1){
    brVragPatroni[tipPatroni[iv]]=0
}

function update() {    
    backY=backY+1
    backY2=backY2+1
    
    if(backY>600){
        backY=backY2-600
    }if(backY2>600){
        backY2=backY-600
    }
    
    if(gamemode==1){
        myX = mouseX - 40
        myY = mouseY - 40
    }else{
        //if(isKeyPressed(65) || isKeyPressed())
    }
    
    if(myX<0){
        myX=0
        dX=0
    }if(myX>720){
        myX=720
        dX=0
    }if(myY<0){
        myY=0
    }if(myY>520){
        myY=520
    }
    
    if(brPatroni>12){
        brPatroni=12
    }
    
    for(ip=0; ip<=brPatroni; ip=ip+1){
        patronY[ip]=patronY[ip]-5
    }
    
    timeForVrag=timeForVrag+1
    if(timeForVrag>timeForTimeForVrag){
        brVragove=brVragove+1
        tipVrag[brVragove]=randomInteger(4)
        vragX[brVragove]=randomInteger(720)
        vragY[brVragove]=-80
        timeForTimeForVrag=randomInteger(150)
        ForBrVragPatroni[brVragove]=0
        timeForVrag=0
    }
    
    if(timeForTimeForVrag<75){
        timeForTimeForVrag=75
    }
    
    for(iv=0; iv<=brVragove; iv=iv+1){
        vragY[iv]=vragY[iv]+2
    }
    
    for(iv=0; iv<=brVragove; iv=iv+1){
        for(ip=0; ip<=brPatroni; ip=ip+1){
            if(areColliding( patronX[ip], patronY[ip], 10, 30,  vragX[iv], vragY[iv], sizeX[tipVrag[iv]], sizeY[tipVrag[iv]])){
                vragX[iv]=-1000
            }
        }
    }
    
    if(charge==true){
        timeForCharge=timeForCharge+1
        if(timeForCharge>6){
            brPatroni=brPatroni-1
            timeForCharge=0
        }
        
        if(brPatroni<=0){
            charge=false
        }
    }
    
    ForBrVragPatroni=ForBrVragPatroni+1
    if(ForBrVragPatroni>250){
        for(iv=0; iv<=brVragove; iv=iv+1){
            if(tipVrag[iv]==0){
                brVragPatroni=brVragPatroni+1
                vragPatronX[brVragPatroni]=vragX[iv]+10
                vragPatronY[brVragPatroni]=vragY[iv]+20
                ForBrVragPatroni=0
            }
        }
    }
    
    for(ivp=0; ivp<=brVragPatroni; ivp=ivp+1){
        vragPatronY[ivp]=vragPatronY[ivp]+8
    }
    
    liveMonitor = liveMonitor + (live*2 - liveMonitor) / 25
    if(live<0){
        live=0
    }
    
    for(ivp=0; ivp<=brVragPatroni; ivp=ivp+1){
        if(areColliding( vragPatronX[ivp], vragPatronY[ivp], 25, 25,  myX, myY, 80, 80)){
            live=live-35
            vragPatronX[ivp]=-1000
        }
    }
}

function draw(){
    drawImage(backStars, 0, backY, 800, 600)
    drawImage(backStars, 0, backY2, 800, 600)
    
    for(ivp=0; ivp<=brVragPatroni; ivp=ivp+1){
        drawImage(powerupRed, vragPatronX[ivp], vragPatronY[ivp], 30, 30)
    }
    
    for(ip=0; ip<=brPatroni; ip=ip+1){
        drawImage(powerupBlue, patronX[ip], patronY[ip], 10, 30)
    }
    
    for(ipp=0; ipp<=11-brPatroni; ipp=ipp+1){
        drawImage(paddle, 760, 580-ipp*12, 30, 10)
    }
    
    for(iv=0; iv<=brVragove; iv=iv+1){
        drawImage(koq[tipVrag[iv]], vragX[iv], vragY[iv], sizeX[tipVrag[iv]], sizeY[tipVrag[iv]])
    }
    
    drawImage(powerupRed, 10, 560, liveMonitor, 30)
    
    drawImage(playerShip2_blue, myX, myY, 80, 80)
}

function keyup(key){
    console.log("Pressed", key)
    
    if(patronY[brPatroni]<-30){
        if(key==32){
            timeForCharge=10
            charge=true
        }
    }
    
    if(key==49){
        gamemode=1
    }if(key==50){
        gamemode=2
    }
}

function mouseup(){
    if(brPatroni<=12){
        brPatroni=brPatroni+1
        patronX[brPatroni]=myX+35
        patronY[brPatroni]=myY+20
    }
    
    if(charge==true){
        charge=false
    }
}