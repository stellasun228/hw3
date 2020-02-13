var ballX1 = 15;
var ballY1 = 100;
var ballSpeed1 = 1;

var ballX2 = 250;
var ballY2 = 25;
var ballSpeed2 = 2;

var ballX3 = 30;
var ballY3 = 30;
var ballSpeed3 = 3;

var ballX4 = 160;
var ballY4 = 15;
var ballSpeed4 = 4;

var ballX5 = 25;
var ballY5 = 200;
var ballSpeed5 = 7;

var ballX6 = 375;
var ballY6 = 25;
var ballSpeed6 = 6;

var ballX7 = 375;
var ballY7 = 200;
var ballSpeed7 = 5;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  noStroke();
  
  // ball 1 (dark pink)
  fill(255, 154, 162);
  ellipse(ballX1, ballY1, 30);
  ballX1 = ballX1 + ballSpeed1;

  if (ballX1 == 15) {
    ballSpeed1 = -ballSpeed1;
  }  
  if (ballX1 > width-15) {
    ballSpeed1 = -ballSpeed1;
  }

  // ball 2 (medium pink)
  fill(255, 183, 178);
  ellipse(ballX2, ballY2, 50);
  ballY2 = ballY2 + ballSpeed2;

  if (ballY2 == 25) {
    ballSpeed2 = -ballSpeed2;
  }  
  if (ballY2 > height-25) {
    ballSpeed2 = -ballSpeed2;
  }
  
  // ball 3 (peach)
  fill(255, 218, 193);
  ellipse(ballX3, ballY3, 60);
  ballX3 = ballX3 + ballSpeed3;
  ballY3 = ballY3 + ballSpeed3;

  if (ballX3 == 30 || ballY3 == 30) {
    ballSpeed3 = -ballSpeed3;
  }  
  if (ballX3 > width-30 || ballY3 > height-30) {
    ballSpeed3 = -ballSpeed3;
  }

  // ball 4 (green)
  fill(226, 240, 203);
  ellipse(ballX4, ballY4, 30);
  ballY4 = ballY4 + ballSpeed4;

  if (ballY4 == 15) {
    ballSpeed4 = -ballSpeed4;
  }  
  if (ballY4 > height-15) {
    ballSpeed4 = -ballSpeed4;
  }
  
  // ball 5 (teal)
  fill(181, 234, 215);
  ellipse(ballX5, ballY5, 50);
  ballX5 = ballX5 + ballSpeed5;

  if (ballX5 == 25) {
    ballSpeed5 = -ballSpeed5;
  }  
  if (ballX5 > width-25) {
    ballSpeed5 = -ballSpeed5;
  }

// ball 6 (purple)
  fill(199, 206, 234);
  ellipse(ballX6, ballY6, 50);
  ballX6 = ballX6 - ballSpeed6;
  ballY6 = ballY6 + ballSpeed6;

  if (ballX6 == 25 || ballY6 == 25) {
    ballSpeed6 = -ballSpeed6;
  }  
  if (ballX6 > width-25 || ballY6 > height-25) {
    ballSpeed6 = -ballSpeed6;
  }

// ball 7 (yellow)
  fill(253, 221, 92);
  ellipse(ballX7, ballY7, 50);
  ballX7 = ballX7 - ballSpeed7;
  ballY7 = ballY7 + ballSpeed7;

  if (ballX7 == 25 || ballY7 == 25) {
    ballSpeed7 = -ballSpeed7;
  }  
  if (ballX7 > width-25 || ballY7 > height-25) {
    ballSpeed7 = -ballSpeed7;
  }
}
