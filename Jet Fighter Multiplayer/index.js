const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require("path");
players = [];
patron = [];
app.use("/static", express.static(path.join(__dirname, "public")));

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(update, 10);

function update() {
    for(let j = 0; j < patron.length; j++) {
        patron[j].x += Math.cos(patron[j].angle) * 12;
        patron[j].y += Math.sin(patron[j].angle) * 12;
    }
}

io.on("connection", (socket) => {
    console.log("a user connected");

    players.push({
        x: 0,
        y: 0,
        angle: randomInteger(0, 360),
        imageIndex: randomInteger(0, 4),
        score: 0,
        id: socket.id
    })

    setInterval(() => {
        socket.emit("players", players);
        socket.emit("patroniPosition", patron);
    }, 10);

    socket.on("myPosition", (obj) => {
        for(let i = 0; i < players.length; i++) {
            if(players[i].id == obj.id) {
                players[i].x = obj.x;
                players[i].y = obj.y;
                players[i].angle = obj.angle;
            }
        }
    });

    socket.on("patronPlayer", (i) => {
        patron.push({
            x: players[i].x + 22.5,
            y: players[i].y + 22.5,
            angle: players[i].angle,
            color: players[i].imageIndex
        });
    })

    socket.emit("ping", socket.id);

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