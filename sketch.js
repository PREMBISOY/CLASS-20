
var movingSprite, fixedSprite

function setup() {
  createCanvas(800,400);
  movingSprite = createSprite(400, 200, 50, 50);
  fixedSprite = createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  
  movingSprite.velocityX = -5
  fixedSprite.velocityX = 5

/*movingSprite.x = mouseX;
movingSprite.y = mouseY;*/

if(movingSprite.x-fixedSprite.x<movingSprite.width/2+fixedSprite.width/2 &&
  fixedSprite.x-movingSprite.x<movingSprite.width/2+fixedSprite.width/2 && 
  movingSprite.y-fixedSprite.y<movingSprite.height/2+fixedSprite.height/2 &&
  fixedSprite.y-movingSprite.y<movingSprite.height/2+fixedSprite.height/2)
{
movingSprite.shapeColor = "red"
fixedSprite.shapeColor = "red"



}

else{

movingSprite.shapeColor = "green"
fixedSprite.shapeColor = "green"


}
if(movingSprite.x-fixedSprite.x<movingSprite.width/2+fixedSprite.width/2 &&
  fixedSprite.x-movingSprite.x<movingSprite.width/2+fixedSprite.width/2)
  {

  movingSprite.velocityX = movingSprite.velocityX * -1
  fixedSprite.velocityX = fixedSprite.velocityX * -1

  }



  drawSprites();


}