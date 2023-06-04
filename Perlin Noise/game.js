let gridSizeX = windowSizeX/10 + 1, gridSizeY = windowSizeY/10 + 1, grid = [], freq = 20, speed = 0.5;

noise.seed(Math.random());
updates = 0;

function update() {
    updates += speed;
}

function draw() {
    for (let i = 0; i < gridSizeX; i++) {
        grid[i] = [];

        for (let j = 0; j < gridSizeY; j++) {
            grid[i][j] = noise.perlin3(i / freq, j / freq, updates / 100) * Math.PI + Math.PI;
        }
    }
    for (let i = 0; i < gridSizeX; i++) {
        for (let j = 0; j < gridSizeY; j++) {
            context.strokeStyle = "white";
            // context.strokeStyle = "hsl(" + grid[i][j] * 360 + ", 100%, 50%)";
            context.strokeWidth = 2;
            drawLine(new Vector2(i * 10, j * 10), new Vector2(i * 10 + 20 * Math.cos(grid[i][j]), j * 10 + 20 * Math.sin(grid[i][j])), 2);
        }
    }
}