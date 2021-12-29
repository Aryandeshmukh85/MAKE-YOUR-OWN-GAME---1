var rocket,rocketImg;
var bg,bgImg;

function preload() {
  bgImg=loadImage("spaceImg.png")
  rocketImg=loadImage("Rocket.png")
}
function setup() {
  background("red");  
  createCanvas(800,600);
  bg=createSprite(500,500,500,500)
  bg.addImage(bgImg);
  bg.scale=3

  rocket=createSprite(500,500);
  rocket.addImage(rocketImg);
  rocket.scale=0.1

}

function draw() {
  bg.velocityY=2;
  if(keyDown("RIGHT_ARROW")){
    rocket.x=rocket.x+4
  }
  if(keyDown("LEFT_ARROW")){
    rocket.x=rocket.x-4
  }
  if(bg.y>700){
    bg.y=height/2
  }
  drawSprites();
}