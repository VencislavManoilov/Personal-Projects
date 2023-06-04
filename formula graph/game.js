let nums = [], maxNumbers = 250, interval = 1, dist = 32, startY = windowSizeY - 100, multiplier = 1, rate = 0, pop = 0.01, cameraX = 0, cameraY = 0, cameraSpeed = 15;

nums[0] = 27;

for(x = 0; x < maxNumbers; x += interval) {
    // if(x < maxNumbers - 1) {
    //     if(nums[x]%2*interval == 0) {
    //         nums[x + 1] = nums[x]/2;
    //     } else {
    //         nums[x + 1] = nums[x]*3 + 1;
    //     }
    // }

    // if(nums[x] == 1) {
    //     maxNumbers = x + 1;
    // }
    // nums[x] = 6*x*x - 13*x + 7;
    nums[x] = x*x - x;
}

function update() {
    if(MoveUp()) {
        cameraY -= cameraSpeed;
    } if(MoveDown()) {
        cameraY += cameraSpeed;
    } if(MoveLeft()) {
        cameraX -= cameraSpeed;
    } if(MoveRight()) {
        cameraX += cameraSpeed;
    }
}

function draw() {
    for(x = 0; x < maxNumbers; x++) {
        fillText(x, x*dist + 100 - cameraX, startY + 32 - cameraY, 15, 'Arial', 'black');

        for(y = 0; y < startY/dist; y++) {
            transparent(25);
            strokeRect(x*dist + 100 - cameraX, y*dist - 1.5 - cameraY, dist, dist, 1, 'black');
            transparent(100);
        }

    }

    for(i = -maxNumbers; i < maxNumbers; i += interval) {
        fillText(nums[i], i*dist + 105 - cameraX, startY - nums[i]*multiplier + 8.5 - cameraY, 15, 'Arial', 'black');

        fillArc(i*dist + 97.5 - cameraX, startY - nums[i]*multiplier + 4.5 - cameraY, 3, 'black');

        if(i < maxNumbers-1) {
            drawLine(i*dist + 98.5 - cameraX, startY + 8.5 - nums[i]*multiplier - cameraY, (i + 1)*dist + 98.5 - cameraX, startY + 8.5 - nums[i + 1]*multiplier - cameraY);
        }
    }

    fillText('x:', 75 - cameraX, startY + 26 - cameraY, 25, 'Arial', 'black');

    UpdateParticles();
}

function keyup(key) {
    if(key == 32) {
        cameraX = 0;
        cameraY = 0;
    }
}