var bg,bg_Image
var bath1,bath2
var brush
var drink1,drink2
var eat1,eat2
var gym1,gym2,gym11,gym12
var move,move1
var sleep,sleeping
var astronaut
var text

function preload(){
move = loadAnimation("move.png","move1.png");
bg_Image = loadImage("iss.png");
sleep = loadAnimation("sleep.png");
brush = loadAnimation("brush.png");
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
eat = loadAnimation("eat1.png","eat2.png");
drink = loadAnimation("drink1.png","drink2.png");
}


function setup() {
  createCanvas(895,525);

 bg = createSprite(400,200,10,10)
 bg.addImage(bg_Image);
 bg.scale = 0.2

 astronaut = createSprite(425,275);
 astronaut.addAnimation("sleeping" , sleep);
 astronaut.scale = 0.1;
 
}

function draw() {
  background(0,151,157);  

  drawSprites();
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 275;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.y = 275;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 275;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("exisusis" , gym);
    astronaut.changeAnimation("exisusis");
    astronaut.y = 275;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  } 
  if(keyDown("m")){
    astronaut.addAnimation("moveing" , move);
    astronaut.changeAnimation("moveing");
    astronaut.y = 275;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
}