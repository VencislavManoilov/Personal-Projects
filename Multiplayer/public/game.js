let patrons = [], myIndex = 0;

myid = 0;
socket.on("ping", (id) => {
    myid = id;
});

players = [];
socket.on("playerpostions", (playerslol) => {
    players = playerslol;
});

socket.on("patroniPositions", (positions) => {
    patrons = positions;
});

mogaLiDaVlaza = true;
socket.on("Ne moje da vlezesh", () => {
    mogaLiDaVlaza = false;
});

changeBg("black");

function update() {
    if(mogaLiDaVlaza) {
        for(i = 0; i < players.length; i++) {
            socket.emit("windowSize", {x: windowSizeX, y:windowSizeY, id: myid});
        }

        socket.emit("myPos", {
            position: new Vector2(mouseX - 17.5, mouseY - 17.5),
            id: myid
        });
    }
}

function draw() {
    if(mogaLiDaVlaza) {
        for (let j = 0; j < patrons.length; j++) {
            fillRect(patrons[j].position, new Vector2(10, 5), "red");
        }

        for (let i = 0; i < players.length; i++) {
            if(players[i].health > 0) {
                fillArc(players[i].position, players[i].size.x/2, players[i].color);
                fillRect(new Vector2(players[i].position.x, players[i].position.y - 15), new Vector2(players[i].size.x, 10), "red");
                fillRect(new Vector2(players[i].position.x, players[i].position.y - 15), new Vector2(players[i].size.x * players[i].health/100, 10), "green");
            } else {
                fillText("You ded!!!", new Vector2(25 + i * (windowSizeX/2 + 25), 25), 25, "Arial", "red");
            }
        }

        fillRect(new Vector2(windowSizeX/2 - 5, 0), new Vector2(10, windowSizeY), "white");
        strokeRect(new Vector2(-2, -2), new Vector2(windowSizeX + 2, windowSizeY + 2), 2, "white");

        context.textAlign = "center";
        fillText("Press R to restart", new Vector2(windowSizeX/2, windowSizeY + 10), 25, "Arial", "white");
        context.textAlign = "start";
    } else {
        fillText("Ne mojesh da vlezesh! hahahahaha!", new Vector2(10, 10), 25, "Arial", "red");
    }

    if(players.length == 1) {
        fillText("Waiting for other player! You don't have friends!", new Vector2(windowSizeX/2 + 25, 20), 17, "Arial", "white");
    }

    UpdateParticles();
}

function mousedown() {
    for (let i = 0; i < players.length; i++) {
        if(players[i].health > 0) {
            socket.emit("patron",{player: myid});
        }
    }
}

function keyup(key) {
    for (let i = 0; i < players.length; i++) {
        if(KeyCode.R == key) {
            Reload();
        }
    }
}