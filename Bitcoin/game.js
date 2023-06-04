let backX=0,backY=0,place=0,shopX,shopY,coinX=650,coinY=5,gemX=575,gemY=5,coin=0,gem=0,signX=-100,signY=520,duckX0,duckY0,backX2,backY2=0,backX3,backY3=0,cherryX=-100,cherryY=420,backX4=-1000,backY4=0,crossX=-100,crossY=0,heroX=-100,heroY=410,backX5=-1000,backY5=0,sunX=-100,sunY=420,backX6=-1000,backY6=0,paddleX=-1000,paddleX2=-1000,paddleX3=-1000,duckX=-1000,duckY=100,duckX2=-1000,duckY2=100,duckX3=-1000,duckY3=100,duckX4=-1000,duckY4=100,duckX5=-1000,duckY5=400,duckX6=-1000,duckY6=400,duckX7=-1000,duckY7=400,duckX8=-1000,duckY8=400,forduck=0,ballX0=-1000,ballY0=155,ballX02=-1000,ballY02=155,ballX03=-1000,ballY03=155,ballX04=-1000,ballY04=155,ballX05=-1000,ballY05=455,ballX06=-1000,ballY06=455,ballX07=-1000,ballY07=455,ballX08=-1000,ballY08=455,ballX09=-1000,ballY09=305,ballX010=-1000,ballY010=305,ballX011=-1000,ballY011=305,ballX012=-1000,ballY012=305,beeX=-1000,beeY=250,beeX2=-1000,beeY2=250,beeX3=-1000,beeY3=250,beeX4=-1000,beeY4=250,pole,pole2,sizeX=100,sizeY=100,startCherry=0,bombX=-1000,bombY=-160,speed=1,heartX=-1000,heartY=550,heartX2=-1000,heartY2=550,heartX3=-1000,heartY3=550,laserX=-1000,laserY=0,live=3,sizeY2,sizeX2,startNote=false,noteX=-1000,noteY=0,poleNote,poleBomb,live2=3,femaleX=-1000,femaleY=0,startFemale=false,sizeY3=100,sizeX3=100,cloudX=-1000,cloudY=0,catX=-1000,catY=0,sunX2,speedCat,catX2,speedCloud,cloudX2,live3=3,beeX0=-1000,beeY0,speedBee,ballX,ballY,sizeBallX,sizeBallY,backX7=-1000,backY7=0,startBall=false,speedBall,go,boxX=-1000,boxY=0,points=0,time=0,second=0,minutes=0,hour=7,open=true,signOpenX=-1000,signOpenY=520,signClosedX=-1000,signClosedY=520,buyHeartX=-1000,buyHeartY=0,arrowX=-1000,arrowY=0,coinX2=-1000,coinY2=0,tipX=-1000,tipY=0,pauseX=-1000,pauseY=0,pauseX2=-1000,pauseY2=0,pause=false,pauseT=false,bedX=-1000,bedY=0,bed=false,stopBall=false,stopBall2=false,stop=0,arrowX2=-1000,arrowY2=0,coinX3=-1000,coinY3=0,speedTime=100,closed=false,minerX0=300,minerY0=525,minerX=300,minerY=525,minerX2=300,minerY2=525,minerX3=300,minerY3=525,minerX4=300,minerY4=525,minerX5=300,minerY5=525,minerX6=300,minerY6=525,gemX0=-1000,gemY0=0,arrowX3=-1000,arrowY3=0,miners=0,coinX00=-1000,coinY00=0,coinX0=-1000,coinY0=545,coinX02=-1000,coinY02=545,coinX03=-1000,coinY03=545,coinX04=-1000,coinY04=545,coinX05=-1000,coinY05=545,coinX06=-1000,coinY06=545,dotX=-1000,dotY=590,dotX2=-1000,dotY2=590,dotX3=-1000,dotY3=590,levelX=725,levelY=5,level=1,gemX02=-1000,gemY02,arrowX4=-1000,arrowY4=0,levelupX=-1000,levelupY=0,coinX4=-1000,coinY4=160,arrowX5=-1000,arrowY5=170,minerGX=-1000,minerGY=160,gemX8=-1000,gemY8=180,minersG=0,minersG2=false,gemminerX=-1000,gemminerY=545,gemminerX2=-1000,gemminerY2=545,gemminerX3=-1000,gemminerY3=545,gemminerX4=-1000,gemminerY4=545,gemminerX5=-1000,gemminerY5=545,gemminerX6=-1000,gemminerY6=545,coinX7=-1000,coinY7=160,arrowX6=-1000,arrowY6=170,boost=false,spaceX=-1000,spaceY=175,gemX9=-1000,gemY9=290,arrowX7=-1000,arrowY7=300,spaceX2=-1000,spaceY2=290,boost2=false

function update() {
    pauseY=565
    pauseY2=565
    if(place==0){
        pauseX=347.5
        pauseX2=362.5
    }
    if(live<1){
        pauseX=625
        pauseX2=640
    }else{
        pauseX=685
        pauseX2=700
    }
    if(live<=0){
        tipX=660
        tipY=550
    }else{
        tipX=-1000
    }
    if(pause==false){
        time=time+1
        if(time>=speedTime){
            minutes=minutes+1
            time=0
            console.log(hour,":",minutes)
            coin=coin+miners
            if(boost==true){
                gem=gem+minersG
            }
            if(boost2==true){
                coin=coin+miners*10
            }
        }
        if(minutes>59){
            hour=hour+1
            minutes=0
        }
        if(hour>=7){
            if(hour<18){
                open=true
                speedTime=100
            }else{
                open=false
            }
        }
        if(hour>=23){
            hour=0
        }
        if(pauseT==false){
            console.log("play")
            pauseT=true
        }
        if(minutes==9){
            minersG2=false
        }if(minutes==19){
            minersG2=false
        }if(minutes==29){
            minersG2=false
        }if(minutes==39){
            minersG2=false
        }if(minutes==49){
            minersG2=false
        }if(minutes==59){
            minersG2=false
        }
        if(minersG>0){
            if(minutes==10){
                if(minersG2==false){
                    gem=gem+minersG
                    console.log(gem, "gems")
                    minersG2=true
                }
            }if(minutes==20){
                if(minersG2==false){
                    gem=gem+minersG
                    console.log(gem, "gems")
                    minersG2=true
                }
            }if(minutes==30){
                if(minersG2==false){
                    gem=gem+minersG
                    console.log(gem, "gems")
                    minersG2=true
                }
            }if(minutes==40){
                if(minersG2==false){
                    gem=gem+minersG
                    console.log(gem, "gems")
                    minersG2=true
                }
            }if(minutes==50){
                if(minersG2==false){
                    gem=gem+minersG
                    console.log(gem, "gems")
                    minersG2=true
                }
            }if(minutes==60){
                if(minersG2==false){
                    gem=gem+minersG
                    console.log(gem, "gems")
                    minersG2=true
                }
            }
        }
    }if(pause==true){
        place=0
        if(pauseT==false){
            console.log("pause")
            pauseT=true
        }
    }
    if(open==true){
        signOpenX=720
        signOpenY=520
        signClosedX=-1000
    }if(open==false){
        signOpenX=-1000
        signClosedX=720
        signClosedY=520
        if(closed==false){
            place=0
        }
    }
    if(place==0){
        backX=0
        shopX=0
        shopY=420
        signX=-1000
        duckX0=160
        duckY0=420
        cherryX=260
        cherryY=420
        backX2=-1000
        backX3=-1000
        cherryX=270
        backX4=-1000
        crossX=-1000
        crossY=0
        heroX=375
        heroY=410
        backX5=-1000
        sunX=470
        backX6=-1000
        paddleX=-1000
        paddleX2=-1000
        paddleX3=-1000
        duckX=-1000
        duckX2=-1000
        duckX3=-1000
        duckX4=-1000
        duckX5=-1000
        duckX6=-1000
        duckX7=-1000
        duckX8=-1000
        forduck=0
        ballX0=-1000
        ballX02=-1000
        ballX03=-1000
        ballX04=-1000
        ballX05=-1000
        ballX06=-1000
        ballX07=-1000
        ballX08=-1000
        ballX09=-1000
        ballX010=-1000
        ballX011=-1000
        ballX012=-1000
        beeX=-1000
        beeX2=-1000
        beeX3=-1000
        beeX4=-1000
        sizeX=100
        sizeY=100
        startCherry=0
        bombX=-1000
        heartX=-1000
        heartX2=-1000
        heartX3=-1000
        heartX4=-1000
        heartX5=-1000
        heartX6=-1000
        heartX7=-1000
        heartX8=-1000
        heartX9=-1000
        laserX=-1000
        speed=1
        startNote=false
        noteX=-1000
        femaleX=-1000
        startFemale=false
        sizeY3=100
        sizeX3=100
        cloudX=-1000
        catX=-1000
        sunY=420
        beeX0=-1000
        ballX=590
        ballY=430
        sizeBallX=90
        sizeBallY=90
        backX7=-1000
        startBall=false
        boxX=-1000
        points=0
        buyHeartX=-1000
        arrowX=-1000
        coinX2=-1000
        stopBall2=false
        stopBall=false
        stop=0
        bedX=-1000
        coinX3=-1000
        arrowX2=-1000
        scrollX=-50
        scrollY=0
        minerX0=-1000
        minerX=-1000
        minerX2=-1000
        minerX3=-1000
        minerX4=-1000
        minerX5=-1000
        minerX6=-1000
        gemX0=-1000
        arrowX3=-1000
        coinX00=-1000
        coinX0=-1000
        coinX02=-1000
        coinX03=-1000
        coinX04=-1000
        coinX05=-1000
        coinX06=-1000
        dotX=-1000
        dotX2=-1000
        dotX3=-1000
        gemX02=-1000
        arrowX4=-1000
        levelupX=-1000
        coinX4=-1000
        arrowX5=-1000
        minerGX=-1000
        gemX8=-1000
        gemminerX=-1000
        gemminerX2=-1000
        gemminerX3=-1000
        gemminerX4=-1000
        gemminerX5=-1000
        gemminerX6=-1000
        coinX7=-1000
        arrowX6=-1000
        spaceX=-1000
        gemX9=-1000
        arrowX7=-1000
        spaceX2=-1000
    }
    if(place==1){
        scrollX=-1000
        scrollY=-1000
        backX2=0
        //неща за магазина
        if(coin>=100){
            if(live<3){
                buyHeartX=450
                buyHeartY=500
                arrowX=390
                arrowY=520
                coinX2=310
                coinY2=510
            }else{
                buyHeartX=-1000
                arrowX=-1000
                coinX2=-1000
            }
        }else{
            buyHeartX=-1000
            arrowX=-1000
            coinX2=-1000
        }
        if(bed==false){
            coinX3=10
            coinY3=10
            arrowX2=90
            arrowY2=30
            bedX=170
            bedY=10
        }else{
            coinX3=-1000
            arrowX2=-1000
            bedX=-1000
        }
        if(boost==false){
            if(minersG>0){
                coinX7=450
                arrowX6=525
                spaceX=610
                spaceY=175
            }
        }else{
            coinX7=-1000
            arrowX6=-1000
            spaceX=-1000
        }
        if(boost2==false){
            if(miners>0){
                gemX9=450
                arrowX7=525
                spaceX2=610
            }
        }else{
            gemX9=-1000
            arrowX7=-1000
            spaceX2=-1000
        }
        gemX0=10
        arrowX3=85
        minerX0=165
        gemY0=290
        arrowY3=300
        minerY0=290
        coinX00=200
        coinY00=310
        gemX02=10
        gemY02=400
        arrowX4=85
        arrowY4=410
        levelupX=165
        levelupY=395
        coinX4=10
        arrowX5=85
        minerGX=165
        gemX8=200        
    }
    if(place==2){
        scrollX=-1000
        scrollY=-1000
        backX3=0
        crossX=mouseX-25
        crossY=mouseY-25
        paddleX=0
        paddleX2=0
        paddleX3=0
        duckX=duckX+1
        duckX2=duckX2+1
        duckX3=duckX3+1
        duckX4=duckX4+1
        duckX5=duckX5+1
        duckX6=duckX6+1
        duckX7=duckX7+1
        duckX8=duckX8+1
        beeX=beeX-1
        beeX2=beeX2-1
        beeX3=beeX3-1
        beeX4=beeX4-1
        ballX0=ballX0+1
        ballX02=ballX02+1
        ballX03=ballX03+1
        ballX04=ballX04+1
        ballX05=ballX05+1
        ballX06=ballX06+1
        ballX07=ballX07+1
        ballX08=ballX08+1
        ballX09=ballX09-1
        ballX010=ballX010-1
        ballX011=ballX011-1
        ballX012=ballX012-1
        if(duckX>=800){
            duckX=-50
            duckY=100
        }
        if(duckX2>=800){
            duckX2=-50
            duckY2=100
        }
        if(duckX3>=800){
            duckX3=-50
            duckY3=100
        }
        if(duckX4>=800){
            duckX4=-50
            duckY4=100
        }
        if(duckX5>=800){
            duckX5=-50
            duckY5=400
        }
        if(duckX6>=800){
            duckX6=-50
            duckY6=400
        }
        if(duckX7>=800){
            duckX7=-50
            duckY7=400
        }
        if(duckX8>=800){
            duckX8=-50
            duckY8=400
        }
        if(beeX<=-50){
            beeX=800
            beeY=250
        }
        if(beeX2<=-50){
            beeX2=800
            beeY2=250
        }
        if(beeX3<=-50){
            beeX3=800
            beeY3=250
        }
        if(beeX4<=-50){
            beeX4=800
            beeY4=250
        }
        if(ballX0>=800){
            ballX0=-50
        }
        if(ballX02>=800){
            ballX02=-50
        }
        if(ballX03>=800){
            ballX03=-50
        }
        if(ballX04>=800){
            ballX04=-50
        }
        if(ballX05>=800){
            ballX05=-50
        }
        if(ballX06>=800){
            ballX06=-50
        }
        if(ballX07>=800){
            ballX07=-50
        }
        if(ballX08>=800){
            ballX08=-50
        }
        if(ballX09<=-50){
            ballX09=800
        }
        if(ballX010<=-50){
            ballX010=800
        }
        if(ballX011<=-50){
            ballX011=800
        }
        if(ballX012<=-50){
            ballX012=800
        }
        if(forduck==0){
            duckX=160
            duckX2=370
            duckX3=580
            duckX4=790
            duckX5=0
            duckX6=200
            duckX7=400
            duckX8=600
            beeX=750
            beeX2=550
            beeX3=350
            beeX4=150
            ballX0=180
            ballX02=390
            ballX03=600
            ballX04=810
            ballX05=20
            ballX06=220
            ballX07=420
            ballX08=620
            ballX09=770
            ballX010=570
            ballX011=370
            ballX012=170
            forduck=1
        }
    }
    if(place==3){
        backX4=0
        crossX=mouseX-25
        crossY=mouseY-25
        sizeX=160
        sizeY=160
        sizeX2=160
        sizeY2=160
        scrollX=-1000
        scrollY=-1000
        if(startCherry==0){
            pole=randomInteger(5)
            speed=1
            cherryY=-160
            startCherry=1
        }
        cherryY=cherryY+speed
        bombY=cherryY
        if(speed>=6){
            speed=6
        }
        if(pole==0){
            cherryX=0
            if(speed>4){
                if(pole2==0){
                    bombX=160
                }
                if(pole2==1){
                    bombX=320
                }
                if(pole2==2){
                    bombX=480
                }
                if(pole2==3){
                    bombX=640
                }
            }
        }
        if(pole==1){
            cherryX=160
            if(speed>4){
                if(pole2==0){
                    bombX=0
                }
                if(pole2==1){
                    bombX=320
                }
                if(pole2==2){
                    bombX=480
                }
                if(pole2==3){
                    bombX=640
                }
            }
        }
        if(pole==2){
            cherryX=320
            if(speed>4){
                if(pole2==0){
                    bombX=0
                }
                if(pole2==1){
                    bombX=160
                }
                if(pole2==2){
                    bombX=480
                }
                if(pole2==3){
                    bombX=640
                }
            }
        }
        if(pole==3){
            cherryX=480
            if(speed>4){
                if(pole2==0){
                    bombX=0
                }
                if(pole2==1){
                    bombX=160
                }
                if(pole2==2){
                    bombX=320
                }
                if(pole==3){
                    bombX=640
                }
            }
        }
        if(pole==4){
            cherryX=640
            if(speed>4){
                if(pole2==0){
                    bombX=0
                }
                if(pole2==1){
                    bombX=160
                }
                if(pole2==2){
                    bombX=320
                }
                if(pole2=3){
                    bombX=480
                }
            }
        }
        if(pole==5){
            cerryX=-1000
        }
        if(cherryY>=600){
            cherryY=-160
            speed=speed+1
            pole=randomInteger(5)
            pole2=randomInteger(4)
        }
    }
    if(place==4){
        backX5=0
        heroY=mouseY-70
        sizeX2=120
        sizeY2=120
        bombX=noteX
        scrollX=-1000
        scrollY=-1000
        if(startNote==false){
            noteX=920
            poleNote=randomInteger(5)
            speed=1
            bombY=-1000
            startNote=true
        }
        noteX=noteX-speed
        if(live<3){
            heartX3=-1000
        }if(live<2){
            heartX2=-1000
        }if(live<1){
            heartX=-1000
            noteX=-1000
            bombX=-1000
            laserX=100
            poleNote=5
        }
        if(live>0){
            laserX=-1000
        }
        if(live>0){
            heartX=80
        }
        if(live>1){
            heartX2=130
        }
        if(live>2){
            heartX3=180
        }
        if(heroY>=490){
            heroY=490
        }
        if(heroY<=-15){
            heroY=-15
        }
        if(noteX<=-120){
            noteX=920
            speed=speed+1
            poleNote=randomInteger(5)
            poleBomb=randomInteger(4)
        }
        if(poleNote==0){
            noteY=0
            if(speed>5){
                if(poleBomb==0){
                    bombY=120
                }
                if(poleBomb==1){
                    bombY=240
                }
                if(poleBomb==2){
                    bombY=360
                }
                if(poleBomb==3){
                    bombY=480
                }
            }
        }
        if(poleNote==1){
            noteY=120
            if(speed>5){
                if(poleBomb==0){
                    bombY=0
                }
                if(poleBomb==1){
                    bombY=240
                }
                if(poleBomb==2){
                    bombY=360
                }
                if(poleBomb==3){
                    bombY=480
                }
            }
        }
        if(poleNote==2){
            noteY=240
            if(speed>5){
                if(poleBomb==0){
                    bombY=0
                }
                if(poleBomb==1){
                    bombY=120
                }
                if(poleBomb==2){
                    bombY=360
                }
                if(poleBomb==3){
                    bombY=480
                }
            }
        }
        if(poleNote==3){
            noteY=360
            if(speed>5){
                if(poleBomb==0){
                    bombY=0
                }
                if(poleBomb==1){
                    bombY=120
                }
                if(poleBomb==2){
                    bombY=240
                }
                if(poleBomb==3){
                    bombY=480
                }
            }
        }
        if(poleNote==4){
            noteY=480
            if(speed>5){
                if(poleBomb==0){
                    bombY=0
                }
                if(poleBomb==1){
                    bombY=120
                }
                if(poleBomb==2){
                    bombY=240
                }
                if(poleBomb==3){
                    bombY=360
                }
            }
        }
        if(poleNote==5){
            noteX=-1000
            bombX=-1000
        }
        if(heroY>noteY-85){
            if(heroX>noteX-50){
                if(heroY<noteY+120){
                    if(heroX<noteX+120){
                        noteX=920
                        bombX=920
                        poleNote=randomInteger(5)
                        poleBomb=randomInteger(4)
                        coin=coin+level
                        console.log(coin, "dollars")
                        speed=speed+1
                    }
                }
            }
        }
        if(heroY>bombY-85){
            if(heroX>bombX-50){
                if(heroY<bombY+120){
                    if(heroX<bombX+120){
                        noteX=920
                        bombX=920
                        poleNote=randomInteger(5)
                        poleBomb=randomInteger(4)
                        live=live-1
                        speed=speed+1
                    }
                }
            }
        }
        if(speed>=10){
            speed=10
        }
    }
    if(place==5){
        backX6=0
        femaleX=25
        sizeX3=80
        sizeY3=80
        scrollX=-1000
        scrollY=-1000
        if(live<3){
            heartX3=-1000
        }if(live<2){
            heartX2=-1000
        }if(live<1){
            heartX=-1000
            cloudX=1000
            sunX=1000
            catX=1000
            beeX0=1000
            femaleX=-1000
            laserX=100
        }
        if(live>0){
            laserX=-1000
        }
        if(live>0){
            heartX=80
        }
        if(live>1){
            heartX2=130
        }
        if(live>2){
            heartX3=180
        }
        if(startFemale==false){
            femaleY=randomInteger(520)
            sunX=800
            catX=800
            beeX0=800
            sunY=randomInteger(440)
            catY=randomInteger(460)
            beeY0=520
            cloudY=0
            cloudX=800
            speed=randomInteger(3)
            speedCat=randomInteger(4)
            speedCloud=randomInteger(3)
            speedBee=randomInteger(4)
            startFemale=true
        }
        femaleY=femaleY+2
        sunX=sunX-speed
        catX=catX-speedCat
        cloudX=cloudX-speedCloud
        beeX0=beeX0-speedBee
        if(femaleY>=520){
            femaleY=520
        }
        if(femaleY<=-15){
            femaleY=-15
        }
        if(live3>0){
            if(sunX<=-80){
                sunX=800
                sunY=randomInteger(440)
                coin=coin+level
                console.log(coin, "dollars")
                speed=speed+1
            }
            if(catX<=-90){
                catX=800
                catY=randomInteger(460)
                coin=coin+level
                console.log(coin, "dollars")
                speedCat=speedCat+1
            }
            if(beeX0<=-80){
                beeX0=800
                coin=coin+level
                console.log(coin, "dollars")
                speed=speed+1
            }
            if(cloudX<=-120){
                cloudX=800
                coin=coin+level
                console.log(coin, "dollars")
                speedCloud=speedCloud+1
            }
        }
        if(catX<=-90){
            catX=800
            catY=randomInteger(460)
            coin=coin+level
            console.log(coin, "dollars")
            speedCat=speedCat+1
        }
        if(beeX0<=-80){
            beeX0=800
            coin=coin+level
            console.log(coin, "dollars")
            speed=speed+1
        }
        if(cloudX<=-120){
            cloudX=800
            coin=coin+level
            console.log(coin, "dollars")
            speedCloud=speedCloud+1
        }
        if(speed>=5){
            speed=randomInteger(5)
            if(speed<3){
                speed=randomInteger(5)
            }
        }
        if(speedCat>=6){
            speedCat=randomInteger(6)
            if(speedCat<3){
                speedCat=randomInteger(6)
            }
        }
        if(speedCloud>=6){
            speedCloud=randomInteger(6)
            if(speedCloud<2){
                speedCloud=randomInteger(6)
            }
        }
        if(speedBee>=6){
            speedBee=randomInteger(6)
            if(speedBee<2){
                speedBee=randomInteger(6)
            }
        }
        if(sunY<60){
            sunY=randomInteger(520)
        }
        if(catY<60){
            catY=randomInteger(540)
        }
        if(speed==0){
            speed=randomInteger(5)
        }
        if(speedCat==0){
            speedCat=randomInteger(6)
        }
        if(speedCloud==0){
            speedCloud=randomInteger(6)
        }
        if(speedBee==0){
            speedBee=randomInteger(6)
        }
        if(femaleY>sunY-75){
            if(femaleX>sunX-45){
                if(femaleY<sunY+50){
                    if(femaleX<sunX+50){
                        live=live-1
                        sunX=800
                        sunY=randomInteger(440)
                        speed=speed+1
                    }
                }
            }
        }
        if(femaleY>catY-60){
            if(femaleX>catX-50){
                if(femaleY<catY+47){
                    if(femaleX<catX+50){
                        live=live-1
                        catX=800
                        catY=randomInteger(460)
                        speedCat=speed+1
                    }
                }
            }
        }
        if(femaleY>beeY0-65){
            if(femaleX>beeX0-45){
                if(femaleY<beeY0+80){
                    if(femaleX<beeX0+80){
                        live=live-1
                        beeX0=800
                        speedCat=speed+1
                    }
                }
            }
        }
        if(femaleY>cloudY-60){
            if(femaleX>cloudX-50){
                if(femaleY<cloudY+45){
                    if(femaleX<cloudX+85){
                        live=live-1
                        cloudX=800
                        speedCloud=speed+1
                    }
                }
            }
        }
    }
    if(place==6){
        backX7=0
        backY7=0
        boxX=25
        boxY=mouseY-30
        scrollX=-1000
        scrollY=-1000
        if(live<3){
            heartX3=-1000
        }if(live<2){
            heartX2=-1000
        }if(live<1){
            heartX=-1000
            boxX=-1000
            ballX=-1000
            laserX=100
        }
        if(live>0){
            laserX=-1000
        }
        if(live>0){
            heartX=80
        }
        if(live>1){
            heartX2=130
        }
        if(live>2){
            heartX3=180
        }
        if(boxY<=0){
            boxY=0
        }
        if(boxY>=540){
            boxY=540
        }
        if(startBall==false){
            sizeBallX=100
            sizeBallY=100
            speedBall=2
            ballX=400
            ballY=randomInteger(500)
            go=randomInteger(2)
            points=0
            sizeBallX=100
            sizeBallY=100
            startBall=true
        }
        if(go==0){
            ballX=ballX-speedBall
            ballY=ballY-speedBall
        }
        if(go==1){
            ballX=ballX-speedBall
            ballY=ballY+speedBall
        } 
        if(go==2){
            ballX=ballX+speedBall
            ballY=ballY+speedBall
        }
        if(go==3){
            ballX=ballX+speedBall
            ballY=ballY-speedBall
        }
        if(ballY<=0){
            if(go==0){
                go=1
            }if(go==3){
                go=2
            }
        }
        if(ballY>=600-sizeBallY){
            if(go==1){
                go=0
            }if(go==2){
                go=3
            }
        }
        if(ballX<=0){
            stopBall=true
        }
        if(stopBall==true){
            stop=stop+1
            if(stopBall2==false){
                live=live-1
                ballX=400
                ballY=randomInteger(500)
                go=4
                stopBall2=true
            }
        }
        if(stop>=100){
            go=randomInteger(2)
            stopBall=false
            stopBall2=false
            stop=0
        }
        if(ballX>=800-sizeBallX){
            if(live<1){
                ballX=-1000
            }else{
                points=points+1
                console.log(points, "points")
                gem=gem+1
                console.log(gem, "gems")
                if(go==2){
                    go=1
                }
                if(go==3){
                    go=0
                }   
            }
        }
        if(ballY>boxY-60){
            if(ballX>boxX-25){
                if(ballY<boxY+60){
                    if(ballX<boxX+25){
                        sizeBallX=sizeBallX-3
                        sizeBallY=sizeBallY-3
                        if(speedBall>=50){
                            speedBall=speedBall+1
                            
                        }
                        if(go==0){
                            go=3
                        }if(go==1){
                            go=2
                        }
                    }
                }
            }
        }
    }
    if(speedBall>8){
        speedBall=8
    }
    if(points>=5){
        if(points<20){
            speedBall=3
        }
    }
    if(points>=20){
        if(points<50){
            seedBall=4
        }
    }
    if(sizeBallX<40){
        sizeBallX=40
    }
    if(sizeBallY<40){
        sizeBallY=40
    }
    if(place==10){
        shopX=-1000
        duckX0=-1000
        openX=-1000
        scrollX=750
        if(bed==true){
            bedX=150
            bedY=420
        }
        if(place==4){
            heroX=25
        }else{
            heroX=-1000
        }
        if(place==3){
            
        }else{
            cherryX=-1000
        }
        if(place==5){
            
        }else{
            sunX=-1000
        }
        if(place==6){
            
        }else{
            ballX=-1000
        }
        if(miners<7){
            dotX=-1000
            dotX2=-1000
            dotX3=-1000
        }if(miners<6){
            minerX6=-1000
            coinX06=-1000
        }if(miners<5){
            minerX5=-1000
            coinX05=-1000
        }if(miners<4){
            minerX4=-1000
            coinX04=-1000
        }if(miners<3){
            minerX3=-1000
            coinX03=-1000
        }if(miners<2){
            minerX2=-1000
            coinX02=-1000
        }if(miners<1){
            minerX=-1000
            coinX0=-1000
        }
        if(miners>0){
            minerX=5
            coinX0=18
        }
        if(miners>1){
            minerX2=110
            coinX02=123
        }
        if(miners>2){
            minerX3=215
            coinX03=228
        }
        if(miners>3){
            minerX4=320
            coinX04=333
        }
        if(miners>4){
            minerX5=425
            coinX05=438
        }
        if(miners>5){
            minerX6=530
            coinX06=543
        }
        if(miners>6){
            dotX=640
            dotX2=650
            dotX3=660
        }
        if(minersG<7){
            dotX=-1000
            dotX2=-1000
            dotX3=-1000
        }if(minersG<6){
            minerX6=-1000
            gemminerX6=-1000
        }if(minersG<5){
            minerX5=-1000
            gemminerX5=-1000
        }if(minersG<4){
            minerX4=-1000
            gemminerX4=-1000
        }if(minersG<3){
            minerX3=-1000
            gemminerX3=-1000
        }if(minersG<2){
            minerX2=-1000
            gemminerX2=-1000
        }if(minersG<1){
            minerX=-1000
            gemminerX=-1000
        }
        if(minersG>0){
            minerX=5
            gemminerX=61
        }
        if(minersG>1){
            minerX2=110
            gemminerX2=166
        }
        if(minersG>2){
            minerX3=215
            gemminerX3=271
        }
        if(minersG>3){
            minerX4=320
            gemminerX4=376
        }
        if(minersG>4){
            minerX5=425
            gemminerX5=481
        }
        if(minersG>5){
            minerX6=530
            gemminerX6=586
        }
        if(minersG>6){
            dotX=640
            dotX2=650
            dotX3=660
        }
        if(boost==true){
            spaceX=170
            spaceY=10
        }else{
            spaceX=-1000
        }
    }
    if(place>0){
        shopX=-1000
        duckX0=-1000
        openX=-1000
        if(place==10){
            signX=-1000
        }else{
            signX=0
        }
        if(place==4){
            heroX=25
        }else{
            heroX=-1000
        }
        if(place==3){
            
        }else{
            cherryX=-1000
        }
        if(place==5){
            
        }else{
            sunX=-1000
        }
        if(place==6){
            
        }else{
            ballX=-1000
        }
    }
}

function draw() {
    drawImage(backMushrooms, backX, backY, 800, 600)
    drawImage(backMarket, backX2, backY2, 800, 600)
    drawImage(backDesert, backX3, backY3, 800, 600)
    drawImage(backGrass, backX4, backY4, 800, 600)
    drawImage(backSun, backX5, backY5, 800, 600)
    drawImage(backClouds, backX6, backY6, 800, 600)
    drawImage(paddle, backX7, backY7, 800, 600)
    drawImage(star, levelX, levelY, 50, 50)
    drawImage(flagGreen1, signOpenX, signOpenY, 80, 80)
    drawImage(flagRed1, signClosedX, signClosedY, 80, 80)
    drawImage(heartSmall, heartX, heartY, 50 ,50)
    drawImage(heartSmall, heartX2, heartY2, 50 ,50)
    drawImage(heartSmall, heartX3, heartY3, 50 ,50)
    drawImage(heartSmall, buyHeartX, buyHeartY, 100, 100)
    drawImage(arrowRight, arrowX, arrowY, 80, 60)
    drawImage(lollipopFruitYellow, coinX2, coinY2, 80, 80)
    drawImage(shop, shopX, shopY, 150, 100)
    drawImage(lollipopFruitYellow, coinX, coinY, 50, 50)
    drawImage(crystal, gemX, gemY, 50, 50)
    drawImage(signExit, signX, signY, 80, 80)
    drawImage(duckOutlineTarget, duckX0, duckY0, 100, 100)
    drawImage(cherry, cherryX, cherryY, sizeY, sizeX)
    drawImage(bomb, bombX, bombY, sizeY2, sizeX2)
    drawImage(note, noteX, noteY, 120, 120)
    drawImage(heroStand, heroX, heroY, 85, 110)
    drawImage(sun, sunX, sunY, sizeY3, sizeX3)
    drawImage(cat, catX, catY, 90, 60)
    drawImage(cloud, cloudX, cloudY, 120, 60)
    drawImage(bee, beeX0, beeY0, 80, 80)
    drawImage(femaleAction, femaleX, femaleY, 60, 80)
    drawImage(paddle, paddleX, 150, 800, 20)
    drawImage(paddle, paddleX2, 300, 800, 20)
    drawImage(paddle, paddleX3, 450, 800, 20)
    drawImage(duckOutlineTarget, duckX, duckY, 50, 50)
    drawImage(duckOutlineTarget, duckX2, duckY2, 50, 50)
    drawImage(duckOutlineTarget, duckX3, duckY3, 50, 50)
    drawImage(duckOutlineTarget, duckX4, duckY4, 50, 50)
    drawImage(duckOutlineTarget, duckX5, duckY5, 50, 50)
    drawImage(duckOutlineTarget, duckX6, duckY6, 50, 50)
    drawImage(duckOutlineTarget, duckX7, duckY7, 50, 50)
    drawImage(duckOutlineTarget, duckX8, duckY8, 50, 50)
    drawImage(bee, beeX, beeY, 50, 50)
    drawImage(bee, beeX2, beeY2, 50, 50)
    drawImage(bee, beeX3, beeY3, 50, 50)
    drawImage(bee, beeX4, beeY4, 50, 50)
    drawImage(ballOrTree, ballX0, ballY0, 10, 10)
    drawImage(ballOrTree, ballX02, ballY02, 10, 10)
    drawImage(ballOrTree, ballX03, ballY03, 10, 10)
    drawImage(ballOrTree, ballX04, ballY04, 10, 10)
    drawImage(ballOrTree, ballX05, ballY05, 10, 10)
    drawImage(ballOrTree, ballX06, ballY06, 10, 10)
    drawImage(ballOrTree, ballX07, ballY07, 10, 10)
    drawImage(ballOrTree, ballX08, ballY08, 10, 10)
    drawImage(ballOrTree, ballX09, ballY09, 10, 10)
    drawImage(ballOrTree, ballX010, ballY010, 10, 10)
    drawImage(ballOrTree, ballX011, ballY011, 10, 10)
    drawImage(ballOrTree, ballX012, ballY012, 10, 10)
    drawImage(ballOrTree, ballX, ballY, sizeBallX, sizeBallY)
    drawImage(box, boxX, boxY, 25, 60)
    drawImage(laserRed[2], laserX, laserY, 600, 600)
    drawImage(boxItem, tipX, tipY, 50, 50)
    drawImage(slabBlue, bedX, bedY, 140, 100)
    drawImage(arrowRight, arrowX2, arrowY2, 80, 60)
    drawImage(lollipopFruitYellow, coinX3, coinY3, 80, 80)
    drawImage(crosshairOutline, crossX, crossY, 50 ,50)
    drawImage(scrollHorizontal, scrollX, scrollY, 100, 100)
    drawImage(paddleGhost, minerX0, minerY0, 100, 70)
    drawImage(paddleGhost, minerX, minerY, 100, 70)
    drawImage(paddleGhost, minerX2, minerY2, 100, 70)
    drawImage(paddleGhost, minerX3, minerY3, 100, 70)
    drawImage(paddleGhost, minerX4, minerY4, 100, 70)
    drawImage(paddleGhost, minerX5, minerY5, 100, 70)
    drawImage(paddleGhost, minerX6, minerY6, 100, 70)
    drawImage(crystal, gemX0, gemY0, 70, 70)
    drawImage(arrowRight, arrowX3, arrowY3, 80, 60)
    drawImage(lollipopFruitYellow, coinX00, coinY00, 30, 30)
    drawImage(lollipopFruitYellow, coinX0, coinY0, 30, 30)
    drawImage(lollipopFruitYellow, coinX02, coinY02, 30, 30)
    drawImage(lollipopFruitYellow, coinX03, coinY03, 30, 30)
    drawImage(lollipopFruitYellow, coinX04, coinY04, 30, 30)
    drawImage(lollipopFruitYellow, coinX05, coinY05, 30, 30)
    drawImage(lollipopFruitYellow, coinX06, coinY06, 30, 30)
    drawImage(ballOrTree, dotX, dotY, 5, 5)
    drawImage(ballOrTree, dotX2, dotY2, 5, 5)
    drawImage(ballOrTree, dotX3, dotY3, 5, 5)
    drawImage(crystal, gemX02, gemY02, 70, 70)
    drawImage(arrowRight, arrowX4, arrowY4, 80, 60)
    drawImage(star, levelupX, levelupY, 80, 80)
    drawImage(lollipopFruitYellow, coinX4, coinY4, 70, 70)
    drawImage(arrowRight, arrowX5, arrowY5, 80, 60)
    drawImage(paddleGhost, minerGX, minerGY, 100, 70)
    drawImage(crystal, gemX8, gemY8, 30, 30)
    drawImage(crystal, gemminerX, gemminerY, 30, 30)
    drawImage(crystal, gemminerX2, gemminerY2, 30, 30)
    drawImage(crystal, gemminerX3, gemminerY3, 30, 30)
    drawImage(crystal, gemminerX4, gemminerY4, 30, 30)
    drawImage(crystal, gemminerX5, gemminerY5, 30, 30)
    drawImage(crystal, gemminerX6, gemminerY6, 30, 30)
    drawImage(lollipopFruitYellow, coinX7, coinY7, 70, 70)
    drawImage(arrowRight, arrowX6, arrowY6, 80, 60)
    drawImage(spaceStation[2], spaceX, spaceY, 150, 50)
    drawImage(crystal, gemX9, gemY9, 70, 70)
    drawImage(arrowRight, arrowX7, arrowY7, 80, 60)
    drawImage(spaceStation[3], spaceX2, spaceY2, 150, 50)
    if(place==6){
        drawImage(paddleGhost, pauseX, pauseY, 10, 25)
        drawImage(paddleGhost, pauseX2, pauseY2, 10, 25)
    }else{
        drawImage(paddle, pauseX, pauseY, 10, 25)
        drawImage(paddle, pauseX2, pauseY2, 10, 25)
    }
}

function keyup(key) {
    if(place==5){
        femaleY=femaleY-75
    }
}

function mouseup() {
    if(mouseY>coinY){
        if(mouseX>coinX){
            if(mouseY<coinY+50){
                if(mouseX<coinX+50){
                    console.log(coin, "dollars")
                }
            }
        }
    }
    if(mouseY>gemY){
        if(mouseX>gemX){
            if(mouseY<gemY+50){
                if(mouseX<gemX+50){
                    console.log(gem, "gems")
                }
            }
        }
    }
    if(mouseY>levelY){
        if(mouseX>levelX){
            if(mouseY<levelY+50){
                if(mouseX<levelX+50){
                    console.log(level, "level")
                }
            }
        }
    }
    if(mouseY>signY){
        if(mouseX>signX){
            if(mouseY<signY+80){
                if(mouseX<signX+80){
                    place=0
                }
            }
        }
    }
     if(mouseY>shopY){
         if(mouseX>shopX){
             if(mouseY<shopY+100){
                 if(mouseX<shopX+150){
                     if(pause==false){
                         if(open==true){
                            place=1
                        }else{
                            console.log("It' time for sleep!!! Every think is closed")
                        }
                     }else{
                         console.log("You are in pause")
                     }
                 }
             }
         }
     }
     if(mouseY>duckY0){
         if(mouseX>duckX0){
             if(mouseY<duckY0+100){
                 if(mouseX<duckX0+100){
                     if(pause==false){
                         if(open==true){
                            place=2
                        }else{
                            console.log("It' time for sleep!!! Every think is closed")
                        }
                     }else{
                         console.log("You are in pause")
                     }
                }
            }
        }
    }
    if(mouseY>cherryY){
        if(mouseX>cherryX){
            if(mouseY<cherryY+sizeY){
                if(mouseX<cherryX+sizeX){
                    if(pause==false){
                         if(open==true){
                            place=3
                        }else{
                            console.log("It' time for sleep!!! Every think is closed")
                        }
                     }else{
                         console.log("You are in pause")
                     }
                }
            }
        }
    }
    if(mouseY>heroY){
        if(mouseX>heroX){
            if(mouseY<heroY+100){
                if(mouseX<heroX+100){
                    if(pause==false){
                         if(open==true){
                            place=4
                        }else{
                            console.log("It' time for sleep!!! Every think is closed")
                        }
                     }else{
                         console.log("You are in pause")
                     }
                }
            }
        }
    }
    if(mouseY>sunY){
        if(mouseX>sunX){
            if(mouseY<sunY+100){
                if(mouseX<sunX+100){
                    if(pause==false){
                         if(open==true){
                            place=5
                        }else{
                            console.log("It' time for sleep!!! Every think is closed")
                        }
                     }else{
                         console.log("You are in pause")
                     }
                }
            }
        }
    }
    if(mouseY>ballY){
        if(mouseX>ballX){
            if(mouseY<ballY+100){
                if(mouseX<ballX+100){
                    if(pause==false){
                         if(open==true){
                            place=6
                        }else{
                            console.log("It' time for sleep!!! Every think is closed")
                        }
                     }else{
                         console.log("You are in pause")
                     }
                }
            }
        }
    }
    if(mouseY>duckY){
        if(mouseX>duckX){
            if(mouseY<duckY+50){
                if(mouseX<duckX+50){
                    duckY=1000
                    coin=coin+level
                    console.log(coin, "dollars")
                }
            }
        }
    }
    if(mouseY>duckY2){
        if(mouseX>duckX2){
            if(mouseY<duckY2+50){
                if(mouseX<duckX2+50){
                    duckY2=1000
                    coin=coin+level
                    console.log(coin, "dollars")
                }
            }
        }
    }
    if(mouseY>duckY3){
        if(mouseX>duckX3){
            if(mouseY<duckY3+50){
                if(mouseX<duckX3+50){
                    duckY3=1000
                    coin=coin+level
                    console.log(coin, "dollars")
                }
            }
        }
    }
    if(mouseY>duckY4){
        if(mouseX>duckX4){
            if(mouseY<duckY4+50){
                if(mouseX<duckX4+50){
                    duckY4=1000
                    coin=coin+level
                    console.log(coin, "dollars")
                }
            }
        }
    }
    if(mouseY>duckY5){
        if(mouseX>duckX5){
            if(mouseY<duckY5+50){
                if(mouseX<duckX5+50){
                    duckY5=1000
                    coin=coin+level
                    console.log(coin, "dollars")
                }
            }
        }
    }
    if(mouseY>duckY6){
        if(mouseX>duckX6){
            if(mouseY<duckY6+50){
                if(mouseX<duckX6+50){
                    duckY6=1000
                    coin=coin+level
                    console.log(coin, "dollars")
                }
            }
        }
    }
    if(mouseY>duckY7){
        if(mouseX>duckX7){
            if(mouseY<duckY7+50){
                if(mouseX<duckX7+50){
                    duckY7=1000
                    coin=coin+level
                    console.log(coin, "dollars")
                }
            }
        }
    }
    if(mouseY>duckY8){
        if(mouseX>duckX8){
            if(mouseY<duckY8+50){
                if(mouseX<duckX8+50){
                    duckY8=1000
                    coin=coin+level
                    console.log(coin, "dollars")
                }
            }
        }
    }
    if(mouseY>beeY){
        if(mouseX>beeX){
            if(mouseY<beeY+50){
                if(mouseX<beeX+50){
                    beeY=1000
                    coin=coin+level
                    console.log(coin, "dollars")
                }
            }
        }
    }
    if(mouseY>beeY2){
        if(mouseX>beeX2){
            if(mouseY<beeY2+50){
                if(mouseX<beeX2+50){
                    beeY2=1000
                    coin=coin+level
                    console.log(coin, "dollars")
                }
            }
        }
    }
    if(mouseY>beeY3){
        if(mouseX>beeX3){
            if(mouseY<beeY3+50){
                if(mouseX<beeX3+50){
                    beeY3=1000
                    coin=coin+level
                    console.log(coin, "dollars")
                }
            }
        }
    }
    if(mouseY>beeY4){
        if(mouseX>beeX4){
            if(mouseY<beeY4+50){
                if(mouseX<beeX4+50){
                    beeY4=1000
                    coin=coin+level
                    console.log(coin, "dollars")
                }
            }
        }
    }
    if(mouseY>cherryY){
        if(mouseX>cherryX){
            if(mouseY<cherryY+160){
                if(mouseX<cherryX+160){
                    if(place==3){
                        cherryY=-160
                        bombY=-160
                        pole=randomInteger(5)
                        pole2=randomInteger(4)
                        coin=coin+level
                        console.log(coin, "dollars")
                        speed=speed+1
                    }
                }
            }
        }
    }
    if(mouseY>bombY){
        if(mouseX>bombX){
            if(mouseY<bombY+160){
                if(mouseX<bombX+160){
                    cherryY=-160
                    bombY=-160
                    pole=randomInteger(5)
                    pole2=randomInteger(4)
                    live=live-1
                    speed=speed+1
                }
            }
        }
    }
    if(mouseY>coinY2){
        if(mouseX>coinX2){
            if(mouseY<coinY2+80){
                if(mouseX<coinX2+80){
                    console.log("1 live = 100 dollars")
                    console.log("press the heart to buy it")
                }
            }
        }
    }
    if(mouseY>buyHeartY){
        if(mouseX>buyHeartX){
            if(mouseY<buyHeartY+100){
                if(mouseX<buyHeartX+100){
                    live=live+1
                    coin=coin-100
                    console.log(live, "lives")
                    console.log(coin, "dollars")
                }
            }
        }
    }
    if(mouseY>tipY){
        if(mouseX>tipX){
            if(mouseY<tipY+50){
                if(mouseX<tipX+50){
                    console.log("You haven't got any lives.")
                    if(coin>=100){
                        console.log("Go to store to buy some lives")
                    }else{
                        console.log("Make money in duck game and then buy some lives")
                    }
                }
            }
        }
    }
    if(mouseY>pauseY){
        if(mouseX>pauseX){
            if(mouseY<pauseY2+25){
                if(mouseX<pauseX2+10){
                    if(pause==false){
                        pause=true
                        pauseT=false
                    }else{
                        pause=false
                        pauseT=false
                    }
                }
            }
        }
    }
    if(mouseY>coinY3){
        if(mouseX>coinX3){
            if(mouseY<coinY3+75){
                if(mouseX<coinX3+75){
                    console.log("The bed cost 200 dollars")
                    console.log("if you buy it, you can skip night!!!")
                }
            }
        }
    }
    if(mouseY>bedY){
        if(mouseX>bedX){
            if(mouseY<bedY+100){
                if(mouseX<bedX+140){
                    if(bed==false){
                        if(coin>=200){
                            bed=true
                            coin=coin-200
                            console.log(coin, "dollars")
                            console.log("Now you have bed!!!")
                        }else{
                            console.log("You haven't got 200 dollars")
                        }
                    }else{
                        if(open==true){
                            console.log("it's a day.")
                            console.log("You can sleep after 18 o'clock")
                        }
                        if(open==false){
                            speedTime=1
                            console.log("fun dreams are seen")
                        }
                    }
                }
            }
        }
    }
    if(mouseY>scrollY){
        if(mouseX>scrollX){
            if(mouseY<scrollY+100){
                if(mouseX<scrollX+100){
                    if(place==0){
                        place=10
                        closed=true
                    }else{
                        place=0
                        closed=false
                    }
                }
            }
        }
    }
    if(mouseY>minerY0){
        if(mouseX>minerX0){
            if(mouseY<minerY0+70){
                if(mouseX<minerX0+100){
                    if(gem>=25){
                        gem=gem-25
                        console.log(gem, "gems")
                        console.log("Now you heve miner")
                        miners=miners+1
                    }else{
                        console.log("You haven't got 25 gems")
                        console.log("Go to play PONG to get some gems!!!")
                    }
                }
            }
        }
    }
    if(mouseY>gemY0){
        if(mouseX>gemX0){
            if(mouseY<gemY0+70){
                if(mouseX<gemX0+70){
                    console.log("Miner cost 25 gems.")
                    console.log("If you have miner every second you make money!!!")
                }
            }
        }
    }
    if(mouseY>gemY02){
        if(mouseX>gemX02){
            if(mouseY<gemY02+70){
                if(mouseX<gemX02+70){
                    console.log("Miner cost 30 gems.")
                }
            }
        }
    }
    if(mouseY>levelupY){
        if(mouseX>levelupX){
            if(mouseY<levelupY+80){
                if(mouseX<levelupX+80){
                    if(gem>=30){
                        level=level+1
                        console.log(level, "level")
                        gem=gem-30
                        console.log(gem, "gems")
                    }else{
                        console.log("You haven't got 30 gems")
                    }
                }
            }
        }
    }
    if(mouseY>coinY4){
        if(mouseX>coinX4){
            if(mouseY<coinY4+70){
                if(mouseX<coinX4+70){
                    console.log("Miner cost 250 dollars")
                }
            }
        }
    }
    if(mouseY>minerGY){
        if(mouseX>minerGX){
            if(mouseY<minerGY+70){
                if(mouseX<minerGX+100){
                    if(coin>=250){
                        coin=coin-250
                        console.log(coin, "dollars")
                        minersG=minersG+1
                        console.log("Now you have gem miner")
                    }else{
                        console.log("You haven't got 250 dollars")
                    }
                }
            }
        }
    }
    if(mouseY>coinY7){
        if(mouseX>coinX7){
            if(mouseY<coinY7+70){
                if(mouseX<coinX7+70){
                    console.log("Miner cost 10000 dollars")
                }
            }
        }
    }
    if(mouseY>spaceY){
        if(mouseX>spaceX){
            if(mouseY<spaceY+50){
                if(mouseX<spaceX+150){
                    if(coin>=10000){
                        if(boost==false){
                            console.log("Now you have boost for gem miner")
                            coin=coin-10000
                            console.log(coin, "dollars")
                            boost=true
                        }
                    }else{
                        console.log("You haven't got 10000 dollars")
                    }
                }
            }
        }
    }
    if(mouseY>gemY9){
        if(mouseX>gemX9){
            if(mouseY<gemY9+70){
                if(mouseX<gemX9+70){
                    console.log("Miner cost 1000 gems")
                }
            }
        }
    }
    if(mouseY>spaceY2){
        if(mouseX>spaceX2){
            if(mouseY<spaceY2+50){
                if(mouseX<spaceX2+150){
                    if(gem>=1000){
                        if(boost2==false){
                            console.log("Now you have boost for bitcon miner")
                            gem=gem-1000
                            console.log(gem, "gems")
                            boost2=true
                        }
                    }else{
                        console.log("You haven't got 1000 gems")
                    }
                }
            }
        }
    }
}
