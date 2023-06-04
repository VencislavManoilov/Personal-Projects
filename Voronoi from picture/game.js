let points = [], brPoints = 2500, sizeX = 1000/3, sizeY = 1500/3;

for(let i = 0; i < brPoints; i++) {
    points[i] = {};
    points[i].position = new Vector2(randomInteger(0, sizeX), randomInteger(0, sizeY));
}

function update() {

}

function draw() {
    drawImage(box, new Vector2(0, 0), new Vector2(sizeX, sizeY), 0);

    for(let i = 0; i < brPoints; i++) {
        points[i].color = 'rgb(' + context.getImageData(points[i].position.x, points[i].position.y, 1, 1).data[0] + ', ' + context.getImageData(points[i].position.x, points[i].position.y, 1, 1).data[1] + ', ' + context.getImageData(points[i].position.x, points[i].position.y, 1, 1).data[2] + ')';
    }

    for(let x = 0; x < sizeX; x++) {
        for(let y = 0; y < sizeY; y++) {
            minDist = 99999999;
            minIndex = 99999999;

            for(let i = 0; i < brPoints; i++) {
                curDist = Math.hypot(x - points[i].position.x, y - points[i].position.y);

                if(curDist <= minDist) {
                    minDist = curDist;
                    minIndex = i;
                }
            }

            fillRect(new Vector2(x, y), new Vector2(1, 1), points[minIndex].color);
        }
    }
}