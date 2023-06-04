let findNOK = [8, 4], text = '';

function update() {
    text = 'NOK(';
    
    for(i=0; i<findNOK.length; i++) {
        if(i == 0) {
            text += findNOK[i];
        } else {
            text += '; ' + findNOK[i];
        }
    }

    text += ') = ' + Math.GCD(findNOK);
}

function draw() {
    fillText(text, 100, 100, 25, 'Arial', 'black');
}

Math.GCD = function(numbers) {
    for (var i = 1 ; i < numbers.length ; i++){
        if (numbers[i] || numbers[i] === 0) {
            numbers[0] = twogcd(numbers[0], numbers[i]);
        }
    }
    return numbers[0];

    function twogcd(first, second) {
        if (first < 0) {
            first = -first
        }
        if (second < 0) {
            second = -second
        }
        if (second > first) {
            let temp = first;
            first = second;
            second = temp;
        }
        while (true) {
            first %= second;

            if (first == 0) {
                return second
            };
            second %= first;

            if (second == 0) {
                return first
            };
        }
    }
}

Math.LCM = function(first,second) {
    return first * (second / this.GCD(first, second));
}