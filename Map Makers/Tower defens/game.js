let brPaveta = 0, paveX = [], paveY = [], MapSaverX = "", MapSaverY = "", print = false;

function init() {
    
}

function update() {
    if(print) {
        MapSaverX = "";
        MapSaverY = "";
        for(i=0; i<brPaveta; i++) {
            MapSaverX += paveX[i] + ", ";
            MapSaverY += paveY[i] + ", ";
        }

        console.log("brPaveta = ", brPaveta)
        console.log("paveX = [",MapSaverX,"]");
        console.log("paveY = [",MapSaverY,"]");
        print = false;
    }
}

function draw() {
    drawImage(backTower, 0, 0, 800, 600);

    for(i=0; i<brPaveta; i++) {
        drawImage(box, paveX[i]*50, paveY[i]*50, 50, 50);
    }

    for(let x=0; x<16; x++) {
        for(let y=0; y<9; y++) {
            context.strokeStyle = 'black';
            context.strokeRect(x*50, y*50, 50, 50);
        }
    }
}

function mousedown() {
    paveX[brPaveta] = Math.floor(mouseX/50);
    paveY[brPaveta] = Math.floor(mouseY/50);
    brPaveta++;
}

function keyup(key) {
    if(key == 32) {
        print = true;
    }
}