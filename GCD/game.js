let findNOK = (8, 4), text = '';

function update() {
    text = 'NOK(';
    
    for(i=0; i<findNOK.length; i++) {
        if(i == 0) {
            text += findNOK[i];
        } else {
            text += '; ' + findNOK[i];
        }
    }

    text += ') = ' + gcd(findNOK);
}

function draw() {
    fillText(text, 100, 100, 25, 'Arial', 'black');
    fillText(context.gcd(8, 12), 100, 200, 25, 'Arial', 'black');
}

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

// Example
console.log(gcd(10, 15));