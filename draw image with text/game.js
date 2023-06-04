let getColors = [],
    lettersForScale = [".", ",", "-", "~", ":", ";", "=", "!", "*", "#", "$", "@"];
;

changeBg("black");

function update() {
    getColors = context.getImageData(0, 0, 100, 100).data;
}

function draw() {
    drawImage(paddle, 0, 0, 100, 100, 0);

    for(let i = 0; i < getColors.length; i += 4) {
        getLetter = lettersForScale[Math.floor((getColors[i]/255) * 13)];
        fillText(getLetter, (i/4)%100 * 7 + 300, Math.floor((i/4)/100) * 7 + 50, 7, 'Arial', 'white');
    }
}