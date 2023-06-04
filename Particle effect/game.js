// level-2.5 engine V2 
let time = 249;

function update() {
    // Enable this code for cool explosion:
    time++;
    if(time%250 == 0) {
        ParticleEffect(window.innerWidth/2, window.innerHeight/2, 10, 10, 25, -25, -25, 25, 25, 100, 0, true, "red");
    }
}

function draw() {
    // This make water effect, but for computer is really expensive after 5-10 seconds
    ParticleEffect(mouseX, mouseY, 10, 10, 25, -2.5, 0, 2.5, 10, 25, 2, true, 'cyan');

    // Don't delete this!!! (It's for particles)
    UpdateParticles();
}