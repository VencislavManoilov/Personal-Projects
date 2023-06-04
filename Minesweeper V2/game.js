let grid = [], gridSize = 10, gridValue = [], opened = [];

for(let x = 0; x < gridSize; x++) {
    grid[x] = [];
    gridValue[x] = [];
    opened[x] = [];
    for(let y = 0; y < gridSize; y++) {
        a = randomInteger(0, 100);

        if(a < 10) {
            grid[x][y] = true;
        } else {
            grid[x][y] = false;
        }

        gridValue[x][y] = 0;
        opened[x][y] = false;
    }
}

for(let x = 0; x < gridSize; x++) {
    for(let y = 0; y < gridSize; y++) {
        canGoMinX = -1;
        canGoMaxX = 2;
        canGoMinY = -1;
        canGoMaxY = 2;
        if(x == 0) {
            canGoMinX = 0;
        }
        if(x == gridSize - 1) {
            canGoMaxX = 1;
        }
        if(y == 0) {
            canGoMinY = 0;
        }
        if(y == gridSize - 1) {
            canGoMaxY = 1;
        }
        for(let i = canGoMinX; i < canGoMaxX; i++) {
            for(let j = canGoMinY; j < canGoMaxY; j++) {
                if(grid[x + i][y + j] != undefined && grid[x + i][y + j]) {
                    gridValue[x][y]++;
                }
            }
        }
    }
}

function update() {

}

function draw() {
    for(let x = 0; x < gridSize; x++) {
        for(let y = 0; y < gridSize; y++) {
            if(grid[x][y]) {
                fillRect(new Vector2(5 + x * 55, 5 + y * 55), new Vector2(50, 50), "red");
            } else {
                fillRect(new Vector2(5 + x * 55, 5 + y * 55), new Vector2(50, 50), "green");
            }

            if(gridValue[x][y] != 0 && !grid[x][y]) {
                fillText(gridValue[x][y], new Vector2(5 + x * 55, 5 + y * 55), 25, "Arial", "black");
            }
        }
    }
}

function mousedown() {
    // for(let x )
}