let brCubes = 9, cubes = [];

class ray{
    constructor(x,y,angle){
        this.x = x;
        this.y = y;
        this.angle = angle;
    }

    drawSelf(){
        fillRect(new Vector2(this.x, this.y), new Vector2(10, 10), "white");
    }

    updateSelf(){
        let CanUpdate=1
        for(let i = 0; i < brCubes; i++){
            if(areColliding(new Vector2(this.x, this.y), new Vector2(10, 10), cubes[i].position, cubes[i].size)){
                CanUpdate=0;
            }
        }
        if(CanUpdate){
            this.x += 5*Math.cos(this.angle);
            this.y += 5*Math.sin(this.angle);
        }
    }
}

rays = [];
for(let i = 0; i < 180; i++){
    rays.push(new ray(200,200,i/180*Math.PI*2));
}

class Raycast {
    constructor(position, angle, length) {
        this.position = position;
        this.angle = angle;
        this.length = length;
    }
}

class Cube {
    constructor(position, size, color) {
        this.position = position;
        this.size = size;
        this.color = color;
    }
}

for(i = 0; i < brCubes; i++) {
    let size = randomInteger(25, 75);
    cubes[i] = new Cube(new Vector2(randomInteger(0, windowSizeX - size), randomInteger(0, windowSizeY - size)), new Vector2(size, size), "red");
}

changeBg("black");

function update() {
    for(i = 0; i < brCubes; i++) {
        for(j = 0; j < brCubes; j++) {
            if(i != j && areColliding(cubes[i].position, cubes[i].size,  cubes[j].position, cubes[j].size)) {
                cubes[i].position = new Vector2(randomInteger(0, windowSizeX - cubes[i].size.x), randomInteger(0, windowSizeY - cubes[i].size.y));
            }
        }
    }
}

function draw() {
    for(let i = 0; i < rays.length; i++){
        for(let j=0;j<50;j++){
            rays[i].updateSelf();
            rays[i].drawSelf();
        }

        rays[i].x = mouseX;
        rays[i].y = mouseY;
    }

    for(i = 0; i < brCubes; i++) {
        fillRect(cubes[i].position, cubes[i].size, cubes[i].color);
    }
}