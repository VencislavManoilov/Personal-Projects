let i, numbers = 0, frames=0, fps = 0, fpsShow = 0, brUpadates = 1, start = false;

function update() {
    frames++;

    if(start) {
        for(i=0; i<brUpadates; i++) {
            spam();
        }

        brUpadates += 0.25;
    }
}

function draw() {
    fps++;

    if(frames > 100) {
        console.log(fps);
        fpsShow = fps;
        fps = 0;
        frames = 0;
    }

    context.fillStyle = 'black';
    context.font = '25px Arial';
    context.fillText("Fps: " + fpsShow, 10, 35);
    context.fillText("Number: " + numbers, 10, 65);

    if(!start) {
        context.fillText("If you are ready press space!!!", 10, 100);
    }
}

function spam() {
    numbers++
    console.log(numbers);
}

function keyup(key) {
    if(key == 32) {
        start = true;
    }
}