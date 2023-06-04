class prujina{
    weight1={x:250,y:100}
    weight2={x:100,y:325}
    weight2SpeedX=0
    weight2SpeedY=0
    weight2Accel=0

    restLen=0
    constructor(restingLength){
        this.restLen=restingLength
    }
    updateSelf(){
        this.weight2Accel=(Math.hypot(this.weight1.x-this.weight2.x,this.weight1.y-this.weight2.y)-this.restLen)*0.01

        this.weight2SpeedX+=Math.cos(Math.atan2(this.weight1.y-this.weight2.y,this.weight1.x-this.weight2.x))*this.weight2Accel
        this.weight2SpeedY+=Math.sin(Math.atan2(this.weight1.y-this.weight2.y,this.weight1.x-this.weight2.x))*this.weight2Accel

        // this.weight2SpeedX+=this.weight2AccelX
        // this.weight2SpeedY+=this.weight2AccelY
        this.weight2.x+=this.weight2SpeedX
        this.weight2.y+=this.weight2SpeedY


    }
    drawSelf(){
        context.fillRect(this.weight1.x,this.weight1.y,20,20)
        context.fillRect(this.weight2.x,this.weight2.y,20,20)
    }

}
dob=new prujina(250)
function draw(){
    dob.drawSelf()

}
function update(){
    dob.updateSelf()

}
