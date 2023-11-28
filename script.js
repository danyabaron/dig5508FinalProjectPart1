

let smallStars = [];
let bigStars = [];

let mercury, venus, earth, mars, jupiter, saturn;

let isPaused = false;

function setup() {
    angleMode(DEGREES);
    createCanvas(1200, 1200);

    

    for (let i = 0; i < 90; i++) {
        smallStars.push(new SmallStar());

  }

    for (let j = 0; j < 30; j++) {
        bigStars.push(new BigStar());
    }

    mercury = new Planet(20, 120, 2, 30, color('#626f96'));
    venus = new Planet(30, 175, 0.4, 100, color('#de6840'));
    earth = new Planet(20, 230, 0.6, 190, color('green'));
    mars = new Planet(30, 280, 1, 230, color(('red')));
    jupiter = new Planet(50, 340, 0.3, 60, color('#7e79a3'));
    saturn = new Planet(50, 450, 0.1, 120, color('gray'));


}


function draw() 
{

    background('black');
    noStroke();
    // frameRate(40);


    for (let i = 0; i < smallStars.length; i++) {
        smallStars[i].display();
    }

     for (let j = 0; j < bigStars.length; j++) {
        bigStars[j].display();
    } 

    fill('yellow');
    ellipse(width/2, height/2, 150)

    mercury.update();
    mercury.display();

    venus.update();
    venus.display();

    earth.update();
    earth.display();

    mars.update();
    mars.display();

    jupiter.update();
    jupiter.display();

    saturn.update();
    saturn.display();


    //notes for danya
    // make a class that takes in Planet and 
    //tracks its position through a value or method
    //have user pause the animation and after it is paused
    // check to see if planets are in certain positions
    // unsure how i'm going to calculate these positions
    // maybe w frame count?


}


class Planet {
    constructor(radius, orbitRadius, orbitSpeed, startingPos, color) {
        this.radius = radius;
        this.orbitRadius = orbitRadius;
        this.angle = startingPos;
        this.orbitSpeed = orbitSpeed;
        this.color = color;

    }


    // update planet position
    update() {
        this.angle += this.orbitSpeed;

    }

    display() {
        
        let x = width/2 + this.orbitRadius * cos(this.angle);
        let y = height/2 + this.orbitRadius * sin(this.angle);



        // draw orbit
        noFill();
        stroke(150);
        ellipse(width/2, height/2, this.orbitRadius * 2);


        // draw planet
        fill(this.color);
        noStroke();
        ellipse(x, y, this.radius * 2);




    }

}










class SmallStar {
    constructor() {
        this.x = random(width);
        this.y = random(height);
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
        this.x = random(width);
        this.y = random(height);
        this.size = random(7,9);
        this.color = "white";
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
}















