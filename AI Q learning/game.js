let startWithPlayers = 100;

let player = [], speed = 5, gen = 0, timeForNewGen = 15, time = 0, cam = 0, maxCam = 2, showLines = true, stopTraining = false;

class Player {
    constructor(color, x, y, hiddenLayers, neuronsInLayer, coin) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.hiddenLayers = hiddenLayers;
        this.neuronsInLayer = neuronsInLayer;
        this.coin = coin;

        this.fitness = 0;

        // The inputs are: x, y, disWallLeft, disWallRight, disWallTop, disWallBottom, disFromCoin, angleFromCoin
        // Za sega inputite sa dva za da testvame mozyka
        this.inputs = 2;

        // The outputs are: W, A, S, D
        this.outputs = 4;

        this.makeBrain();
    }

    makeBrain() {
        this.weights = [];

        // Tova neshto pravi weightovete

        this.weights[0] = [];
        for(let i = 0; i < this.inputs; i++) {
            this.weights[0][i] = [];
            for(let j = 0; j < this.neuronsInLayer; j++) {
                this.weights[0][i][j] = Math.random() * 2 - 1;
            }
        }

        for(let i = 0; i < this.hiddenLayers; i++) {
            this.weights[i + 1] = [];
            for(let j = 0; j < this.neuronsInLayer; j++) {
                this.weights[i + 1][j] = [];
                for(let k = 0; k < this.neuronsInLayer; k++) {
                    this.weights[i + 1][j][k] = Math.random() * 2 - 1;
                }
            }
        }

        this.weights[this.hiddenLayers + 1] = [];
        for(let j = 0; j < this.neuronsInLayer; j++) {
            this.weights[this.hiddenLayers + 1][j] = [];
            for(let i = 0; i < this.outputs; i++) {
                this.weights[this.hiddenLayers + 1][j][i] = Math.random() * 2 - 1;
            }
        }
    }

    changeBrain() {
        for(let i = 0; i < this.weights.length; i++) {
            for(let j = 0; j < this.weights[i].length; j++) {
                for(let k = 0; k < this.weights[i][j].length; k++) {
                    this.weights[i][j][k] += Math.random() * 0.005 - 0.0025;
                }
            }
        }

        this.changePos();
    }

    changePos() {
        this.x = randomInteger(0, windowSizeX - 50);
        this.y = randomInteger(0, windowSizeY - 50);

        this.coin.x = randomInteger(0, windowSizeX - 50);
        this.coin.y = randomInteger(0, windowSizeY - 50);

        this.color = "hsl(" + randomInteger(0, 360) + ", 100%, 50%)";
    }

    update() {
        let nevron = [];

        // Tova sa inputite:
        nevron[0] = [];
        nevron[0][0] = this.x - this.coin.x;
        nevron[0][1] = this.y - this.coin.y;
        // nevron[0][1] = distance(this.x, this.y, this.coin.x, this.coin.y);

        // Smqta nevronite v pyrviq layer
        nevron[1] = [];
        for(let i = 0; i < this.neuronsInLayer; i++) {
            nevron[1][i] = 0;
            for(let j = 0; j < this.inputs; j++) {
                let x = this.weights[0][j][i] * nevron[0][j]
                nevron[1][i] += 1 / (1 + Math.E**x) - 0.5;
            }
        }

        // Smqta nevronite v hidden layers
        for(let i = 0; i < this.hiddenLayers; i++) {
            nevron[i + 2] = [];
            for(let j = 0; j < this.neuronsInLayer; j++) {
                nevron[i + 2][j] = 0;
                for(let k = 0; k < this.neuronsInLayer; k++) {
                    let x = this.weights[i + 1][k][j] * nevron[i + 1][j];
                    nevron[i + 2][j] += 1 / (1 + Math.E**x) - 0.5;
                }
            }
        }

        // Smqta outputite
        nevron[this.hiddenLayers + 2] = [];
        for(let i = 0; i < this.outputs; i++) {
            nevron[this.hiddenLayers + 2][i] = 0;
            for(let j = 0; j < this.neuronsInLayer; j++) {
                let x = this.weights[this.hiddenLayers + 1][j][i] * nevron[this.hiddenLayers + 1][j]
                nevron[this.hiddenLayers + 2][i] += 1 / (1 + Math.E**x) - 0.5;
            }
        }

        // Pravi dejstvie
        // W
        if(nevron[this.hiddenLayers + 2][0] > 0) {
            this.y -= speed;
        }

        // A
        if(nevron[this.hiddenLayers + 2][1] > 0) {
            this.x -= speed;
        }

        // S
        if(nevron[this.hiddenLayers + 2][2] > 0) {
            this.y += speed;
        }

        // D
        if(nevron[this.hiddenLayers + 2][3] > 0) {
            this.x += speed;
        }

        if(this.x > windowSizeX - 50) {
            this.x = windowSizeX - 50;
        }
        if(this.y > windowSizeY - 50) {
            this.y = windowSizeY - 50;
        }

        if(this.x < 0) {
            this.x = 0;
        }

        if(this.y < 0) {
            this.y = 0;
        }

        if(areColliding(this.x, this.y, 50, 50, this.coin.x, this.coin.y, 50, 50)) {
            this.coin.respawn();
            this.fitness++;
        }
    }

    draw() {
        if(showLines) {
            drawLine(this.x + 25, this.y + 25, this.coin.x + 25, this.coin.y + 25);
        }
        fillRect(this.x, this.y, 50, 50, this.color);
        this.coin.draw();
    }
}

class Coin {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        drawImage(GameCoin, this.x, this.y, 50, 50, 0);
    }

    respawn() {
        this.x = randomInteger(0, windowSizeX - 50);
        this.y = randomInteger(0, windowSizeY - 50);
    }
}

for(let i = 0; i < startWithPlayers; i++) {
    player.push(new Player("hsl(" + randomInteger(0, 360) + ", 100%, 50%)", randomInteger(0, windowSizeX - 50), randomInteger(0, windowSizeY - 50), 10, 15, new Coin(randomInteger(0, windowSizeX - 50), randomInteger(0, windowSizeY - 50))));
}

function init() {
    console.log(player);
}

let a = [], timeFromNewGen = 0;
function update() {
    for(let i = 0; i < player.length; i++) {
        player[i].update();
    }

    if(!stopTraining) {
        time++;
    timeFromNewGen++;

    if(time % (timeForNewGen * 100) == 0) {
        gen++;

        let plFitness = [];
        for(let i = 0; i < player.length; i++) {
            plFitness.push({fit: player[i].fitness, index: i});
        }

        a = [];
        for(let i = 0; i < player.length; i++) {
            let best = -1, bestIndex = -1, b = -1;
            for(let j = 0; j < plFitness.length; j++) {
                if(plFitness[j].fit > best) {
                    best = plFitness[j].fit;
                    bestIndex = plFitness[j].index;
                    b = j;
                }
            }

            a.push(plFitness[b].index);
            plFitness.splice(b, 1);
        }

        for(let i = 0; i < Math.floor(a.length/2); i++) {
            let topG = player[a[i]];
            player[a[i + Math.floor(a.length/2) - 1]].weights = topG.weights;
            player[a[i + Math.floor(a.length/2) - 1]].changeBrain();
            player[a[i]].changePos();
        }

        timeFromNewGen = 0;
    }
    }

    if(cam > maxCam) {
        cam = 0;
    }
}

function draw() {
    context.textAlign = "end";
    if(cam == 0) {
        for(let i = 0; i < player.length; i++) {
            player[i].draw();
        }
        fillText("Watching all players", windowSizeX - 10, 10, 50, "Arial", "Black");
    } if(cam == 1) {
        let watchplayer = 0;
        if(a[0] != undefined) {
            watchplayer = a[i];
        }
        player[watchplayer].draw();
        fillText("Watching best player", windowSizeX - 10, 10, 50, "Arial", "Black");
    }

    maxCam = 1;

    context.textAlign = "start";
    fillText("Generation: " + gen, 10, 10, 50, "Arial", "Black");
    if(!stopTraining) {
        fillText("Time left: " + (timeForNewGen * 100 - timeFromNewGen) / 100, 10, 60, 50, "Arial", "Black");
    }
}

function getAngleFrom2Points(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
}

function keydown(key) {
    if(key == KeyCode.ArrowRight || key == KeyCode.Space) {
        cam++;
    }

    if(key == KeyCode.E) {
        showLines = !showLines;
    }

    if(key == KeyCode.Enter) {
        stopTraining = !stopTraining;
    }
}