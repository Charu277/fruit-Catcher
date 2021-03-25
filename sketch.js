const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var boy,boyImg
var package,packageImg
var score=0;
 function preload() {
  boyImg=loadImage("images/boy.png")
  packageImg=loadImage("images/package.png")
 }
function setup() {
  engine  = Engine.create();
  world = engine.world;
  createCanvas(800,400);
 boy=createSprite(200,334);
 boy.addImage(boyImg)
 boy.scale=0.1

  ground=new Ground(400,385,800,30)
  ground.x = ground.width /2;
  ground.velocityX=-3

 
  
  package=createSprite(400,10,30,30);
  package.addImage(packageImg)
  packageGroup=new Group();

  package.scale=0.2
}

function draw() {
  background("lime");  
  noStroke();
        textSize(25)
        fill("white")
        text("Score:" + score, 700, 50)
    
  ground.display()
  drawSprites()
if(package.position.x=384){
  package.velocityY=0
}
}

  
function keyPressed() {
  if (keyCode===RIGHT_ARROW) {
    package.position.x=package.position.x+10
      }
  if(keyCode===LEFT_ARROW){
    package.position.x=package.position.x-10
    
  }
  if(keyCode===DOWN_ARROW){
    package.velocityY=3
  }
  
}

