// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

color c1 = color(255, 0, 0);
color c2 = color(0, 0, 255);


function setup() {
  createCanvas(700,500);
  frameRate(15);
}

function draw() {
  background(0);



for (int i = 200; i < width-150; i = i+140+mouseY) {
    for (int j = 100; j < height-150; j = j+140) {
    noFill();
    strokeWeight(random(1,5));
    stroke(mouseX-mouseY,random(0,255),random(0,255));
    line(random(500,800),random(250,550), random(500,800), random(250,550));
    
  }
}

}