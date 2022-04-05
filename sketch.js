var shooter;
var standingImg, shootingImg;
var bg, bgImg;
var zombie,zombieImg;
var zombieGroup;

function preload(){

standingImg=loadImage("assets/shooter_2.png");
shootingImg=loadImage("assets/shooter_3.png");

bgImg= loadImage("assets/bg.jpeg");

zombieImg=loadImage("assets/zombie2.png");


}

function setup(){
createCanvas (windowWidth, windowHeight);
bg= createSprite(width/2, displayHeight/2+100);
bg.addImage(bgImg);
bg.scale=1.09;


shooter= createSprite(width/4, height/2);
 shooter.addImage(standingImg);
 shooter.scale = 0.3;

zombieGroup= new Group();
}

function draw(){
  background("grey");

  if(keyDown("UP_ARROW")){
shooter.y = shooter.y-12;
  }

  if(keyDown("DOWN_ARROW")){
    shooter.y= shooter.y+12;
  }

if(keyWentDown("SPACE")){
shooter.addImage(shootingImg);
var bullet = createSprite(shooter.x+20, shooter.y-25, 10,5);
bullet.velocityX= 7;

}
else if(keyWentUp ("SPACE")){
shooter.addImage(standingImg);
}

zombieCreate();

if(zombieGroup.isTouching(bullet)){
handleCollision();
}

drawSprites();
}
function zombieCreate(){

if( frameCount%210===0  ){
  zombie = createSprite(width, height/2+60);
  var ran= Math.round(random(height/2+60,height));
  zombie.y= ran;
  zombie.addImage(zombieImg);
  zombie.scale= 0.25;

  zombie.velocityX = -5;
  zombieGroup.add (zombie);
  zombieGroup.setLifetimeEach(1200);
}
  


}
 function createBullet(){


 }
  function handleCollision(){
    zombieGroup.destroyEach();
    bullet.destroy()
  }