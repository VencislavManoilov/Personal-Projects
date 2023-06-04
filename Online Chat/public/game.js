let people = [], myid = 0;
let colors = ["red", "green", "yellow", "hotpink", "orange", "brown", "cyan"];

socket.on("people", (p) => {
    people = p;
});

socket.on("ping", (id) => {
    myid = id;
});


function update() {
    for(let i = 0; i < people.length; i++) {
        if(people[i].id == myid && people[i].color == "blue") {
            people[i].color = colors[randomInteger(0, colors.length - 1)];
        }
    }
}

function draw() {
    for(let i = 0; i < people.length; i++) {
        fillArc(30, 30 + i * 55, 25, people[i].color);
    }
}