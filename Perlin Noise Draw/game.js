let grid = [], updates = 0;

let width = windowSizeX,
    height = windowSizeY,

    freq = 200,
    multi = 0.02
;

// noise.seed(10);
noise.seed(Math.random());

for(let x = 0; x < Math.floor(width/10) + 1; x++) {
    grid[x] = [];

    for(let y = 0; y < Math.floor(height/10) + 1; y++) {
        // grid[x][y] = 0.5 + noise.perlin3(x / (0.5 + noise.perlin2(x / freq, y / freq)) * multi, y / (0.5 + noise.perlin2(x / freq, y / freq)) * multi, 0);
        grid[x][y] = 0.5 + noise.perlin3((x * 10) / freq, (y * 10) / freq, 0);
    }
}

function update() {
    updates++;
}

function draw() {
    // noise.seed(Math.random());

    for(let x = 0; x < Math.floor(width/10) + 1; x++) {
        grid[x] = [];

        for(let y = 0; y < Math.floor(height/10) + 1; y++) {
            // grid[x][y] = 0.5 + noise.perlin3(x / (0.5 + noise.perlin2(x / freq, y / freq)) * multi, y / (0.5 + noise.perlin2(x / freq, y / freq)) * multi, 0);
            grid[x][y] = 0.5 + noise.perlin3((x * 10) / freq, (y * 10) / freq, updates * 0.01);
            // grid[x][y] = (0.5 + noise.perlin3((x * 10) / freq, (y * 10) / freq, updates * 0.01)) + (noise.perlin3((x * 10) / 50, (y * 10) / 50, updates * 0.01)) / 10;
        }
    }

    for(let x = 0; x < grid.length; x++) {
        for(let y = 0; y < grid[x].length; y++) {
            let a = grid[x][y] * 10;

            if(a != 0.5) {
                fillRect(x * 10 - a/2, y * 10 - a/2, a, a, "black");
                // fillRect(x * 10 - a/2, y * 10 - a/2, a, a, "hsl(" + grid[x][y] * -360 + ", 100%, 50%)");
            }
        }
    }
}