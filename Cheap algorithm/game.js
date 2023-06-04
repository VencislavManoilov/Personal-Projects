let Items = [{name: 'hat', price: '10'}, {name: 'bike', price: '250'}, {name: 'mouse', price: '25'}, {name: 'console', price: '499'}, {name: 'house', price: '750000'}];

let text = '';
for(i=0; i<Items.length; i++) {
    text += Items[i].name + '-' + Items[i].price + `$;  `;
}

function update() {

}

function draw() {
    fillText(text, 100, 100, 25, 'Arial', 'black');
}