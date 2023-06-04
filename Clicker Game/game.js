let points = 0,
    R = 50,
    circleX = randomInteger(window.innerWidth - R*3) + R,
    circleY = randomInteger(window.innerHeight - R*3) + R,
    maxSeconds = 10,
    timer = maxSeconds * 100,
    color = randomInteger(4),
    started = false
;

function update() {
    if(started) {
        timer--;
    }
    
    if(color > 3) {
        color = 0;
    }

    if(points > localStorage.ClickerGameRecord) {
        localStorage.ClickerGameRecord = points;
    }
}

function draw() {
    context.fillStyle = 'black';
    context.font = '25px Arial';
    context.fillText("Press R to restart", window.innerWidth/2 - 100, window.innerHeight - 15);

    context.font = '50px Arial';
    if(timer < 0) {
        context.fillText("For " + maxSeconds + " seconds you clicked " + points + " times", window.innerWidth/2 - 400, window.innerHeight/2);
    } else {
        if(color == 0) {
            context.fillStyle = 'yellow';
        } else if(color == 1) {
            context.fillStyle = 'red';
        } else if(color == 2) {
            context.fillStyle = 'lime';
        } else if(color == 3) {
            context.fillStyle = 'cyan';
        }

        context.lineWidth = 10;

        context.beginPath();
        context.arc(circleX, circleY, R, 0, 2 * Math.PI);
        context.stroke();
        context.fill();

        context.fillStyle = 'black';
        context.font = '25px Arial';
        context.fillText("Button!", circleX - R + 10, circleY + 12.5);

        context.fillText("Score: " + points, window.innerWidth/2 - 125, 35);
        context.fillText("Time: " + Math.floor(timer/100), window.innerWidth/2 + 10, 35);
    }

    context.fillText("Record: " + localStorage.ClickerGameRecord, window.innerWidth/2 - 75, 75);
}

function mousedown() {
    if(isItInCircle(mouseX, mouseY, circleX, circleY, R)) {
        R = 45;
    }
}

function mouseup() {
    if(isItInCircle(mouseX, mouseY, circleX, circleY, R + 5)) {
        R = 50;
        points++;

        circleX = randomInteger(window.innerWidth - R*3) + R;
        circleY = randomInteger(window.innerHeight - R*3) + R;
        color++;
        started = true;
    }
}

function keyup(key) {
    if(key == 82) {
        location.reload();
    }
}