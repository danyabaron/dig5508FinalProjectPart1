

let smallStars = [];
let bigStars = [];

let mercury, venus, earth, mars, jupiter, saturn;

let isPaused = false;
var currentText;

function setup() {
    angleMode(DEGREES);
    createCanvas(1200, 1200);

    

    for (let i = 0; i < 90; i++) {
        smallStars.push(new SmallStar());

  }

    for (let j = 0; j < 30; j++) {
        bigStars.push(new BigStar());
    }

    //2

    mercury = new Planet(20, 120, 0.8, 30, color('#626f96'), "Mercury");
    venus = new Planet(30, 175, 0.4, 100, color('#de6840'));
    // earth = new Planet(20, 230, 0.6, 190, color('green'));
    // mars = new Planet(30, 280, 1, 230, color(('red')));
    // jupiter = new Planet(50, 340, 0.3, 60, color('#7e79a3'));
    // saturn = new Planet(50, 450, 0.1, 120, color('gray'));


}


function draw() 
{

    background('black');
    noStroke();
    // frameRate(40);

    fill("white")
    textSize(24)
    text(currentText, width/2-100, height-1100);

    fill('yellow');
    textSize(18);
    text('Press Enter to learn about Planetary Alignments',width/2-550, height-1100 )


    for (let i = 0; i < smallStars.length; i++) {
        smallStars[i].display();
    }

     for (let j = 0; j < bigStars.length; j++) {
        bigStars[j].display();
    } 

    fill('yellow');
    ellipse(width/2, height/2, 150)

    if(!isPaused) {
        mercury.update();
        venus.update();
        // earth.update();
        // mars.update();
        // jupiter.update();
        // saturn.update();

    }

    mercury.display();
    venus.display();
    // earth.display();
    // mars.display();
    // jupiter.display();
    // saturn.display();

    // mercury.update();
    // mercury.display();

    // venus.update();
    // venus.display();

    // earth.update();
    // earth.display();

    // mars.update();
    // mars.display();

    // jupiter.update();
    // jupiter.display();

    // saturn.update();
    // saturn.display();


    //notes for danya
    // make a class that takes in Planet and 
    //tracks its position through a value or method
    //have user pause the animation and after it is paused
    // check to see if planets are in certain positions
    // unsure how i'm going to calculate these positions
    // maybe w frame count?


}

function keyPressed() {
    if (keyCode === ENTER) {
        isPaused = !isPaused;


        let mvAngleDifference = Math.round(abs(mercury.angle - venus.angle));
        console.log(mvAngleDifference);

        if (0 <= mvAngleDifference && mvAngleDifference <= 3) {
            textStyle(BOLD);
            fill('white');
            textSize(24);
            currentText="This is a conjunction between Venus and Mercury";
            // text(currentText, width/2-200, height-600);
            console.log('conjunction');
        }

        else if(59 <= mvAngleDifference && mvAngleDifference <= 65) {
            textStyle(BOLD);
            fill('white');
            textSize(24);
            currentText="This is a sextile between Venus and Mercury";
            // text("This is a sextile", width/2, 600);
            console.log('sextile');
        }

        else if (88 <= mvAngleDifference && mvAngleDifference <= 92) {
            textStyle(BOLD);
            fill('white');
            textSize(24);
            currentText = "This is a square between Venus and Mercury";
            // text(, width/2, 600);
            console.log('square');
        }

        else if (mvAngleDifference === 120) {
            textStyle(BOLD);
            fill('white');
            textSize(24);
            currentText="This is a trine between Venus and Mercury"
            // text("This is a trine", width/2, 600);
            console.log('trine');
        }

        else if (mvAngleDifference === 180) {
            textStyle(BOLD);
            fill('white');
            textSize(24);
            currentText="This is a opposition between Venus and Mercury";
            // text("This is a opposition", width/2, 600);
            console.log('opposition');
        }
        else {
            textStyle(BOLD);
            fill('yellow');
            textSize(24);
            currentText="No significant aspect";
            text(currentText, width/2, 600);
            console.log('display no significant aspect');
        }
    


    }
}


class Planet {
    constructor(radius, orbitRadius, orbitSpeed, angle, color, label) {
        this.radius = radius;
        this.orbitRadius = orbitRadius;
        this.angle = angle;
        this.orbitSpeed = orbitSpeed;
        this.color = color;
        this.label = label;

    }


    // update planet position
    update() {
        this.angle += this.orbitSpeed;
        
        // console.log(this.angle += this.orbitSpeed);

         // Reset angle when it reaches or exceeds 360 degrees
         if (this.angle >= 360) {
            this.angle = 0;
        }

        fill("white");
        textSize(24);



        // console.log(this.angle);

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
        fill('white')
        textSize(12);
        text(x+20, y+20, this.label);
        console.log('display label');






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















