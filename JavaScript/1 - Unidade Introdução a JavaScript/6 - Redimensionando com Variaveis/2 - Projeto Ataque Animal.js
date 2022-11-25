var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var faceW = bodyW/2;
var eyeSize = 8;
var eyeY = 150;
var mouthW = 30;
var mouthH = 10;
var mouth_start = 0;
var mouth_stop = 180;
var handsW = 40;
var handsH = 60;
var angulo = 360;
var feetY = 260;
var feetW = 25;
var feetH = 100;
var feetS = 0;
var feetE = 180;

draw = function() {
    background(207, 254, 255);
    // Feets
    arc(bodyX*0.85,feetY, feetW,feetH, feetS, feetE);//Left
    arc(bodyX*1.15,feetY, feetW,feetH, feetS, feetE);//Right
    // Hands
    arc(bodyX-(bodyX*0.3),bodyY, handsW, handsH, 125 , 295); //Left
    arc(bodyX+(bodyX*0.3),bodyY, handsW, handsH, 245, 425); //Right
    fill(255, 255, 255);
    ellipse(bodyX, bodyY, bodyW, 106); // Body
    ellipse(bodyX, bodyY-70, faceW, 47); // Face
    // Eyes
    fill(255, 255, 255);
    ellipse(bodyX-(bodyX*0.075), eyeY, eyeSize, eyeSize); //Left
    ellipse(bodyX+(bodyX*0.075), eyeY, eyeSize, eyeSize); //Right
    // Mouth
    arc(bodyX,bodyY*0.7272727272,mouthW,mouthH,mouth_start,mouth_stop);
    //Animation
    handsH+= 0.1;
    handsW+= 0.2;


};
