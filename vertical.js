var ballX = 200;
var ballY = 25;
var ballSpeed = 6;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(200);
  noStroke();
  fill(255, 204, 0);
  ellipse(ballX, ballY, 50);
  //set up ball direction(ball = position + "velocity")
  ballY = ballY + ballSpeed;

  //top parameters
  if (ballY == 25) {
    //reverses direction
    ballSpeed = -ballSpeed;
  }
  
  //bottom parameters
  if (ballY > height-25) {
    //reverses direction
    ballSpeed = -ballSpeed;
  }
}
