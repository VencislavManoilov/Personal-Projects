let startX = windowSizeX/2 - 4 * 100, startY = windowSizeY/2 - 4 * 100, pieceType = [whiteKing, whiteQueen, whiteBishop, whiteKnight, whiteRook, whitePawn, blackKing, blackQueen, blackBishop, blackKnight, blackRook, blackPawn];
let selectedX = -1, selectedY = -1, turn = 1, nothing;
let grid = [], canGoX = [], canGoY = [];

for(let x = 0; x < 8; x++) {
    grid[x] = [];
    for(let y = 0; y < 8; y++) {
        grid[x][y] = 0
    }
}

grid[0] = [10, 11, -1, -1, -1, -1, 5, 4];
grid[1] = [ 9, 11, -1, -1, -1, -1, 5, 3];
grid[2] = [ 8, 11, -1, -1, -1, -1, 5, 2];
grid[3] = [ 7, 11, -1, -1, -1, -1, 5, 1];
grid[4] = [ 6, 11, -1, -1, -1, -1, 5, 0];
grid[5] = [ 8, 11, -1, -1, -1, -1, 5, 2];
grid[6] = [ 9, 11, -1, -1, -1, -1, 5, 3];
grid[7] = [10, 11, -1, -1, -1, -1, 5, 4];

function update() {
    typeof nothing === undefined;
    startX = windowSizeX/2 - 4 * 100;
    startY = windowSizeY/2 - 4 * 100;

    let x = selectedX, y = selectedY;
    canGoX = [], canGoY = [];
    if(selectedX > -1 || selectedY > -1) {
        if(grid[x][y] == 0) {
            for(let i = -1; i <= 1; i++) {
                for(let j = -1; j <= 1; j++) {
                    if(grid[x + i][y + j] != undefined) {
                        if(i == 0 && j == 0) {} else {
                            if(grid[x + i][y + j] > 5 || grid[x + i][y + j] == -1) {
                                canGoX.push(x + i);
                                canGoY.push(y + j);
                            }
                        }
                    }
                }
            }
        } if(grid[x][y] == 1) {
            for(let i = 0 - x; i < 8 - x; i++) {
                for(let j = 0 - y; j < 8 - y; j++) {
                    if(grid[x + i][y + j] != undefined) {
                        // console.log("hello")
                        if(i == 0 || j == 0 || i == j || i +j == 0){
                            if(i == 0 && j == 0){} else {
                                if(grid[x + i][y + j] > 5 || grid[x + i][y + j] == -1) {
                                    canGoX.push(x + i);
                                    canGoY.push(y + j);
                                }
                            }
                        }
                    }
                }
            }
        } if(grid[x][y] == 2) {
            for(let i = 0 - x; i < 8 - x; i++) {
                for(let j = 0 - y; j < 8 - y; j++) {
                    if(grid[x + i][y + j] != undefined) {
                        // console.log("hello")
                        if(i == j || i + j == 0){
                            if(i == 0 && j == 0){} else {
                                if(grid[x + i][y + j] > 5 || grid[x + i][y + j] == -1) {
                                    canGoX.push(x + i);
                                    canGoY.push(y + j);
                                }
                            }
                        }
                    }
                }
            }
        } if(grid[x][y] == 3) {
            if(x - 1 > -1 && y - 2 > -1) {
                if(grid[x - 1][y - 2] > 5 || grid[x - 1][y - 2] == -1) {
                    canGoX.push(x - 1);
                    canGoY.push(y - 2);
                }
            }
            if(x - 2 > -1 && y - 1 > -1) {
                if(grid[x - 2][y - 1] > 5 || grid[x - 2][y - 1] == -1) {
                    canGoX.push(x - 2);
                    canGoY.push(y - 1);
                }
            }
            if(x + 1 < 8 && y - 2 > -1) {
                if(grid[x + 1][y - 2] > 5 || grid[x + 1][y - 2] == -1) {
                    canGoX.push(x + 1);
                    canGoY.push(y - 2);
                }
            }
            if(x + 2 < 8 && y - 1 > -1) {
                if(grid[x + 2][y - 1] > 5 || grid[x + 2][y - 1] == -1) {
                    canGoX.push(x + 2);
                    canGoY.push(y - 1);
                }
            }
            if(x - 1 > -1 && y + 2 < 8) {
                if(grid[x - 1][y + 2] > 5 || grid[x - 1][y + 2] == -1) {
                    canGoX.push(x - 1);
                    canGoY.push(y + 2);
                }
            }
            if(x - 2 > -1 && y + 1 < 8) {
                if(grid[x - 2][y + 1] > 5 || grid[x - 2][y + 1] == -1) {
                    canGoX.push(x - 2);
                    canGoY.push(y + 1);
                }
            }
            if(x + 1 < 8 && y + 2 < 8) {
                if(grid[x + 1][y + 2] > 5 || grid[x + 1][y + 2] == -1) {
                    canGoX.push(x + 1);
                    canGoY.push(y + 2);
                }
            }
            if(x + 2 < 8 && y + 1 < 8) {
                if(grid[x + 2][y + 1] > 5 || grid[x + 2][y + 1] == -1) {
                    canGoX.push(x + 2);
                    canGoY.push(y + 1);
                }
            }
        }
        if(grid[x][y] == 4) {
            for(let i = 0 - x; i < 8 - x; i++) {
                for(let j = 0 - y; j < 8 - y; j++) {
                    if(grid[x + i][y + j] != undefined) {
                        // console.log("hello")
                        if(i == 0 || j == 0){
                            if(i == 0 && j == 0){} else {
                                if(grid[x + i][y + j] > 5 || grid[x + i][y + j] == -1) {
                                    canGoX.push(x + i);
                                    canGoY.push(y + j);
                                }
                            }
                        }
                    }
                }
            }
        }
        if(grid[x][y] == 5) {
            if(y > 0) {
                canGoX.push(x);
                canGoY.push(y - 1);
            }
        }








        if(grid[x][y] == 6) {
            for(let i = -1; i <= 1; i++) {
                for(let j = -1; j <= 1; j++) {
                    if(grid[x + i][y + j] != undefined) {
                        if(i == 0 && j == 0) {} else {
                            if(grid[x + i][y + j] < 6 || grid[x + i][y + j] == -1) {
                                canGoX.push(x + i);
                                canGoY.push(y + j);
                            }
                        }
                    }
                }
            }
        } if(grid[x][y] == 7) {
            for(let i = 0 - x; i < 8 - x; i++) {
                for(let j = 0 - y; j < 8 - y; j++) {
                    if(grid[x + i][y + j] != undefined) {
                        // console.log("hello")
                        if(i == 0 || j == 0 || i == j || i +j == 0){
                            if(i == 0 && j == 0){} else {
                                if(grid[x + i][y + j] < 6 || grid[x + i][y + j] == -1) {
                                    canGoX.push(x + i);
                                    canGoY.push(y + j);
                                }
                            }
                        }
                    }
                }
            }
        } if(grid[x][y] == 8) {
            for(let i = 0 - x; i < 8 - x; i++) {
                for(let j = 0 - y; j < 8 - y; j++) {
                    if(grid[x + i][y + j] != undefined) {
                        // console.log("hello")
                        if(i == j || i + j == 0){
                            if(i == 0 && j == 0){} else {
                                if(grid[x + i][y + j] < 6 || grid[x + i][y + j] == -1) {
                                    canGoX.push(x + i);
                                    canGoY.push(y + j);
                                }
                            }
                        }
                    }
                }
            }
        } if(grid[x][y] == 9) {
            if(x - 1 > -1 && y - 2 > -1) {
                if(grid[x - 1][y - 2] < 6 || grid[x - 1][y - 2] == -1) {
                    canGoX.push(x - 1);
                    canGoY.push(y - 2);
                }
            }
            if(x - 2 > -1 && y - 1 > -1) {
                if(grid[x - 2][y - 1] < 6 || grid[x - 2][y - 1] == -1) {
                    canGoX.push(x - 2);
                    canGoY.push(y - 1);
                }
            }
            if(x + 1 < 8 && y - 2 > -1) {
                if(grid[x + 1][y - 2] < 6 || grid[x + 1][y - 2] == -1) {
                    canGoX.push(x + 1);
                    canGoY.push(y - 2);
                }
            }
            if(x + 2 < 8 && y - 1 > -1) {
                if(grid[x + 2][y - 1] < 6 || grid[x + 2][y - 1] == -1) {
                    canGoX.push(x + 2);
                    canGoY.push(y - 1);
                }
            }
            if(x - 1 > -1 && y + 2 < 8) {
                if(grid[x - 1][y + 2] < 6 || grid[x - 1][y + 2] == -1) {
                    canGoX.push(x - 1);
                    canGoY.push(y + 2);
                }
            }
            if(x - 2 > -1 && y + 1 < 8) {
                if(grid[x - 2][y + 1] < 6 || grid[x - 2][y + 1] == -1) {
                    canGoX.push(x - 2);
                    canGoY.push(y + 1);
                }
            }
            if(x + 1 < 8 && y + 2 < 8) {
                if(grid[x + 1][y + 2] < 6 || grid[x + 1][y + 2] == -1) {
                    canGoX.push(x + 1);
                    canGoY.push(y + 2);
                }
            }
            if(x + 2 < 8 && y + 1 < 8) {
                if(grid[x + 2][y + 1] < 6 || grid[x + 2][y + 1] == -1) {
                    canGoX.push(x + 2);
                    canGoY.push(y + 1);
                }
            }
        }
        if(grid[x][y] == 10) {
            for(let i = 0 - x; i < 8 - x; i++) {
                for(let j = 0 - y; j < 8 - y; j++) {
                    if(grid[x + i][y + j] != undefined) {
                        // console.log("hello")
                        if(i == 0 || j == 0){
                            if(i == 0 && j == 0){} else {
                                if(grid[x + i][y + j] < 6 || grid[x + i][y + j] == -1) {
                                    canGoX.push(x + i);
                                    canGoY.push(y + j);
                                }
                            }
                        }
                    }
                }
            }
        }
        if(grid[x][y] == 11) {
            if(y < 7) {
                canGoX.push(x);
                canGoY.push(y + 1);
            }
        }
    }
}

function draw() {
    for(let x = 0; x < 8; x++) {
        for(let y = 0; y < 8; y++) {
            if((x + y)%2) {
                fillRect(startX + x * 100, startY + y * 100, 100, 100, "Tan");
            } else {
                fillRect(startX + x * 100, startY + y * 100, 100, 100, "Wheat");
            }

            if(selectedX == x && selectedY == y) {
                transparent(50);
                fillRect(startX + x * 100, startY + y * 100, 100, 100, "Red");
                transparent(100);
            }

            if(grid[x][y] >= 0) {
                drawImage(pieceType[grid[x][y]], startX + x * 100, startY + y * 100, 100, 100, 0);
            }
        }
    }

    for(let i = 0; i < canGoX.length; i++) {
        if(grid[canGoX[i]][canGoY[i]] > -1) {
            strokeArc(startX + canGoX[i] * 100 + 50, startY + canGoY[i] * 100 + 50, 20, 7, "DarkGrey");
        } else {
            fillArc(startX + canGoX[i] * 100 + 50, startY + canGoY[i] * 100 + 50, 10, "DarkGrey");
        }
    }

    updateShit();
}

function mousedown() {
    selectedX = Math.floor((mouseX - startX)/100);
    selectedY = Math.floor((mouseY - startY)/100);

    if(selectedX > 7 || selectedY > 7 || selectedX < 0 || selectedY < 0) {
        selectedX = -1;
        selectedY = -1;
    } else {
        if(grid[selectedX][selectedY] == -1) {
            selectedX = -1;
            selectedY = -1;
        } else {
            if(turn == 0 && grid[selectedX][selectedY] > 5) {
                selectedX = -1;
                selectedY = -1;
            } if(turn == 1 && grid[selectedX][selectedY] < 6) {
                selectedX = -1;
                selectedY = -1;
            }
        }
    }
}