var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect)
  drawSprites();
}

function bounceOff(x,y){
  if (x.x - y.x < y.width/2 + x.width/2
    && y.x - x.x < y.width/2 + x.width/2) {
  x.velocityX = x.velocityX * (-1);
  y.velocityX = y.velocityX * (-1);
}
if (x.y - y.y < y.height/2 + x.height/2
  && y.y - x.y < y.height/2 + x.height/2){
  x.velocityY = x.velocityY * (-1);
  y.velocityY = y.velocityY * (-1);
}
}














