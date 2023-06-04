let players = [], myid = 0, myX = randomInteger(0, 800), myY = randomInteger(0, 600), myAngle = 0, myIndex = 0, patron = [];

socket.on("players", (playerslol) => {
    players = playerslol;
});

socket.on("ping", (id) => {
    myid = id;
});

socket.on("patroniPosition", (p) => {
    patron = p;
})

images = [player0, player1, player2, player3, player4];
colors = ['pink',  'blue',  'green', 'red',   'orange'];

for(let i = 0; i < players.length; i++) {
    if(players[i].id == myid) {
        myX = players[i].x;
        myY = players[i].y;
        myAngle = players[i].angle;
        myIndex = i;
    }
}

function update() {
    if(isKeyPressed[65]) {
        myAngle -= 0.05;
    }

    if(isKeyPressed[68]) {
        myAngle += 0.05;
    }

    if(isKeyPressed[87]) {
        myX += Math.cos(myAngle) * 2;
        myY += Math.sin(myAngle) * 2;
    }

    socket.emit("myPosition", {
        id: myid,
        x: myX,
        y: myY,
        angle: myAngle
    });
}

function draw() {
    for(let j = 0; j < patron.length; j++) {
        fillRect(new Vector2(patron[j].x, patron[j].y), new Vector2(5, 5), colors[patron[j].color]);
    }

    for(let i = 0; i < players.length; i++) {
        drawImage(images[players[i].imageIndex], players[i].x, players[i].y, 50, 50, players[i].angle + Math.PI/2);
    }
}

function mousedown() {
    for(let i = 0; i < players.length; i++) {
        if(players[i].id == myid) {
            socket.emit("patronPlayer", i);
        }
    }
}