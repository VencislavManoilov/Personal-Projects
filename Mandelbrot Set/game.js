let grid = [], precision = 258, sizeX = 800, sizeY = 600, zoom = 200;

for(let x = 0; x < sizeX; x++) {
    grid[x] = [];
    for(let y = 0; y < sizeY; y++) {
        grid[x][y] = mandelbrod((x - sizeX/2)/zoom, (y - sizeY/2)/zoom);
    }
}

function distanceFromCenter(x, y) {
    return Math.sqrt(x*x + y*y);
}

function mandelbrod(x, y) {
    let newX = x*x - y*y + x;
    let newY = 2*x*y + y;
    let num = 0;

    for(let i = 0; i < precision; i++) {
        if(distanceFromCenter(newX, newY) > 2) {
            return num;
        }

        let newNewX = newX;
        newX = newX*newX - newY*newY + x;
        newY = 2*newNewX*newY + y;
        num++;
    }

    return precision;
}

function update() {

}

function keyup(key) {
    // 1000000000000000
    let zoomSpeed = 1000000000000000;
    if(key == 81) {
        zoom -= zoomSpeed;
        regenerate();
    } if(key == 69) {
        zoom += zoomSpeed;
        regenerate();
    }
}

function regenerate() {
    for(let x = 0; x < sizeX; x++) {
        grid[x] = [];
        for(let y = 0; y < sizeY; y++) {
            grid[x][y] = mandelbrod((x - sizeX/2 - zoom*1.24999872502)/zoom, (y - sizeY/2 - zoom*0.0261999997)/zoom);
        }
    }

    draw();
}

function draw() {
    for(let x = 0; x < sizeX; x++) {
        for(let y = 0; y < sizeY; y++) {
            friquensy = 2*Math.PI/24;
            context.fillStyle = makeColorGradient(friquensy, friquensy, friquensy, 0, 0, 0, 128, 127, grid[x][y]);
            fillRect(new Vector2(x, y), new Vector2(1, 1));
        }
    }
}

function makeColorGradient(frequency1, frequency2, frequency3, phase1, phase2, phase3, center, width, index) {
    if (center == undefined) {
        center = 128;
    } if (width == undefined) {
        width = 127;
    } if (index == undefined) {
        index = 1;
    }

    var red = Math.sin(frequency1*index + phase1) * width + center;
    var grn = Math.sin(frequency2*index + phase2) * width + center;
    var blu = Math.sin(frequency3*index + phase3) * width + center;

    return RGB2Color(red, grn, blu);
}

function RGB2Color(r,g,b) {
    return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function byte2Hex(n) {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}