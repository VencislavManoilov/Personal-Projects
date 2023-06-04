// Made with my new game engine

// p from pole
let p = {
    activeX: 1,
    activeY: 1,
    pole: [
            [[[11,11,11,11,11,11,11,11,11,11,11],[11,0,0,0,0,0,0,0,0,0,0],[11,0,0,0,0,0,0,0,0,0,0],[11,0,0,0,0,0,0,0,0,0,0],[11,0,0,0,0,0,0,0,0,0,0],[11,0,0,0,0,0,3,0,0,0,0],[11,0,0,0,0,3,11,3,0,0,0],[11,0,0,0,3,11,11,11,3,0,0],[11,0,0,0,0,3,11,3,0,0,0],[11,0,0,0,0,0,3,0,0,0,0],[11,0,0,0,0,0,0,0,0,0,0],[11,0,0,0,0,0,0,0,0,0,0],[11,0,0,0,0,0,0,0,0,0,0],[11,0,0,0,0,0,0,0,0,0,0],[11,0,0,0,10,10,10,0,0,0,0],[11,11,0,10,10,10,10,10,0,11,11]],[[7,7,0,10,10,10,10,10,0,7,7],[7,0,0,0,10,10,10,0,0,0,7],[7,0,0,0,0,0,0,0,0,0,7],[7,0,0,0,0,0,0,0,0,0,7],[7,0,0,0,0,0,0,0,0,0,7],[7,0,0,0,0,0,0,0,0,0,7],[7,0,0,0,0,0,0,0,0,0,7],[7,0,0,0,0,0,0,0,0,0,0],[7,0,0,0,0,0,0,0,0,0,0],[7,0,0,0,0,0,0,0,0,0,7],[7,0,0,0,0,0,0,0,0,0,7],[7,0,0,0,0,0,0,0,0,0,7],[7,0,0,0,0,0,0,0,0,0,7],[7,0,0,0,0,0,0,0,0,0,7],[7,0,0,0,0,0,0,0,0,0,7],[7,7,0,0,0,0,0,0,0,7,7]],[[8,8,0,0,0,0,0,0,0,8,8],[8,0,0,0,0,0,0,0,0,0,8],[8,0,9,0,9,0,9,0,9,0,8],[8,0,0,0,0,0,0,0,0,0,8],[8,0,9,0,9,0,9,0,9,0,8],[8,0,0,0,0,0,0,0,0,0,8],[8,0,9,0,9,0,9,0,9,0,8],[8,0,0,0,0,0,0,0,0,0,8],[8,0,9,0,9,0,9,0,9,0,8],[8,0,0,0,0,0,0,0,0,0,8],[8,0,9,0,9,0,9,0,9,0,8],[8,0,0,0,0,0,0,0,0,0,8],[8,0,9,0,9,0,9,0,9,0,8],[8,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,8],[8,8,8,8,8,8,8,8,8,8,8]]], 
            [[[11,11,11,11,11,11,11,11,11,11,11],[0,0,0,0,0,0,0,11,11,11,11],[0,0,0,0,0,0,0,0,11,11,11],[0,0,0,0,0,0,0,0,0,11,11],[0,0,0,0,0,0,0,0,0,0,11],[0,0,0,3,3,3,3,3,0,0,11],[0,0,0,0,0,3,0,0,0,0,11],[0,0,0,0,0,3,0,0,0,0,11],[0,0,0,3,3,3,3,3,0,0,11],[0,0,0,0,0,0,0,0,0,0,11],[0,0,0,8,0,4,4,4,0,0,11],[0,0,0,0,0,0,0,0,0,0,11],[0,0,0,0,0,0,0,0,0,11,11],[0,0,0,0,0,0,0,0,11,11,11],[0,0,0,0,0,0,0,11,11,11,11],[11,11,11,11,11,0,11,11,11,11,11]],[[2,2,2,2,2,0,2,2,2,2,2],[2,2,2,2,2,0,2,2,2,2,2],[2,2,2,2,0,0,0,0,0,2,2],[2,2,2,0,0,0,0,0,0,2,2],[2,12,0,0,0,0,0,0,0,2,2],[2,2,0,0,0,0,0,0,0,2,2],[2,2,0,0,0,0,0,0,0,2,2],[0,0,0,0,0,0,0,0,0,2,2],[0,0,0,0,0,0,0,0,0,2,2],[2,2,2,2,2,0,0,0,0,2,2],[2,2,2,2,2,0,0,0,0,2,2],[2,2,2,2,2,0,0,0,0,2,2],[2,2,2,2,2,0,0,0,0,2,2],[2,2,2,2,2,0,0,0,0,2,2],[2,2,2,2,2,0,2,2,2,2,2],[2,2,2,2,2,0,2,2,2,2,2]],[[2,2,2,2,2,0,2,2,2,2,2],[2,11,11,11,0,0,0,11,11,11,2],[2,11,11,0,0,0,0,0,11,11,2],[2,11,0,0,0,0,0,0,0,11,2],[2,0,0,0,0,10,0,0,0,0,2],[2,0,0,0,10,10,10,0,0,0,2],[2,0,0,10,10,3,10,10,0,0,2],[2,0,10,10,3,11,3,10,10,0,2],[2,0,10,10,3,11,3,10,10,0,2],[2,0,0,10,10,3,10,10,0,0,2],[2,0,0,0,10,10,10,0,0,0,2],[2,0,0,0,0,10,0,0,0,0,2],[2,11,0,0,0,0,0,0,0,11,2],[2,11,11,0,0,0,0,0,11,11,2],[2,11,11,11,0,0,0,11,11,11,2],[2,2,2,2,2,2,2,2,2,2,2]]]
        ],
    tip: [undefined, dirt, grass, brick, brickBlue, brick2, brickBlue2, bush, bushGreen, grave, sand, water, cave],
    size: 50,
    width: 16,
    height: 11
}

// Link is the main character of The Legend of Zelda
let link = {
    x: p.width/2*p.size,
    y: p.height/2*p.size,

    speed: 3,

    // a from aation
    aSpeed: 7.5,
    aUpdate: 1,
    aTip: 0,

    down: false,
    left: false,
    xAxis: false,

    update() {
        if(this.aUpdate%this.aSpeed == 0) {
            this.aTip = ! this.aTip;
            this.aUpdate++;
        }

        if(this.aTip) {
            if(!this.xAxis) {
                if(this.down) {
                    drawImage(LinkDown, this.x, this.y, p.size, p.size);
                } else {
                    drawImage(LinkUp, this.x, this.y, p.size, p.size);
                }
            } else {
                if(this.left) {
                    drawImage(LinkLeft, this.x, this.y, p.size, p.size);
                } else {
                    drawImage(LinkRight, this.x, this.y, p.size, p.size);
                }
            }
        } else {
            if(!this.xAxis) {
                if(this.down) {
                    drawImage(LinkDown2, this.x, this.y, p.size, p.size);
                } else {
                    drawImage(LinkUp2, this.x, this.y, p.size, p.size);
                }
            } else {
                if(this.left) {
                    drawImage(LinkLeft2, this.x, this.y, p.size, p.size);
                } else {
                    drawImage(LinkRight2, this.x, this.y, p.size, p.size);
                }
            }
        }
        if(MoveUp() || MoveDown()) {
            this.xAxis = false;
        } if(MoveLeft() || MoveRight()) {
            this.xAxis = true;
        }

        if(MoveUp() && !MoveDown() && !stopUp()) {
            this.down = false;
            this.y -= this.speed;
            this.aUpdate++;
        } if(MoveDown() && !MoveUp() && !stopDown()) {
            this.down = true;
            this.y += this.speed;
            this.aUpdate++;
        } if(MoveLeft() && !MoveRight() && !stopLeft()) {
            this.left = true;
            this.x -= this.speed;
            this.aUpdate++;
        } if(MoveRight() && !MoveLeft() && !stopRight()) {
            this.left = false;
            this.x += this.speed;
            this.aUpdate++;
        }
    }
};

// c from camera
let c = {
    x: 0,
    y: 0
}

stopRightClick();

function update() {
    if(link.x < 0) {
        link.x = p.width*p.size - p.size - 1;
        p.activeX--;
    } if(link.x > p.width*p.size - p.size) {
        link.x = 0;
        p.activeX++;
    } if(link.y < 0) {
        link.y = p.height*p.size - p.size - 1;
        p.activeY--;
    } if(link.y > p.height*p.size - p.size + 1) {
        link.y = 0;
        p.activeY++;
    }

    if(p.switch) {
        if(MoveLeft()) {
            c.x--;
        } if(MoveRight()) {
            c.x++;
        } if(MoveUp()) {
            c.y--;
        } if(MoveDown()) {
            c.y++;
        }
    }
}

function draw() {
    fillRect(0, 0, p.width*p.size, p.height*p.size, 'wheat');

    if(p.activeX >= p.pole[0].length) {
        p.activeX = p.pole[0].length - 1;
    } if(p.activeX < 0) {
        p.activeX = 0;
    } if(p.activeY < 0) {
        p.activeY = 0;
    } if(p.activeY >= p.pole.length) {
        p.activeY = p.pole.length - 1;
    }

    if(!p.switch) {
        for(x = 0; x < p.width; x++) {
            for(y = 0; y < p.height; y++) {
                if(p.pole[p.activeY][p.activeX][x][y] != 0) {
                    drawImage(p.tip[p.pole[p.activeY][p.activeX][x][y]], x*p.size, y*p.size, p.size, p.size);
                }
            }
        }
    }
    
    link.update();

    UpdateParticles();
}

function stopUp() {
    for(x = 0; x < p.width; x++) {
        for(y = 0; y < p.height; y++) {
            if(p.pole[p.activeY][p.activeX][x][y] != 0 && p.pole[p.activeY][p.activeX][x][y] != 10 && p.pole[p.activeY][p.activeX][x][y] != 12) {
                if(areColliding(x*p.size + link.speed*2, y*p.size + link.speed, p.size - link.speed*4, p.size/2 + link.speed*2,  link.x + link.speed, link.y + link.speed, p.size - link.speed*2, p.size/2 - link.speed)) {
                    return 1;
                }
            }
        }
    }

    return 0;
}

function stopDown() {
    for(x = 0; x < p.width; x++) {
        for(y = 0; y < p.height; y++) {
            if(p.pole[p.activeY][p.activeX][x][y] != 0 && p.pole[p.activeY][p.activeX][x][y] != 10 && p.pole[p.activeY][p.activeX][x][y] != 12) {
                if(areColliding(x*p.size + link.speed*2, y*p.size + link.speed, p.size - link.speed*4, p.size/2 + link.speed,  link.x + link.speed, link.y + p.size - link.speed, p.size - link.speed*2, link.speed)) {
                    return 1;
                }
            }
        }
    }

    return 0;
}

function stopLeft() {
    for(x = 0; x < p.width; x++) {
        for(y = 0; y < p.height; y++) {
            if(p.pole[p.activeY][p.activeX][x][y] != 0 && p.pole[p.activeY][p.activeX][x][y] != 10 && p.pole[p.activeY][p.activeX][x][y] != 12) {
                if(areColliding(x*p.size + link.speed, y*p.size + link.speed, p.size - link.speed*2, p.size/2 - link.speed,  link.x + link.speed, link.y + link.speed, p.size/2 - link.speed, p.size/2 + link.speed)) {
                    return 1;
                }
            }
        }
    }

    return 0;
}

function stopRight() {
    for(x = 0; x < p.width; x++) {
        for(y = 0; y < p.height; y++) {
            if(p.pole[p.activeY][p.activeX][x][y] != 0 && p.pole[p.activeY][p.activeX][x][y] != 10 && p.pole[p.activeY][p.activeX][x][y] != 12) {
                if(areColliding(x*p.size + link.speed, y*p.size + link.speed, p.size - link.speed*2, p.size/2 - link.speed,  link.x + link.speed*2, link.y + link.speed, p.size - link.speed, p.size/2 + link.speed)) {
                    return 1;
                }
            }
        }
    }

    return 0;
}