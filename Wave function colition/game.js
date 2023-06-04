let gridSize = 100;

let colors = ['chocolate', 'yellow', 'cyan'], canBuild = [[1], [0, 2], [1]], grid = [];

for(let x = 0; x < gridSize; x++) {
    grid[x] = [];
    for(let y = 0; y < gridSize; y++) {
        grid[x][y] = -1;
    }
}

grid[randomInteger(0, gridSize)][randomInteger(0, gridSize)] = randomInteger(0, colors.length - 1);

for(let x = 0; x < gridSize; x++) {
    for(let y = 0; y < gridSize; y++) {

    }
}

function update() {

}

function draw() {
    for(let x = 0; x < gridSize; x++) {
        for(let y = 0; y < gridSize; y++) {
            if(grid[x][y] != -1) {
                fillRect(new Vector2(5 + x * 5, 5 + y * 5), new Vector2(5, 5), colors[grid[x][y]]);
            }
        }
    }
}

function crossSection(...arrs) {
    result = [];
    resultcleared = [];
    resultCross = [];

    for (let i = 0; i < arrs.length; i++) {
        result = result.concat(arrs[i]);
    }

    resultcleared = [...new Set(result)];

    for (let i = 0; i < resultcleared.length; i++) {
        count = 0;
        for (let j = 0; j < result.length; j++) {
        if (result[j] == resultcleared[i]) {
            count++;
        }
        }
        if (count == arrs.length) {
        resultCross.push(resultcleared[i]);
        }
    }
    if (resultCross.length > 0) {
        return resultCross;
    } else {
        return arrs[0];
    }
}