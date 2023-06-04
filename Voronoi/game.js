let brPoints = 10, points = [], pointSize = 1;

class Point {
    constructor(position, color) {
        this.position = position;
        this.color = color;
    }
}

for(i = 0 ; i < brPoints; i++) {
    points[i] = new Point(new Vector2(randomInteger(0, windowSizeX), randomInteger(0, windowSizeY)), "rgb(" + randomInteger(0, 255) + ", " + randomInteger(0, 255) + ", " + randomInteger(0, 255) + ")");
}

function update() {

}

function draw() {
    for(x = 0 ; x < windowSizeX; x += pointSize) {
        for(y = 0; y < windowSizeY; y += pointSize) {
            minDist = 9999999999;
            minIndex = 9999999999;

            for(i = 0; i < brPoints; i++) {
                if(mouseX < windowSizeX/2) {
                    currDist = Math.abs(x - points[i].position.x) + Math.abs(y - points[i].position.y);
                } else {
                    currDist = Math.hypot(x - points[i].position.x, y - points[i].position.y);
                }

                if(currDist <= minDist) {
                    minDist = currDist;
                    minIndex = i;
                }
            }

            fillRect(new Vector2(x, y), new Vector2(pointSize, pointSize), points[minIndex].color);
        }
    }
}