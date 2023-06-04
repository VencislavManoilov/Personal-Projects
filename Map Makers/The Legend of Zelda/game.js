let clicked = false;

// p from pole
let p = {
    size: 50,
    tip: [undefined, dirt, grass, brick, brickBlue, brick2, brickBlue2, bush, bushGreen, grave, sand, water, cave],
    pole: [],
    width: 16,
    height: 11,
    izbrano: 1
}

// e from enemy
let e = {
    br: 0,
    x: [],
    y: [],
    enemy: [],
    tip: [undefined, redTektite, blueTektite, redOctorok, blueOctorok, lynelRed, lynelBlue, moblinRed, moblinBlue],
    izbrano: 0,

    add: function(x, y, id) {
        this.x[this.br] = x;
        this.y[this.br] = y;
        this.enemy[this.br] = id;
        this.br++;
    },

    delete: function(index) {
        this.x.splice(index, 1);
        this.y.splice(index, 1);
        this.enemy.splice(index, 1);

        this.br--;
    }
}

// m from moving objects
let m = {
    br: 0,
    x: [],
    y: [],
    object: [],
    tip: [undefined, coin, arrow, bomb, boomerang, bow, food],
    izbrano: 0,

    add: function(x, y, id) {
        this.x[this.br] = x;
        this.y[this.br] = y;
        this.object[this.br] = id;
        this.br++;
    },

    delete: function(index) {
        this.x.splice(index, 1);
        this.y.splice(index, 1);
        this.object.splice(index, 1);

        this.br--;
    }
}

// t from tools
let t = {
    // This are static blocks
    startP: 5,
    y: windowSizeY - (5 + p.size),
    distance: p.size + 5,

    textSize: p.size/2,
    textY: windowSizeY - (5 + p.size*1.5),
    textStartP: 5 + p.size/2.5,
    textDistance: p.size + 5,

    copyY: windowSizeY - (25 + p.size)*2,
    copied: false,
    bucketX: 10 + p.size,
    bucketTool: false,

    fill: function(x, y, tip) {
        p.pole[x][y] = -1;

        for(k = 0; k < p.width*p.height/3; k++) {
            for(i = 0; i < p.width; i++) {
                for(j = 0; j < p.height; j++) {
                    if (p.pole[i][j] == tip) {
                        if (i > 0 && p.pole[i - 1][j] == -1) {
                            p.pole[i][j] = -1;
                        }

                        if (j > 0 && p.pole[i][j - 1] == -1) {
                            p.pole[i][j] = -1;
                        }

                        if(i < p.width - 1 && p.pole[i+1][j] == -1) {
                            p.pole[i][j] = -1;
                        }

                        if(j < p.height - 1 && p.pole[i][j+1] == -1) {
                            p.pole[i][j] = -1;
                        }
                    }
                }
            }
        }

        for(i = 0; i < p.width; i++) {
            for(j = 0; j < p.height; j++) {
                if(p.pole[i][j] == -1) {
                    p.pole[i][j] = p.izbrano;
                }
            }
        }
    },

    // This are enemies
    e: {
        startX: p.width*p.size + 5,
        startY: 5
    },

    // This draws everything for tool bar
    draw: function() {
        strokeRect(5, this.y - this.textSize - 5, p.tip.length*this.distance + 4, p.size + this.textSize + 9, 1, 'black');

        drawImage(copy, this.startP, this.copyY, p.size, p.size);
        if(this.copied) {
            fillText("Copied to clipboard", this.startP + this.distance*2, this.copyY + p.size*0.25, 20, 'Arial', 'black');
        }

        if(this.bucketTool) {
            fillRect(this.bucketX, this.copyY, p.size, p.size, '#777');
        }
        drawImage(bucket, this.bucketX, this.copyY, p.size, p.size);

        for(i = 1; i < p.tip.length; i++) {
            fillText(i, this.textStartP + i*this.textDistance, this.textY, this.textSize, 'Arial', 'black');
            drawImage(p.tip[i], this.startP*2 + i*this.distance, this.y, p.size, p.size);
        }
    
        fillText('0', p.size*0.5, windowSizeY - (5 + p.size*1.5), this.textSize, 'Arial', 'black');
        strokeRect(this.startP*2, windowSizeY - (5 + p.size), p.size, p.size, 1, 'black')


        strokeRect(this.e.startX, this.e.startY - 1, this.startP*2 + p.size + this.textSize, e.tip.length*this.distance + 5, 1, 'black');
        for(j = 0; j < e.tip.length; j++) {
            fillText(j, this.e.startX + 5, this.e.startY + this.distance*j + p.size/2.25, this.textSize, 'Arial', 'black');

            if(j != 0) {
                drawImage(e.tip[j], this.e.startX + this.textSize + 3, this.e.startY + this.distance*j, p.size, p.size);
            } else {
                strokeRect(this.e.startX + this.textSize + 3, this.e.startY + this.startP, p.size, p.size, 1, 'black');
            }
        }

        strokeRect(p.tip.length*this.distance + this.distance, this.y - this.textSize - 5, m.tip.length*this.distance + 4, p.size + this.textSize + 9, 1, 'black');
        for(k = 0; k < m.tip.length; k++) {
            fillText(k, this.distance + p.tip.length*this.distance + this.textStartP + k*this.textDistance, this.textY, this.textSize, 'Arial', 'black')

            if(k != 0) {
                drawImage(m.tip[k], this.startP + p.tip.length*this.distance + k*this.distance + this.distance, this.y, p.size, p.size);
            }
        }
        strokeRect(this.startP + p.tip.length*this.distance + this.distance, this.y, p.size, p.size, 1, 'black');
    }
}

for(x = 0; x < p.width; x++) {
    p.pole[x] = [];

    for(y = 0; y < p.height; y++) {
        p.pole[x][y] = 0;
    }
}

function init() {
    stopRightClick();
    hideCursor();
}

function update() {
    if(clicked) {
        if(areColliding(mouseX, mouseY, 1, 1,  0, 0, p.width*p.size - 1, p.height*p.size - 1) && e.izbrano == 0) {
            if(!t.bucketTool) {
                p.pole[Math.floor(mouseX/p.size)][Math.floor(mouseY/p.size)] = p.izbrano;
            }

            t.copied = false;
        }

        for(k = 0; k < e.br; k++) {
            if(areColliding(e.x[k], e.y[k], p.size, p.size,  mouseX, mouseY, 1, 1) && e.izbrano == 0 && p.izbrano == 0 && m.izbrano == 0) {
                e.delete(k);
                t.copied = false;
            }
        }

        for(j = 0; j < m.br; j++) {
            if(areColliding(mouseX, mouseY, 1, 1,  m.x[j], m.y[j], p.size, p.size) && p.izbrano == 0 && e.izbrano == 0 && m.izbrano == 0) {
                m.delete(j);
                t.copied = false;
            }
        }
    }

    if(e.izbrano == 0 && p.izbrano == 0 && m.izbrano == 0) {
        customCursor("crosshair");
    }

    t.y = windowSizeY - (5 + p.size);
    t.textY = windowSizeY - (5 + p.size*1.5);
    t.copyY = windowSizeY - (25 + p.size)*2;
}

function draw() {
    fillRect(0, 0, p.width*p.size, p.height*p.size, 'Wheat');
    
    for(x = 0; x < p.width; x++) {
        for(y = 0; y < p.height; y++) {
            strokeRect(x*p.size, y*p.size, p.size, p.size, 1, 'black');
            
            if(p.pole[x][y] != 0) {
                drawImage(p.tip[p.pole[x][y]], x*p.size, y*p.size, p.size, p.size);
            }
            
            if(p.pole[x][y] < 0) {
                p.pole[x][y] = 0;
            }
        }
    }
    
    for(i = 0; i < e.br; i++) {
        drawImage(e.tip[e.enemy[i]], e.x[i], e.y[i], p.size, p.size);
    }

    for(j = 0; j < m.br; j++) {
        drawImage(m.tip[m.object[j]], m.x[j], m.y[j], p.size, p.size);
    }
    
    t.draw();
    
    if(p.izbrano != 0) {
        drawImage(p.tip[p.izbrano], mouseX - p.size/4, mouseY - p.size/4, p.size/2, p.size/2);
    } else if(e.izbrano != 0) {
        drawImage(e.tip[e.izbrano], mouseX - p.size/4, mouseY - p.size/4, p.size/2, p.size/2);
    } else if(m.izbrano != 0) {
        drawImage(m.tip[m.izbrano], mouseX - p.size/4, mouseY - p.size/4, p.size/2, p.size/2);
    }

    UpdateParticles();
}

function mouseup() {
    clicked = false;

    for(i = 1; i < p.tip.length; i++) {
        if(areColliding(mouseX, mouseY, 1, 1,  t.startP*2 + i*t.distance, t.y, p.size, p.size)) {
            p.izbrano = i;
            e.izbrano = 0;
            m.izbrano = 0;
            hideCursor();
        }
    }

    if(areColliding(mouseX, mouseY, 1, 1,  t.startP*2, windowSizeY - (5 + p.size), p.size, p.size)) {
        p.izbrano = 0;
    }

    if(distance(mouseX, mouseY, t.startP + p.size/2, t.copyY + p.size/2) <= p.size/2) {
        Save();
    }

    if(areColliding(mouseX, mouseY, 1, 1,  t.bucketX, t.copyY, p.size, p.size)) {
        t.bucketTool = !t.bucketTool;
    }

    for(j = 1; j < e.tip.length; j++) {
        if(areColliding(mouseX, mouseY, 1, 1,  t.e.startX + t.textSize + 3, t.e.startY + t.distance*j, p.size, p.size)) {
            e.izbrano = j;
            p.izbrano = 0;
            m.izbrano = 0;
            hideCursor();
        }
    }

    if(areColliding(mouseX, mouseY, 1, 1,  t.e.startX + t.textSize + 3, t.e.startY, p.size, p.size)) {
        e.izbrano = 0;
    }

    if(areColliding(mouseX, mouseY, 1, 1,  0, 0, p.width*p.size, p.height*p.size) && e.izbrano != 0) {
        e.add(Math.floor(mouseX/p.size)*p.size, Math.floor(mouseY/p.size)*p.size, e.izbrano);
        t.copied = false;
    }

    if(areColliding(mouseX, mouseY, 1, 1,  0, 0, p.width*p.size, p.height*p.size) && m.izbrano != 0) {
        m.add(Math.floor(mouseX/p.size)*p.size, Math.floor(mouseY/p.size)*p.size, m.izbrano);
        t.copied = false;
    }

    for(k = 1; k < m.tip.length; k++) {
        if(areColliding(mouseX, mouseY, 1, 1,  t.startP + p.tip.length*t.distance + k*t.distance + t.distance, t.y, p.size, p.size) && k != 0) {
            m.izbrano = k;
            p.izbrano = 0;
            e.izbrano = 0;
            hideCursor();
        }
    }

    if(areColliding(mouseX, mouseY, 1, 1,  t.startP + p.tip.length*t.distance + t.distance, t.y, p.size, p.size)) {
        m.izbrano = 0;
    }
}

function mousedown() {
    clicked = true;

    if(t.bucketTool && e.izbrano == 0 && m.izbrano == 0) {
        let whatX = Math.floor(mouseX/p.size), whatY = Math.floor(mouseY/p.size);

        if(areColliding(mouseX, mouseY, 1, 1,  0, 0, p.width*p.size, p.height*p.size)) {
            t.fill(whatX, whatY, p.pole[whatX][whatY]);
        }
    }
}

function setJSONSourses() {
    return Map = {
        staticBlocks: JSON.stringify(p.pole),

        movingObjects: {
            br: JSON.stringify(m.br),
            x: JSON.stringify(m.x),
            y: JSON.stringify(m.y),
            id: JSON.stringify(m.object)
        },

        enemies: {
            br: JSON.stringify(e.br),
            x: JSON.stringify(e.x),
            y: JSON.stringify(e.y),
            id: JSON.stringify(e.enemy)
        }
    }
}

function Save() {
    setJSONSourses();
    CopyText(JSON.stringify(Map));
    t.copied = true;
}