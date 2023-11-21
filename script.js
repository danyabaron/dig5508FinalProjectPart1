

let smallStars = [];
let bigStars = [];

let mercury, venus, earth, mars, jupiter, saturn;

function setup() {
    angleMode(DEGREES);
    createCanvas(600, 600);

    


    for (let i = 0; i < 90; i++) {
        smallStars.push(new SmallStar());

    }

    for (let j = 0; j < 30; j++) {
        bigStars.push(new BigStar());
    }

    mercury = new Planet(20, 120, 2, 30, color('#626f96'));
    venus = new Planet(30, 175, 0.4, 100, color('#de6840'));

}

function draw() {

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















