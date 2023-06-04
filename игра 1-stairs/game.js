let table = [], updates = 0, big = 11;

for(let i = 0; i < big; i++) {
    table[i] = [];
    for(let j = 0; j < big; j++) {
        if(i == j || big - i == j + 1) {
            table[i][j] = true
        } else {
            table[i][j] = false;
        }
    }
}

function update() {
    updates += 0.5;
}

function draw() {
    for(let i = 0; i < big; i++) {
        for(let j = 0; j < big; j++) {
            if(table[i][j]) {
                fillRect(new Vector2(5 + i * 55, 5 + j * 55), new Vector2(50, 50), 'hsl(' + updates + ', 100%, 50%)');
            }
        }
    }

    UpdateParticles();
}