

let smallStars = [];
let bigStars = [];

let mercury, venus, earth, mars, jupiter, saturn;

let isPaused = false;
var currentText;
var angleDraw;

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
    venus = new Planet(30, 175, 0.4, 100, color('#de6840'), "Venus");
    // earth = new Planet(20, 230, 0.6, 190, color('green'));
    // mars = new Planet(30, 280, 1, 230, color(('red')));
    // jupiter = new Planet(50, 340, 0.3, 60, color('#7e79a3'));
    // saturn = new Planet(50, 450, 0.1, 120, color('gray'));


}


function draw() 
{

    background('black');
    // noStroke();
    // frameRate(40);

    fill('yellow');
    line(30, 40, 200, 200);

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

    
    // console.log(venus.x);
    // console.log( width/2 + venus.orbitRadius * cos(venus.angle))
    // line(
    //     width/2 + venus.orbitRadius * cos(venus.angle),
    //     height/2 + venus.orbitRadius * sin(venus.angle),
    //     width/2 + mercury.orbitRadius * cos(mercury.angle),
    //     height/2 + mercury.orbitRadius * sin(mercury.angle)
    // );

    if (isPaused) {
        fill('white');
        strokeWeight(3);
        console.log("mercury x " + mercury.x);
        console.log("mercury y " + mercury.y);
        console.log("venus x " + venus.x);
        console.log("venus y " + venus.y);



        line(mercury.x, mercury.y, venus.x, venus.y);
        console.log('display line');
    }
    


}

function keyPressed() {
    if (keyCode === ENTER) {
        isPaused = !isPaused;


        // let mvAngleDifference = Math.round(abs(mercury.angle - venus.angle));
        // console.log(mvAngleDifference);

        // if (0 <= mvAngleDifference && mvAngleDifference <= 3) {
        //     // textStyle(BOLD);
        //     fill('white');
        //     textSize(24);
        //     currentText="This is a conjunction between Venus and Mercury";
        //     // text(currentText, width/2-200, height-600);
        //     console.log('conjunction');
        // }

        // else if(59 <= mvAngleDifference && mvAngleDifference <= 65) {
        //     // textStyle(BOLD);
        //     fill('white');
        //     textSize(24);
        //     currentText="This is a sextile between Venus and Mercury";
        //     // text("This is a sextile", width/2, 600);

        //     stroke('white');
        //     strokeWeight(4);
        //     angleDraw = line(
        //         width/2 + venus.orbitRadius * cos(venus.angle),
        //         height/2 + venus.orbitRadius * sin(venus.angle),
        //         width/2 + mercury.orbitRadius * cos(mercury.angle),
        //         height/2 + mercury.orbitRadius * sin(mercury.angle)
        //     );
        //     console.log('drew line');

        //     console.log('sextile');
        // }

        // else if (88 <= mvAngleDifference && mvAngleDifference <= 92) {
        //     // textStyle(BOLD);
        //     fill('white');
        //     textSize(24);
        //     currentText = "This is a square between Venus and Mercury";
        //     // text(, width/2, 600);
        //     console.log('square');
        // }

        // else if (mvAngleDifference === 120) {
        //     // textStyle(BOLD);
        //     fill('white');
        //     textSize(24);
        //     currentText="This is a trine between Venus and Mercury"
        //     // text("This is a trine", width/2, 600);
        //     console.log('trine');
        // }

        // else if (mvAngleDifference === 180) {
        //     // textStyle(BOLD);
        //     fill('white');
        //     textSize(24);
        //     currentText="This is a opposition between Venus and Mercury";
        //     // text("This is a opposition", width/2, 600);
        //     console.log('opposition');
        // }
        // else {
        //     // textStyle(BOLD);
        //     fill('yellow');
        //     textSize(24);
        //     currentText="No significant aspect";
        //     text(currentText, width/2, 600);
        //     console.log('display no significant aspect');
        // }
    


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
        this.x;
        this.y;

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
        
        this.x = width/2 + this.orbitRadius * cos(this.angle);
        this.y = height/2 + this.orbitRadius * sin(this.angle);



        // draw orbit
        noFill();
        strokeWeight(2);
        stroke(150);
        ellipse(width/2, height/2, this.orbitRadius * 2);


        // draw planet
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.radius * 2);

    //       // Draw the black outline
    // for (let offsetX = -2; offsetX <= 2; offsetX++) {
    //     for (let offsetY = -2; offsetY <= 2; offsetY++) {
    //         fill(0); // Black color for the outline
    //         textSize(12);
    //         text(this.label, x + offsetX, y + offsetY);
    //     }
    // }

          // Display the label for Mercury
        if (this.label === "Mercury") {
            noStroke();
            fill('white');
            textSize(15);
            text(this.label, this.x - 33, this.y - 25);
        }

        // Display the label for Venus
        else if (this.label === "Venus") {
            noStroke();
            fill('white');
            textSize(15);
            text(this.label, this.x - 20, this.y - 33);
        }






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















