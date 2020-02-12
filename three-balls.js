var ballX1 = 25;
var ballY1 = 100;
var ballSpeed1 = 4;

var ballX2 = 250;
var ballY2 = 25;
var ballSpeed2 = 6;

var ballX3 = 25;
var ballY3 = 25;
var ballZ3 = 0;
var ballSpeed3 = 5;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  noStroke();
  
// ball 1
  fill(220, 220, 240);
  ellipse(ballX1, ballY1, 50);
  ballX1 = ballX1 + ballSpeed1;

  if (ballX1 == 25) {
    ballSpeed1 = -ballSpeed1;
  }  
  if (ballX1 > width-25) {
    ballSpeed1 = -ballSpeed1;
  }

// ball 2
  fill(255, 204, 200);
  ellipse(ballX2, ballY2, 50);
  ballY2 = ballY2 + ballSpeed2;

  if (ballY2 == 25) {
    ballSpeed2 = -ballSpeed2;
  }  
  if (ballY2 > height-25) {
    ballSpeed2 = -ballSpeed2;
  }
  
// ball 3
  fill(255, 204, 100);
  ellipse(ballX3, ballY3, 50);
  ballX3 = ballX3 + ballSpeed3;
  ballY3 = ballY3 + ballSpeed3;

  if (ballX3 == 25 || ballY3 == 25) {
    ballSpeed3 = -ballSpeed3;
  }  
  if (ballX3 > width-25 || ballY3 > height-25) {
    ballSpeed3 = -ballSpeed3;
  }
}
