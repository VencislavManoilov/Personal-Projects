let grid = [1];

changeBg("black");

function update() {

}

function draw() {

}

function compress(index) {
    for(let x = 0; x < 2; x++) {
        index[x] = []
        for(let y = 0; y < 2; y++) {
            index[x][y] = 1;
        }
    }

    return index;
}