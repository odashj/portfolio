var backgroundColor;
var isOverCircle;
 
function setup() 
{
  // set canvas size
  createCanvas(400, 400);
  
  // default background color
  backgroundColor = color(255, 255, 255);
}
 
function draw() 
{
  background(backgroundColor);
 
  // get distance between mouse and circle
  var distance = dist(mouseX, mouseY, 200, 200); 
  
  // if the distance is less than the circle's radius
  if(distance < 50)
  {
    isOverCircle = true;
  } else {
    isOverCircle = false;
  }
  
  // draw a circle
  ellipseMode(CENTER);
      fill(100);

  if(isOverCircle == true)
  {
    stroke(0);
    strokeWeight(5);
    cursor(HAND);
    backgroundColor = color(10, 20, 90);
  } else {
    noStroke();
    cursor(ARROW); 
    backgroundColor = color(255, 255, 255);
  }
  ellipse(200, 200, 100, 100);
  
}
 
