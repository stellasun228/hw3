# hw3

Bouncing balls + lawn mower


Lawn Mower Questions
1. What code draws the blades of grass?
<br>
stroke(random(60, 70), 100, 90);
line(x, height-10, x+random(-10, 10), height-10-random(h));

2. What code makes the "lawnmower" come by? How often does it come by?
<br>
if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
  
The lawnmower comes by if 1000 is selected from a set of number 0-1000. There is a 0.001 chance everytime the program runs.

3. What's the point of the h variable?
The h variable increases the vertical reach of the grass blades in every row of grass. This simulates the lawn growing taller.

4. What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
the two -10's set up the grass blades to grow starting on top of the brown rectangle. This simulates the grass growing on top of the soil.
