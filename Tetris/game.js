let grid = [];

for(let x = 0; x < 8; x++) {
    grid[x] = [];
    for(let y = 0; y < 12; y++) {
        grid[x][y] = "white";
    }
}

changeBg("black");

function update() {

}

function draw() {
    for(let x = 0; x < 8; x++) {
        for(let y = 0; y < 12; y++) {
            strokeRect(new Vector2(5 + x * 55, 5 + y * 55), new Vector2(50, 50), 2, grid[x][y]);
        }
    }
}