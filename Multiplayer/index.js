const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require("path");
players = [];
app.use("/static", express.static(path.join(__dirname, "public")));
let patrons = [];
let windowSizeX = 0;
let windowSizeY = 0;

class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Patron {
    constructor(position, speed) {
        this.position = position;
        this.speed = speed;
    }
}

setInterval(update, 10);

function update() {
    for(let j = 0; j < patrons.length; j++) {
        patrons[j].position.x += patrons[j].speed;

        if(patrons[j].position.x > windowSizeX || patrons[j].position.x < 0 - 10) {
            patrons.splice(j, 1);
        }
    }
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function areColliding(positionA, sizeA, positionB, sizeB) {
    if (positionB.x <= positionA.x + sizeA.x) {
        if (positionA.x <= positionB.x + sizeB.x) {
            if (positionB.y <= positionA.y + sizeA.y) {
                if (positionA.y <= positionB.y + sizeB.y) {
                    return 1;
                }
            }
        }
    }
    return 0;
}

io.on("connection", (socket) => {
    socket.on("windowSize", (size) => {
        for(i = 0; i < players.length; i++){
            if(size.id == players[i].id && i == 0) {
                windowSizeX = size.x;
                windowSizeY = size.y;
            }
        }
    });

    socket.on("patron",(data) => {
        for (let i = 0; i < players.length; i++) {
            if(data.player == players[i].id) {
                x = players[i].position.x + players[i].size.x + 10;
                y = players[i].position.y + players[i].size.y/2;

                speed = -25;
                if(i == 0) {
                    speed = 25
                } else {
                    x = players[i].position.x - players[i].size.x/2;
                }

                patrons.push(new Patron(new Vector2(x, y), speed));
                break;
            }
        }
    });

    if(players.length >= 2) {
        socket.emit("Ne moje da vlezesh")
    }

    players.push({
        position: new Vector2(0, 0),
        size: new Vector2(35, 35),
        health: 100,
        id: socket.id,
        color: "rgb(" + randomInteger(25, 255) + ", " + randomInteger(25, 255) + ", " + randomInteger(25, 255) + ")"
    });

    for(i = 0; i < players.length; i++) {
        players[i].health = 100;
    }

    setInterval(() => {
        socket.emit("playerpostions", players);
        socket.emit("patroniPositions", patrons);
    }, 10);

    socket.emit("ping", socket.id);
    socket.on("myPos", (obj) => {
        for(let i = 0; i < players.length; i++) {
            if(players[i].health > 0) {
                if(players[i].id == obj.id) {
                    players[i].position.x = obj.position.x;
                    players[i].position.y = obj.position.y;

                    if(players[i].position.x < 0) {
                        players[i].position.x = 0;
                    } if(players[i].position.x > windowSizeX - players[i].size.x) {
                        players[i].position.x = windowSizeX - players[i].size.x;
                    } if(players[i].position.y < 0) {
                        players[i].position.y = 0;
                    } if(players[i].position.y > windowSizeY - players[i].size.y) {
                        players[i].position.y = windowSizeY - players[i].size.y;
                    }

                    if(i == 0) {
                        if(players[i].position.x > windowSizeX/2 - players[i].size.x - 5) {
                            players[i].position.x = windowSizeX/2 - players[i].size.x - 5;
                        }
                    } else {
                        if(players[i].position.x < windowSizeX/2 + 5) {
                            players[i].position.x = windowSizeX/2 + 5;
                        }
                    }
                }

                for(j = 0; j < patrons.length; j++) {
                    if(areColliding(players[i].position, players[i].size,  patrons[j].position, new Vector2(10, 5))) {
                        patrons.splice(j, 1);
                        players[i].health -= 5;
                    }
                }
            }
        }
    });

    console.log("a user connected");
    socket.on("disconnect", () => {
        for (let i = 0; i < players.length; i++) {
            if(players[i].id == socket.id){
                players.splice(i, 1)
            }
        }
    })
});

server.listen(3000, () => {
    console.log("listening on *:3000");
});