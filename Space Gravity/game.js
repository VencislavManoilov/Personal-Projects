let planets = [], brStars = 99, stars = [];

class Star {
	constructor(position, size, angle) {
		this.position = position;
		this.size = size;
		this.angle = angle;
	}

	draw() {
		drawImage(star, this.position, this.size, this.angle);
	}
}

class Planet {
	constructor(position, size, mass) {
		this.speedX = 0;
		this.speedY = 0;
		this.accelX = 0;
		this.accelY = 0;
		this.force = 0;
		this.forceX = 0;
		this.forceY = 0;
		this.position = position;
		this.size = size;
		this.mass = mass;
		this.index = planets.length;
	}

	draw() {
		drawImage(planet, this.position, this.size);
	}

	update() {
		this.force = 0;
		this.forceX = 0;
		this.forceY = 0;

		for(let i = 0; i < planets.length; i++) {
			if(i != this.index) {
				let dist = Math.hypot(planets[i].position.x - this.position.x, planets[i].position.y - this.position.y);
				this.force += 3 * ((this.mass * planets[i].mass) / (dist ** 2 + 4000000));

				let angleBetween = Math.atan2(planets[i].position.y - this.position.y, planets[i].position.x - this.position.x);
				this.forceX += this.force * Math.cos(angleBetween);
				this.forceY += this.force * Math.sin(angleBetween);
			}
		}

		this.accelX = this.forceX / this.mass;
		this.accelY = this.forceY / this.mass;

		this.speedX += this.accelX;
		this.speedY += this.accelY;

		this.position.x += this.speedX;
		this.position.y += this.speedY;
	}
}

for(let j = 0; j < brStars; j++) {
	let size = randomInteger(25, 75);
	stars.push(new Star(new Vector2(randomInteger(0, windowSizeX), randomInteger(0, windowSizeY)), new Vector2(size, size), randomInteger(0, 360)));
}

changeBg("black");

function update() {
	for(let i = 0; i < planets.length; i++) {
		planets[i].update();
	}
}

function draw() {
	for(let i = 0; i < planets.length; i++) {
		planets[i].draw();
	}

	for(let j = 0; j < brStars; j++) {
		stars[j].draw();
	}
}

function mousedown() {
	planets.push(new Planet(new Vector2(mouseX - 25, mouseY - 25), new Vector2(50, 50), 1000));
}

function keydown(key) {
	if(key == 32) {
		planets.push(new Planet(new Vector2(mouseX - 25, mouseY - 25), new Vector2(50, 50), 100000));
	}
}