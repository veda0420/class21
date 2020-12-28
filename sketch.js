var movingrect,fixedrect


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 350, 50, 50);
  fixedrect.shapeColor="pink"
  movingrect=createSprite(400,50,80,80);
  movingrect.shapeColor="pink"
  fixedrect.velocityY=-5
  movingrect.velocityY=5
}

function draw() {
  background(0);  
 bounceOff(fixedrect,movingrect)
  drawSprites();
}