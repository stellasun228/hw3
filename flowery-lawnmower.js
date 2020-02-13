function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }
  
  // grass flowers when height passes certain point
  if (h > 30 && random(15) > 14) {
    flower(random(width), height-h + random(2, 10), 3);
  }

  // lawnmower cuts grass when mouse is pressed
  if (mouseIsPressed) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}

function flower (x, y, d) {
  noStroke();
  fill(354, random(13, 30), 98);
  ellipse(x, y, 2*d-1);
  ellipse(x, y+d, d);
  ellipse(x, y-d, d);
  ellipse(x+2.5, y- d/2, d);
  ellipse(x+2.5, y+ d/2, d);
  ellipse(x-2.5, y- d/2, d);
  ellipse(x-2.5, y+ d/2, d);
}
