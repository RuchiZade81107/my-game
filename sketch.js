
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var backGroundImage

function preload(){
 
 backGroundImage=loadImage("jungle1.jpg")
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400)
  
  
  
  ground=createSprite(200,380,800,5)
  ground2=createSprite(200,200)
  ground2.addImage(backGroundImage);
  fruitGroup=new Group();
  obstacleGroup=new Group();
   monkey=createSprite(50,350,10,10) 
monkey.addAnimation("running",monkey_running)
 monkey.scale=0.1
  ground2.scale=0.5
}


function draw() {
background("white")
  camera.y=monkey.y
  survivaltime=Math.ceil(frameCount/frameRate())
  if(keyDown("space")&&monkey.y>=300){
    monkey.velocityY=-10;
  }
monkey.velocityY=monkey.velocityY+0.5  
  
monkey.collide(ground)
  if(ground2.x<50){
    ground2.x=200
    
  }
   ground2.velocityX=-3
  
  switch(score){
    case 10: player.scale=0.12;
      break;
      case 20 :player.scale=0.14;
      break;
      case 30: player.scale=0.16;
      break;
      case 40: player.scale=0.18;
      break;
    default:break;
  }
     if(fruitGroup.isTouching(monkey)) {
       fruitGroup.destroyEach();
     }
      
  
  
  
  
  
  
  
  fruits();
  obstacle();
 drawSprites() ;
  textSize(20)
  text("survival time:"+survivaltime,100,50)
}
function fruits(){
  
  if(frameCount%80===0){
    fruit=createSprite(400,Math.round(random(120,200)),10,10)
    fruit.addImage(bananaImage)
    fruit.velocityX=-3
    fruit.scale=0.1
    fruit.lifetime=135
    fruitGroup.add(fruit)
  }
}
function obstacle(){
  
  if(frameCount%300===0){
    obs=createSprite(400,340,10,10)
    obs.addImage(obstacleImage)
    obs.velocityX=-3
    obs.scale=0.2
    obs.lifetime=135
    obstacleGroup.add(obs)
  }
}




