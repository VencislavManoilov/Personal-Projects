let grid = [], size = 150;

for(let x = 0; x < 3; x++) {
    grid[x] = [];

    for(let y = 0; y < 3; y++) {
        grid[x][y] = 0;
    }
}

changeBg("grey");

function update() {

}

function draw() {
    context.lineJoin = "round";
    for(let x = 0; x < 3; x++) {
        for(let y = 0; y < 3; y++) {
            if(grid[x][y] == 1) {

            } else if(grid[x][y] == 2) {

            }
        }
    }

    for(let i = 0; i < 2; i++) {
        strokeRect(windowSizeX/2 - size * 1.5, windowSizeY/2 - size/2 + i * size, size * 3, 0, 15, "#303030");
        strokeRect(windowSizeX/2 - size/2 + i * size, windowSizeY/2 - size * 1.5, 0, size * 3, 15, "#303030");
    }
}