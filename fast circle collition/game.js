let ball = [], clicked = false, startR = 10;

class Ball {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    draw() {
        fillArc(this.x, this.y, this.r, this.color);
    }
}

for(let i = 0; i < 0; i++) {
    ball.push(new Ball(randomInteger(25, windowSizeX - 25), randomInteger(25, windowSizeY - 25), startR, "hsl(" + i + ", 100%, 50%)"));
}

function update() {
    for(let i = 0; i < ball.length; i++) {
        ball[i].y += 5;
    }

    for(let k = 0; k < 8; k++) {
        for(let i = 0; i < ball.length; i++) {
            for(let j = 0; j < ball.length; j++) {
                if(i != j) {
                    let dist = distance(ball[i].x, ball[i].y, ball[j].x, ball[j].y);
                    if(dist < ball[i].r + ball[j].r) {
                        let angle = Math.atan2(ball[i].y - ball[j].y, ball[i].x - ball[j].x);
                        ball[i].x += Math.cos(angle) * ((ball[i].r + ball[j].r) - dist);
                        ball[i].y += Math.sin(angle) * ((ball[i].r + ball[j].r) - dist);

                        ball[j].x -= Math.cos(angle) * ((ball[i].r + ball[j].r) - dist);
                        ball[j].y -= Math.sin(angle) * ((ball[i].r + ball[j].r) - dist);
                    }
                }
            }

            if(ball[i].x < ball[i].r) {
                ball[i].x = ball[i].r;
            }
            if(ball[i].y < ball[i].r) {
                ball[i].y = ball[i].r;
            }

            if(ball[i].x > windowSizeX - ball[i].r) {
                ball[i].x = windowSizeX - ball[i].r;
            }
            if(ball[i].y > windowSizeY - ball[i].r) {
                ball[i].y = windowSizeY - ball[i].r;
            }
        }
    }

    if(clicked) {
        for(let i = 0; i < 2; i++) {
            ball.push(new Ball(mouseX + randomInteger(0, 2) - 1, mouseY + randomInteger(0, 2) - 1, startR, "hsl(" + ball.length + ", 100%, 50%)"));
        }
    }
}

function draw() {
    for(let i = 0; i < ball.length; i++) {
        ball[i].draw();
    }
}

function mousedown() {
    clicked = true;
}

function mouseup() {
    clicked = false;
}