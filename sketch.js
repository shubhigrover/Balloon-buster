//introducing variables, groups
var redb,redballoon, greenb,greenballoon, blueb, blueballoon 
var pinkb, pinkballoon
var ground, groundImage
var bow, bows, arrow, arrowImage
var edges, chooseballoon, score
var redGroup, pinkGroup, blueGroup, greenGroup, arrowGroup
var PLAY = 1
var END = 0
var gameState = PLAY ;


function preload(){
    //loading the animations and images
    groundImage= loadAnimation("background0.png")
    redballoon= loadImage("red_balloon0.png")
    pinkballoon= loadImage("pink_balloon0.png")
    blueballoon= loadImage("blue_balloon0.png")
    greenballoon= loadImage("green_balloon0.png")
    bows= loadImage("bow0.png")
    arrowImage= loadImage("arrow0.png")
}

function setup() {
    createCanvas(400, 400);
    edges= createEdgeSprites()

    //creating the ground sprite
    ground= createSprite(0,0,400,400)
    ground.addAnimation("background",groundImage)
    ground.velocityX=-1
    ground.scale= 2

    //creating bow sprite
    bow= createSprite(375,200,20,20)
    bow.addImage("bow",bows)
  
    //creating groups
    redGroup= new Group()
    pinkGroup= new Group()
    blueGroup= new Group()
    greenGroup= new Group()
    arrowGroup= new Group()
    
    //giving initial score  
    score=0
}

function draw() {
  background("white")
  drawSprites()
  text("Score:"+score,270,30)

  if(gameState===PLAY){
    spawnBalloons()
    arrows()
    bow.y=World.mouseY
    if(ground.x < 0){
    ground.x = ground.width/2 
  }
  if(arrowGroup.isTouching(redGroup)){
    redGroup.destroyEach()
    arrowGroup.destroyEach()
    score=score+1
  }
  if(arrowGroup.isTouching(pinkGroup)){
    pinkGroup.destroyEach()
    arrowGroup.destroyEach()
    score=score+3
  }
  if(arrowGroup.isTouching(blueGroup)){
    blueGroup.destroyEach()
    arrowGroup.destroyEach()
    score=score+5
  }
  if(arrowGroup.isTouching(greenGroup)){
    greenGroup.destroyEach()
    arrowGroup.destroyEach()
    score=score+1
  }
  if(score>49){
      gameState=END
  }
  }
  else if(gameState===END){
    ground.velocityX=0
    bow.visible=false
    text("You win! Press a to restart",130,200)
  if(keyDown("a")){
    score=0
    ground.velocityX=-1
    bow.visible=true
    gameState=PLAY
  }
  }
  }
 
    function arrows(){
  //creating arrow,adding animation, and shooting arrow
      if(keyWentDown("space")){
    arrow= createSprite(350,200,20,20)
    arrow.addImage("arrow",arrowImage)
    arrow.scale=0.25
    arrow.velocityX=-4
    arrow.y=bow.y
    arrow.lifetime=90
        arrowGroup.add(arrow)
      }
    }
function spawnBalloons(){
  //creating different coloured balloons at random positions
  var chooseballoon=Math.round(random(1,4))
  console.log(chooseballoon)
  if (frameCount % 80 === 0) {
    if (chooseballoon ===1) {
      redballoons();
    } else if (chooseballoon === 2) {
      pinkballoons();
    } else if (chooseballoon === 3) {
      blueballoons();
    } else if (chooseballoon === 4){
      greenballoons()
    }
    }
  }
function redballoons(){
  var redb= createSprite(0,Math.round(random(25,380)),20,20);
  redb.addImage("redb",redballoon)
  redb.scale=0.1
  redb.velocityX=4
  redb.lifetime=100
  redGroup.add(redb)
}

function pinkballoons(){
  var pinkb= createSprite(0,Math.round(random(25,380)),20,20);
  pinkb.addImage("pinkb",pinkballoon)
  pinkb.scale=1.25
  pinkb.velocityX=4
  pinkb.lifetime=100
  pinkGroup.add(pinkb)
}
function blueballoons(){
  var blueb= createSprite(0,Math.round(random(25,380)),20,20);
  blueb.addImage("blueb",blueballoon)
  blueb.scale=0.1
  blueb.velocityX=4
  blueb.lifetime=100
  blueGroup.add(blueb)
}   
function greenballoons(){
  var greenb= createSprite(0,Math.round(random(25,380)),20,20);
  greenb.addImage("greenb",greenballoon)
  greenb.scale=0.1
  greenb.velocityX=4
  greenb.lifetime=100
  greenGroup.add(greenb)
}