let particles = [];
let smallStars = [];
let angleRotate = 3;
let bigStars = [];
let sun, planet1;




function setup() {
    angleMode(DEGREES);
    createCanvas(600, 600);

    for (let i = 0; i < 90; i++) {
        smallStars.push(new SmallStar());

  }

    for (let j = 0; j < 30; j++) {
        bigStars.push(new BigStar());
    }

    console.log("pushed big star");

    sun = new Planet(100, createVector(0,0), createVector(0,0), 'yellow');

    let r = random(sun.radius, ((windowWidth/2), (windowHeight/2)));
    let theta = random(TWO_PI);
    let planetPos = createVector(r*cos(theta), r*sin(theta));

    planet1 = new Planet(25, planetPos, createVector(4,2), 'red');


    


}


function draw() 
{

    background('black');
    noStroke();
    frameRate(40);

    orbit1 = new Orbit(width/2, height/2, 160);
    orbit1.display();

    orbit2 = new Orbit(width/2, height/2, 200);
    orbit2.display();

    orbit3 = new Orbit(width/2, height/2, 300);
    orbit3.display();

    orbit4 = new Orbit(width/2, height/2, 450);
    orbit4.display();

    for (let i = 0; i < smallStars.length; i++) {
        smallStars[i].display();
    }

     for (let j = 0; j < bigStars.length; j++) {
        bigStars[j].display();
    } 
      // console.log("display big star")

    push();
    translate(width/2, height/2);

    sun.display();
    planet1.display();
    planet1.updatePos();
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
}