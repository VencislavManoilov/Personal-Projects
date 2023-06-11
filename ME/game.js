let people = [], player = {x: windowSizeX/2 - 25, y: windowSizeY/2 - 25};

for(let i = 0; i < windowSizeX * windowSizeY/2000; i++) {
    people[i] = {x: randomInteger(-25, windowSizeX + 25), y: randomInteger(-25, windowSizeY + 25)};
    while(distance(player.x, player.y, people[i].x, people[i].y) < 250) {
        let angle = Math.atan2(people[i].y - player.y, people[i].x - player.y);
        people[i].x += Math.cos(angle) * 2;
        people[i].y += Math.sin(angle) * 2;
    }
}

function update() {
    for(let i = 0; i < people.length; i++) {
        if(distance(player.x, player.y, people[i].x, people[i].y) < 250) {
            let angle = Math.atan2(people[i].y - player.y, people[i].x - player.y);
            people[i].x += Math.cos(angle) * 2;
            people[i].y += Math.sin(angle) * 2;
        }
    }

    if(Input.GetKey(KeyCode.A)) {
        player.x -= 2;
    }

    if(Input.GetKey(KeyCode.D)) {
        player.x += 2;
    }

    if(Input.GetKey(KeyCode.W)) {
        player.y -= 2;
    }

    if(Input.GetKey(KeyCode.S)) {
        player.y += 2;
    }
}

function draw() {
    for(let i = 0; i < people.length; i++) {
        drawImage(guy, people[i].x, people[i].y, 125, 125, 0);
    }

    drawImage(me, player.x, player.y, 75, 75);
}