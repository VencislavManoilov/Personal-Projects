let pixelsOfpicture = [], trianglesX = [], trianglesY = [], percent = 0, createdPicture = [], corectPixels, lastPercent = 0;

changeBg("cyan");

function update() {
    pixelsOfpicture = context.getImageData(0, 0, 200, 200).data;
}
error=45455454545
function draw() {
    drawImage(box, new Vector2(0, 0), new Vector2(200, 200));

    // for(let i = 0; i < pixelsOfpicture.length; i+=4) {
    //     context.fillStyle = "rgb(" + pixelsOfpicture[i] + ", " + pixelsOfpicture[i + 1] + ", " + pixelsOfpicture[i + 2] + ")";
    //     context.fillRect((i/4)%200 + 400, Math.floor((i/4)/200), 1, 1);
    // }
    for(let k = 0; k < 2; k++) {
        for(let i = 0; i < trianglesX.length; i++) {
            for(let j = 0; j < trianglesX[i].length; j++) {
                context.fillStyle = trianglesX[i][j + 3];
                context.beginPath();
                context.moveTo(trianglesX[i][j] + 400, trianglesY[i][j]);
                context.lineTo(trianglesX[i][j + 1] + 400, trianglesY[i][j + 1]);
                context.lineTo(trianglesX[i][j + 2] + 400, trianglesY[i][j + 2]);
                context.fill();
            }
        }



        createdPicture = context.getImageData(400, 0, 200, 200).data;
        corectPixels = 0;
        lastPercent = error;

        error=0
        for(let i = 0; i < pixelsOfpicture.length; i+=4) {
            error+=((pixelsOfpicture[i]+pixelsOfpicture[i+1]+pixelsOfpicture[i+2])/3-(createdPicture[i]+createdPicture[i+1]+createdPicture[i+2])/3)**2
            // if(pixelsOfpicture[i] == createdPicture[i] && pixelsOfpicture[i + 1] == createdPicture[i + 1] && pixelsOfpicture[i + 2] == createdPicture[i + 2]) {
            //     corectPixels++;
            // }
        }

        // console.log(error)
        percent = error;


        if(lastPercent < error) {
            trianglesX.splice(trianglesX.length - 1, 1);
            trianglesY.splice(trianglesY.length - 1, 1);
        } else {
            a = randomInteger(0, 100);

            if(a < 50) {
                color = "black";
            } else {
                color = "white";
            }
            trianglesX.push([randomInteger(0, 200), randomInteger(0, 200), randomInteger(0, 200), color]);
            trianglesY.push([randomInteger(0, 200), randomInteger(0, 200), randomInteger(0, 200)]);
        }
    }

    fillText("Percent: " + error, new Vector2(100, 300), 25, "Arial", "black");
}