let particles = [];
let smallStars = [];
let angleRotate = 3;
let bigStars = [];
let sun, planet1;
let planets = [];
// let orbit1, orbit2, orbit3, orbit4, orbit5, orbit6;
let orbits = [];
let G = 50;




function setup() {
    angleMode(DEGREES);
    createCanvas(600, 600);

    randomSeed(42);

    orbits.push(new Orbit(width / 2, height / 2, 160));
    orbits.push(new Orbit(width / 2, height / 2, 230));
    orbits.push(new Orbit(width / 2, height / 2, 300));
    orbits.push(new Orbit(width/2, height/2, 370));
    orbits.push(new Orbit(width / 2, height / 2, 450));
    orbits.push(new Orbit(width/2, height/2, 540));

    for (let i = 0; i < 90; i++) {
        smallStars.push(new SmallStar());

  }

    for (let j = 0; j < 30; j++) {
        bigStars.push(new BigStar());
    }

    console.log("pushed big star");

    sun = new Planet(100, createVector(0,0), createVector(0,0), 'yellow');

    let r = random(sun.radius, dist(0, 0, width / 2, height / 2));
    let theta = random(TWO_PI);
    let planetPos = createVector(r*cos(theta), r*sin(theta));

    //planet velocityß
    // let planetVel = planetPos.copy();
    // planetVel.rotate(HALF_PI);
    // planetVel.setMag(sqrt(G*sun.mass/planetPos.mag()));

    let planetVel = createVector(-planetPos.y, planetPos.x);
    planetVel.setMag(sqrt(G * sun.mass / r));

    planet1 = new Planet(25, planetPos, planetVel, 'red');


    angleMode(DEGREES);
    createCanvas(600, 600);
    randomSeed(22);

    orbits.push(new Orbit(width / 2, height / 2, 160));
    orbits.push(new Orbit(width / 2, height / 2, 230));
    orbits.push(new Orbit(width / 2, height / 2, 300));
    orbits.push(new Orbit(width / 2, height / 2, 370));
    orbits.push(new Orbit(width / 2, height / 2, 450));
    orbits.push(new Orbit(width / 2, height / 2, 540));

    for (let i = 0; i < 3; i++) {
        // Create planets with random sizes and positions
        let mass = random(10, 50);
        let r = random(mass * 2, dist(0, 0, width / 2, height / 2) - 50);
        let theta = random(TWO_PI);
        let planetPos = createVector(r * cos(theta), r * sin(theta));

        // Calculate the initial velocity for the planet
        let planetVel = createVector(-planetPos.y, planetPos.x);
        planetVel.setMag(sqrt(G * mass / r));

        // Create the planet with the calculated position, velocity, mass, and color
        planets.push(new Planet(mass, planetPos, planetVel, color(random(255), random(255), random(255))));
    }


    


}


function draw() 
{

    background('black');
    noStroke();
    frameRate(40);

    for (let i = 0; i < orbits.length; i++) {
        orbits[i].display();
    }
    
    

    for (let i = 0; i < smallStars.length; i++) {
        smallStars[i].display();
    }

     for (let j = 0; j < bigStars.length; j++) {
        bigStars[j].display();
    } 
      // console.log("display big star")

    push();
    translate(width/2, height/2);
    sun.attract(planet1);
    planet1.updatePos();

    planet1.display();
    // planet1.applyForce(sun);
    sun.display();
    
   
    pop();

}


class SmallStar {
    constructor() {
        this.x = random(windowWidth);
        this.y = random(windowHeight);
        this.size = random(1,3);
        this.color = "white";
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
}

class BigStar {
    constructor() {
        this.x = random(windowWidth);
        this.y = random(windowHeight);
        this.size = random(7,9);
        this.color = "white";
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
}

class Orbit {
    constructor(x, y, diameter) {
        this.diameter = diameter;
        this.x = x;
        this.y = y;
    }

    display() {

        stroke('white');
  // Disable filling
        noFill();
  // Set stroke weight (optional)
        strokeWeight(1);
        circle(this.x, this.y, this.diameter);

    }
}


class Planet {
    constructor(mass, pos, vel, col) {
        this.mass = mass;
        this.pos = pos;
        this.vel = vel;
        this.color = col;
        this.radius = this.mass;
    }


    display() {
        noStroke();
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius)

    }


    // update position of planet
    updatePos() {

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;

    }


    // acceleration affecting velocity
    applyForce(f) {
        // if force = ma => a = f/m

        this.vel.x += f.x / this.mass;
        this.vel.y += f.y / this.mass;

    }

    //newtons law of gravitational pull
    attract(child) {

        //distance between sun and planet
        let r = dist(this.pos.x, this.pos.y, child.pos.x, 
            child.pos.y);
        // creating vector that points from child to sun
        let f = this.pos.copy().sub(child.pos);
        // set magnitutde of force
        f.setMag((G * this.mass * child.mass) / (r*r));
        child.applyForce(f);

    }
}