let kartinka = [];

for(x = 0; x < window.innerWidth; x++) {
    if(x % 3 == 0) {
        kartinka[x] = 'red';
        kartinka[x + 1] = 'green';
        kartinka[x + 2] = 'blue';
    }
}

function update() {

}

function draw() {
    for(x=0; x<=window.innerWidth; x++) {
        context.fillStyle = kartinka[x];
        context.fillRect(x, 0, 1, window.innerHeight);
    }
}