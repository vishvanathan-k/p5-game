let initialY = 50
let initialX = 0
let paraDeployed = false
let vy = 0
let rectX = 0
function setup() {
    createCanvas(750, 750)
    rand = random(1)
    rectX = rand*750;
    rand = random(1);
    initialX = rand*750;
}

function draw() {
    background(0)
    if (!dead(initialX, initialY)) {
        let c = color(255, 255, 255)
        fill(c)
        rect(rectX, 700, 100, 50)
        ball(initialX, initialY)
        if (keyIsDown(LEFT_ARROW)) {
            initialX -= 1
        } else if (keyIsDown(RIGHT_ARROW)) {
            initialX += 1
        }
        if (paraDeployed) {
            parachute(initialX, initialY)
        }
        if (initialY + 75 == 750 && 400 >= initialX - 50 && initialX - 50 <= 500) {
            initialY += 0
        }
        else if (paraDeployed) {
            initialY += 0.49
        }
        else {
            initialY += 0.49 + vy
        }
        vy += 0.01;
    }
}

function keyPressed() {
    if (keyCode === 32) {
        paraDeployed = true
    }
}

function dead(x, y) {
    if (x+25 > 750 || x-25 < 0 || y-25 < 0 || y+25 > 750) return true
}
function ball(x, y) {
    ellipse(x, y, 50)
}
function parachute(x, y) {
    arc(x, y - 50, 100, -100, PI, PI + PI)
    line(x - 50, y - 50, x, y)
    line(x + 50, y - 50, x, y)
    //square(x-12,y+50,25)
}