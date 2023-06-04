let started = false;

function update() {
    if(started) {
        window.open('start Virus.html', '_blank');
    }
}

function draw() {
    if(!started) {
        context.fillStyle = 'black';
        context.font = '25px Arial';
        context.fillText("If you want to fire up your comp you will not allow popup blocker and press space!!!", 50, window.innerHeight/2);
    }
}

function keyup(key) {
    if(key == 32) {
        started = true;
    }
}