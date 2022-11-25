var xPos = 1;
var yPos = 400;
var xPos2 = 400;
var yPos2 = 400;
var stars = 10;
var starsSize= 7;

draw = function() {
    //Star cadent
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    xPos++;
    yPos--;
    ellipse(xPos2, yPos2, 10, 10);
    xPos2--;
    yPos2--;
    fill(255, 255, 255);
    
    //Stars in the sky
    noStroke();
    ellipse(stars, stars , starsSize, starsSize);
    ellipse(stars + 10, stars + 350 , starsSize, starsSize);
    ellipse(stars + 50, stars + 225 , starsSize, starsSize);
    ellipse(stars + 70, stars + 185 , starsSize, starsSize);
    ellipse(stars + 90, stars + 300 , starsSize, starsSize);
    ellipse(stars + 150, stars + 280 , starsSize, starsSize);
    ellipse(stars + 300, stars + 190 , starsSize, starsSize);
    ellipse(stars + 270, stars + 170, starsSize, starsSize);
    ellipse(stars + 180, stars + 370, starsSize, starsSize);
    ellipse(stars + 40, stars + 118, starsSize, starsSize);
    ellipse(stars + 370, stars + 270 , starsSize, starsSize);
    ellipse(stars + 280, stars + 10 , starsSize, starsSize);
    ellipse(stars + 350, stars + 50 , starsSize, starsSize);
    ellipse(stars + 50, stars + 10, starsSize, starsSize);
    ellipse(stars + 200, stars + 100 , starsSize, starsSize);
    ellipse(stars + 100, stars + 100 , starsSize, starsSize);
    ellipse(stars + 380, stars + 380 , starsSize, starsSize);
    ellipse(stars + 20, stars + 255 , starsSize, starsSize);
    
};



