

let smallStars = [];
let bigStars = [];

// let mercury, venus, earth, mars, jupiter, saturn;
let planets = [];

let isPaused = false;
var currentText;
let alignment;
const CONJUNCTION = 0;
const SEXTILE = 1;
const SQUARE = 2;
const TRINE = 3;
const OPPOSITION = 4;
const NONE = 5;


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

    planets.push(new Planet(20, 120, 0.8, 30, color('#626f96'), "Mercury"));
    planets.push(new Planet(30, 175, 0.4, 100, color('#de6840'), "Venus"));
    // earth = new Planet(20, 230, 0.6, 190, color('green'));
    // planets.push(new Planet(30, 240, 1, 220, color('red'), "Mars"));
    // planets.push(new Planet(50, 340, 0.3, 60, color('#7e79a3'), "Jupiter"));
    // planets.push(new Planet(50, 450, 0.1, 120, color('gray'), "Saturn"));
   
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
    text('Press Enter to learn about Planetary Alignments',width/2-550, height-1100);

    fill('yellow');
    textSize(18);
    text('When the planets make an angle, hover over it with your mouse to learn more',width/2-550, height-1070 )


    for (let i = 0; i < smallStars.length; i++) {
        smallStars[i].display();
    }

     for (let j = 0; j < bigStars.length; j++) {
        bigStars[j].display();
    } 

    fill('yellow');
    ellipse(width/2, height/2, 150)

    if (!isPaused) {
        for (let i = 0; i < planets.length; i++) {
            planets[i].update();
        }
    }

    for (let i = 0; i < planets.length; i++) {
        planets[i].display();
    }

    for (let i = 0; i < planets.length - 1; i++) {
        for (let j = i + 1; j < planets.length; j++) {

            // planets[i].drawLine = false;

            planets[i].drawLineTo(planets[j]); // Draw lines between planets

            if (alignment == CONJUNCTION) {

                if (mouseX >= min(planets[i].x, planets[j].x) && mouseX <= max(planets[i].x, planets[j].x) 
                && mouseY >= min(planets[i].y, planets[j].y) && mouseY <= max(planets[i].y, planets[j].y)) {
                    
                    // strokeWeight(6);
                    // console.log("mouse x: " + mouseX);
                    // console.log("mouse y: " + mouseY);
                    // console.log("first planet x: " + planets[i].x);
                    // console.log("first planet y: " + planets[i].y);
                    // console.log("second planet x: " + planets[j].x);
                    // console.log("second planet y: " + planets[j].y);

                    currentText = `Conjunction between ${planets[i].label} and ${planets[j].label}`;

                    console.log('changed current text');
                  }
                  else {
                    currentText ="";
                    // console.log('mouse not over line');
                  }

            }

            else if (alignment == SEXTILE) {

                if (mouseX >= min(planets[i].x, planets[j].x) && mouseX <= max(planets[i].x, planets[j].x) 
                && mouseY >= min(planets[i].y, planets[j].y) && mouseY <= max(planets[i].y, planets[j].y)) {
                    
                    // console.log("mouse x: " + mouseX);
                    // console.log("mouse y: " + mouseY);
                    // console.log("first planet x: " + planets[i].x);
                    // console.log("first planet y: " + planets[i].y);
                    // console.log("second planet x: " + planets[j].x);
                    // console.log("second planet y: " + planets[j].y);

                    currentText = `This is a sextile between ${planets[i].label} and ${planets[j].label}`;

                    console.log('changed current text');
                  }
                  else {
                    currentText ="";
                    // console.log('mouse not over line');
                  }

            }

            else if (alignment == SQUARE) {

                if (mouseX >= min(planets[i].x, planets[j].x) && mouseX <= max(planets[i].x, planets[j].x) 
                && mouseY >= min(planets[i].y, planets[j].y) && mouseY <= max(planets[i].y, planets[j].y)) {
                    
                    // console.log("mouse x: " + mouseX);
                    // console.log("mouse y: " + mouseY);
                    // console.log("first planet x: " + planets[i].x);
                    // console.log("first planet y: " + planets[i].y);
                    // console.log("second planet x: " + planets[j].x);
                    // console.log("second planet y: " + planets[j].y);

                    currentText = `This is a square between ${planets[i].label} and ${planets[j].label}`;

                    console.log('changed current text');
                  }

                  else {
                    currentText ="";
                    // console.log('mouse not over line');
                  }

            }

            else if (alignment == TRINE) {

                if (mouseX >= min(planets[i].x, planets[j].x) && mouseX <= max(planets[i].x, planets[j].x) 
                && mouseY >= min(planets[i].y, planets[j].y) && mouseY <= max(planets[i].y, planets[j].y)) {
                    
                    // console.log("mouse x: " + mouseX);
                    // console.log("mouse y: " + mouseY);
                    // console.log("first planet x: " + planets[i].x);
                    // console.log("first planet y: " + planets[i].y);
                    // console.log("second planet x: " + planets[j].x);
                    // console.log("second planet y: " + planets[j].y);

                    currentText = `This is a trine between ${planets[i].label} and ${planets[j].label}`;

                    console.log('changed current text');
                  }
                  else {
                    currentText ="";
                    // console.log('mouse not over line');
                  }

            }


            else if (alignment == OPPOSITION) {

                if (mouseX >= min(planets[i].x, planets[j].x) && mouseX <= max(planets[i].x, planets[j].x) 
                && mouseY >= min(planets[i].y, planets[j].y) && mouseY <= max(planets[i].y, planets[j].y)) {
                    
                    // console.log("mouse x: " + mouseX);
                    // console.log("mouse y: " + mouseY);
                    // console.log("first planet x: " + planets[i].x);
                    // console.log("first planet y: " + planets[i].y);
                    // console.log("second planet x: " + planets[j].x);
                    // console.log("second planet y: " + planets[j].y);

                    currentText = `This is an opposition between ${planets[i].label} and ${planets[j].label}`;

                    console.log('changed current text');
                  }
                  else {
                    currentText ="";
                    // console.log('mouse not over line');
                  }

            }

            else if (alignment == OPPOSITION) {

                currentText = "No significant aspect between planets";

            }
            
        }
    }



    


}




function keyPressed() {
    if (keyCode === ENTER) {
        isPaused = !isPaused;
        console.log("pause boolean " + isPaused);


        let mvAngleDifference;
        // planets.drawLine = false;
        // console.log('set drawline to false');


        

        for (let i = 0; i < planets.length - 1; i++) {
            for (let j = i + 1; j < planets.length; j++) {

                
            
              mvAngleDifference = Math.round(abs(planets[i].angle - planets[j].angle));
              console.log(mvAngleDifference);

                // Check for planetary alignments...
                if (0 <= mvAngleDifference && mvAngleDifference <= 3) {
                    planets[i].drawLine = true; // Set drawLine property to true for conjunction
                    alignment = CONJUNCTION;                                      
                    console.log('conjunction');
                    console.log("pause boolean in conjunction " + isPaused);
                } else if (59 <= mvAngleDifference && mvAngleDifference <= 65) {
                    planets[i].drawLine = true; // Set drawLine property to true for sextile
                    alignment = SEXTILE;   
                    console.log('sextile');
                } else if (88 <= mvAngleDifference && mvAngleDifference <= 92) {
                    planets[i].drawLine = true; // Set drawLine property to true for square
                    alignment = SQUARE;
                    console.log('square');
                } else if (118 <= mvAngleDifference && mvAngleDifference <= 122) {
                    planets[i].drawLine = true; // Set drawLine property to true for trine
                    alignment = TRINE;
                   
                    console.log('trine')
                } else if (178 <= mvAngleDifference && mvAngleDifference <= 182) {
                    planets[i].drawLine = true; // Set drawLine property to true for opposition
                    alignment = OPPOSITION;
                    console.log('opposition');
                } else {
                    planets[i].drawLine = false;
                    alignment = NONE;
                   
                }
            }
        }
        // Update currentText based on alignments
        // if (alignments.length > 0) {
        //     currentText = alignments.join('\n'); // Concatenate alignments into a string
        //     console.log('concatenated string');
        // } else {
        //     currentText = "No significant aspect between planets";
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
        this.drawLine = false;
    }

    // Update planet position
    update() {
        this.angle += this.orbitSpeed;

        // Reset angle when it reaches or exceeds 360 degrees
        if (this.angle >= 360) {
            this.angle = 0;
        }
    }

    // Display planet
    display() {
        this.x = width/2 + this.orbitRadius * cos(this.angle);
        this.y = height/2 + this.orbitRadius * sin(this.angle);

        // Draw orbit
        noFill();
        strokeWeight(2);
        stroke(150);
        ellipse(width/2, height/2, this.orbitRadius * 2);

        // Draw planet
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.radius * 2);

        // Display the label for the planet
        // noStroke();
        // fill('white');
        // textSize(15);
        // text(this.label, this.x - 20, this.y - 33);

        if (this.label === "Mercury") {
            noStroke();
            fill('white');
            textSize(15);
            text(this.label, this.x - 33, this.y - 25);
        } else if (this.label === "Venus") {
            noStroke();
            fill('white');
            textSize(15);
            text(this.label, this.x - 20, this.y - 33);
        } else if (this.label === "Mars") {
            noStroke();
            fill('white');
            textSize(15);
            text(this.label, this.x - 20, this.y - 35);
        }
        else if (this.label === "Jupiter") {
            noStroke();
            fill('white');
            textSize(15);
            text(this.label, this.x - 25, this.y - 56);
        }
        else if (this.label === "Saturn") {
            noStroke();
            fill('white');
            textSize(15);
            text(this.label, this.x - 25, this.y - 59);
        }

        
    }
  
   drawLineTo(target) {
        if (this.drawLine) {

        let lineWeight = 3;
            
        if(mouseX >= min(this.x, target.x) &&
                mouseX <= max(this.x, target.x) &&
                mouseY >= min(this.y, target.y) &&
                mouseY <= max(this.y, target.y))
        {
            lineWeight = 8;
            // line(this.x, this.y, target.x, target.y);
        }

        stroke('yellow');
        strokeWeight(lineWeight);
        line(this.x, this.y, target.x, target.y);
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















