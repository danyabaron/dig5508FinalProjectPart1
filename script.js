

let smallStars = [];
let bigStars = [];

// let mercury, venus, earth, mars, jupiter, saturn;
let planets = [];

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
    text('Press Enter to learn about Planetary Alignments',width/2-550, height-1100 )


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
            planets[i].drawLineTo(planets[j]); // Draw lines between planets
        }
    }

    
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



    


}


function mouseOverLine(planet1, planet2) {
    console.log('mouseX:', mouseX, 'mouseY:', mouseY);
    // Check if the mouse is close to the line formed by the two planets
    let d = distToLine(mouseX, mouseY, planet1.x, planet1.y, planet2.x, planet2.y);

    // Set a threshold value for the mouse proximity to the line
    let threshold = 5; // Adjust as needed

    // If the distance is within the threshold, the mouse is considered over the line
    return d < threshold;
}

// Helper function to calculate the distance from a point to a line
function distToLine(x, y, x1, y1, x2, y2) {
    let numerator = abs((y2 - y1) * x - (x2 - x1) * y + x2 * y1 - y2 * x1);
    let denominator = dist(x1, y1, x2, y2);
    return numerator / denominator;
}

function keyPressed() {
    if (keyCode === ENTER) {
        isPaused = !isPaused;


        let mvAngleDifference;
        let alignments = []; // List to store alignment information




        for (let i = 0; i < planets.length - 1; i++) {
            for (let j = i + 1; j < planets.length; j++) {
                mvAngleDifference = Math.round(abs(planets[i].angle - planets[j].angle));
              console.log(mvAngleDifference);

                // Check for planetary alignments...
                if (0 <= mvAngleDifference && mvAngleDifference <= 3) {
                    planets[i].drawLine = true; // Set drawLine property to true for conjunction
                    if (mouseOverLine(planets[i], planets[j])) {
                        alignments.push(`Conjunction between ${planets[i].label} and ${planets[j].label}`);
                        console.log('Detected conjunction:', planets[i].label, planets[j].label);
                        console.log('pushed alignments text');
                    }
                      console.log('changed current text');
                    
                    console.log('conjunction');
                } else if (59 <= mvAngleDifference && mvAngleDifference <= 65) {
                    planets[i].drawLine = true; // Set drawLine property to true for sextile
                    currentText = `This is a sextile between ${planets[i].label} and ${planets[j].label}`;
                    console.log('sextile');
                } else if (88 <= mvAngleDifference && mvAngleDifference <= 92) {
                    planets[i].drawLine = true; // Set drawLine property to true for square
                    currentText = `This is a square between ${planets[i].label} and ${planets[j].label}`;
                    console.log('square');
                } else if (118 <= mvAngleDifference && mvAngleDifference <= 122) {
                    planets[i].drawLine = true; // Set drawLine property to true for trine
                    currentText = `This is a trine between ${planets[i].label} and ${planets[j].label}`;
                    console.log('trine')
                } else if (178 <= mvAngleDifference && mvAngleDifference <= 182) {
                    planets[i].drawLine = true; // Set drawLine property to true for opposition
                    currentText = `This is an opposition between ${planets[i].label} and ${planets[j].label}`;
                    console.log('opposition');
                } else {
                    planets[i].drawLine = false;
                    // currentText = "No significant aspect between planets";
                }
            }
        }
        // Update currentText based on alignments
        if (alignments.length > 0) {
            currentText = alignments.join('\n'); // Concatenate alignments into a string
        } else {
            currentText = "No significant aspect between planets";
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
            stroke('yellow');
            strokeWeight(3);
            line(this.x, this.y, target.x, target.y);
        //     if(mouseX >= min(this.x, target.x) &&
        //         mouseX <= max(this.x, target.x) &&
        //         mouseY >= min(this.y, target.y) &&
        //         mouseY <= max(this.y, target.y))
        // {

        // }
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















