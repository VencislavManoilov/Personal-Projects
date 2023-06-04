const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require("path");
app.use("/static", express.static(path.join(__dirname, "public")));

people = [];

io.on("connection", (socket) => {
    people.push({
        name: people.length,
        color: "blue",
        id: socket.id
    });


    setInterval(() => {
        socket.emit("people", people);
    }, 10);

    socket.emit("ping", socket.id);

    console.log("a user connected");
    socket.on("disconnect", () => {
        for(let i = 0; i < people.length; i++) {
            if(people[i].id == socket.id) {
                people.splice(i, 1);
            }
        }
    })
});

server.listen(3000, () => {
    console.log("listening on *:3000");
});