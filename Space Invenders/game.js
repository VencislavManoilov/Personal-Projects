let brEnemies = 10, enemy = [], enemyOffset = 0, turnBack = false;

let player = {
    position: new Vector2(windowSizeX/2 - 25, windowSizeY - 75),
    size: new Vector2(50, 50),
    speed: 3,

    ammo: {
        position: []
    }
};

class Enemy {
    constructor(x, y) {
        this.position = new Vector2(x, y);
        this.canShoot = randomInteger(0, 100);
        if(this.canShoot < 25) {
            this.shootingDeley = randomInteger(600, 1200);
        }
        this.updates = 0;
        this.ammo = {
            position: []
        }
    }

    update() {
        this.updates++;

        if(this.updates%this.shootingDeley == 0) {
            this.ammo.position.push(new Vector2(this.position.x + 20, this.position.y + 35));
        }

        for(i in this.ammo.position) {
            this.ammo.position[i].y += 5;
        }
    }

    draw() {
        for(i in this.ammo.position) {
            fillRect(this.ammo.position[i], new Vector2(10, 15), 'blue');
        }

        fillRect(new Vector2(this.position.x + enemyOffset, this.position.y), new Vector2(50, 50), 'red');
    }
}

for(let x = 0; x < 10; x++) {
    enemy[x] = [];
    for(let y = 0; y < 5; y++) {
        enemy[x][y] = new Enemy(100 + x * 75, 25 + y * 75);
    }
}

changeBg('black');

function update() {
    if(isKeyPressed[65]) {
        player.position.x -= player.speed;
    }

    if(isKeyPressed[68]) {
        player.position.x += player.speed;
    }

    for(i in player.ammo.position) {
        player.ammo.position[i].y -= 5;
    }

    for(x in enemy) {
        for(y in enemy[x]) {
            enemy[x][y].update();
        }
    }

    if(enemyOffset == 100) {
        turnBack = true;
    }

    if(enemyOffset < 100 + enemy.length * 75 && !turnBack) {
        enemyOffset++;
    } else {
        enemyOffset--;
        turnBack = false;
    }
}

function draw() {
    for(i in player.ammo.position) {
        fillRect(player.ammo.position[i], new Vector2(10, 15), 'cyan');
    }

    fillRect(player.position, player.size, "green");

    for(x in enemy) {
        for(y in enemy[x]) {
            enemy[x][y].draw();
        }
    }

    UpdateParticles();
}

function keydown(key) {
    if(key == 32) {
        Shoot();
    }
}

function mousedown() {
    Shoot();
}

function Shoot() {
    player.ammo.position.push(new Vector2(player.position.x + 20, player.position.y));
}