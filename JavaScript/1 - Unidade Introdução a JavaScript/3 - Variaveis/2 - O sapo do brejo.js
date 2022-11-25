var x = 200;
var y = 250;
var eyeleftx = x - 55;
var eyelefty = y - 50;
var eye_rightx = x + 45;
var eye_rigthy = y - 50;

noStroke();
fill(30, 204, 91); // a nice froggy green!

ellipse(x, y, 200, 100); // face
ellipse(x - 50, y - 50, 40, 40); // left eye socket
ellipse(x + 50, y - 50, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(x - 50, y - 50, 30, 30); // left eyeball
ellipse(x + 50, y - 50, 30, 30); // right eyeball

//Pupila
fill(0, 0, 0);
ellipse(x, y, 125, 50);
rect(eyeleftx, eyelefty , 10, 10);
rect(eye_rightx, eye_rigthy, 10, 10);




