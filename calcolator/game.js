let pouse=true,number=9,forNumber=1

function update(){
    if(pouse==false){
        number=number*forNumber
        console.log(number, "number")
    }else{
        number=9
    }
}

function draw(){
    drawImage(backDesert, 0, 0, 800, 600)
}

function keydown(key){
    //console.log("Pressed", key)
    
    if(key==32){
        if(pouse==true){
            pouse=false
        }else{
            pouse=true
        }
    }
    
    if(key==38){
        forNumber=forNumber+1
        console.log(forNumber)
        pouse=true
    }
    
    if(key==40){
        forNumber=forNumber-1
        console.log(forNumber)
        pouse=true
    }
}