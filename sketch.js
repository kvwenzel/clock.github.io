let yoff = 0.0; // 2nd dimension of perlin noise
let stars = []; // declare array of stars
let shine; // declare star color

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  shine = color('#f7de5e');
  
//CREATE BACKGROUND
  //RGB color values are taken from https://codeburst.io/sunsets-and-shooting-stars-in-p5-js-92244d238e2b
  var color1 = color(0, 0, 153);
  var color2 = color(204, 51, 0);
  setGradient(0, 0, windowWidth, windowHeight, color1, color2);
  
//TRACK SECONDS: stars (small ellipses) appear with each second
  let sec = second();
  for (let i = 0; i < stars.length; i++) {
    stars[i].display();
  }
  if (stars.length-1 < sec){
    stars.push(new star());
  }
  if (stars.length-1 > sec){
    stars.pop();
  }

//TRACK MINUTES: wave of water (2D perlin noise) moves down from top(0min) to bottom (59min) with each minute
  let increment = windowHeight/60;
  lower = ((minute()*increment)-12);
  upper = ((minute()*increment)+12);
  ocean();

//TRACK HOURS: sun (blue circle) moves from left(00 o'clock) to right(24 o'clock) in an arc with each hour
  let hr = hour();
  let sunAngle = map(hr, 0, 24, 0, 180);  
  //x = radius*cosine(angle)
  let coordX = -(windowWidth/4)*(cos(sunAngle))+(windowWidth/2);
  //y = sin(angle)*radius
  let coordY = -(windowWidth/4)*(sin(sunAngle))+(windowHeight);
  circle(coordX, coordY, 40);
}

//Gradient function is a shortened version of https://p5js.org/examples/color-linear-gradient.html
function setGradient(x, y, w, h, c1, c2) {
  noFill();
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
}

function ocean(){
//Perlin noise taken from https://p5js.org/examples/math-noise-wave.html
//with adaptations to make the noise "wave" less and move down with each minute
  fill(0, 0, 255, 120);
  noStroke();
  beginShape();
  let xoff = 0;
  // Iterate over horizontal pixels
  for (let x = 0; x <= windowWidth; x += 10) {
    // Calculate a y value according to noise; map
    let y = map(noise(xoff, yoff), 0, 1, lower, upper);
    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(windowWidth, windowHeight);
  vertex(0, windowHeight);
  endShape(CLOSE);
} //end of ocean() 

//Star class
//Guided by https://p5js.org/examples/objects-array-of-objects.html
class star {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(windowHeight-250);
	this.diameter = 3;
  }
  display() {
	ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(shine);
    noStroke();
  }
} //end of star class