var fixedrect;
var movingrect;
var object;
var object1;
function setup() {

  createCanvas(800,800);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(800,400,50,20);
  object=createSprite(400,600,50,20);
  object1=createSprite(200,600,50,20);
  object1.velocityX=5;
  object.velocityX=-5
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  movingrect.shapeColor="green";
  object.shapeColor="green";
  if(isTouching(movingrect,object)){
    movingrect.shapeColor="red";
    object.shapeColor="red";
  }
  
  bounceOff(object1,object);

  drawSprites();
}