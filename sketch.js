var bgImage,bgImage1;
var planet1,planet1Img,planet2,planet2Img;
var player1,player2,player1Img
var gameState=0;

function preload(){
  bgImage=loadImage("bg1.jpg");
  bgImage1=loadImage("bg3.jpg");
  planet1Img=loadImage("planet1.png")
  planet2Img=loadImage("planet2.png")
  player1Img=loadImage("robot1.gif")
}

function setup() {
  createCanvas(1545,750);


  
}

function draw() {
  if(gameState===0){ 
  background(bgImage);
  textSize(100);
  stroke("white");
  strokeWeight(10);
  fill("black");
  textFont("timesNewRoman")
  text("SPYROBO",500,100);  
  textSize(50);
  text("Select Your Planet",500,350);

  planet1=createSprite(200,425,50,50);
  planet1.addImage(planet1Img); 
  planet2=createSprite(1300,425,50,50);
  planet2.addImage(planet2Img);
  planet1.visible=true;
  planet2.visible=true;
  if(mousePressedOver(planet1)){
    gameState=1;
   
  }

  }
if(gameState===1){
  background(bgImage1);
  planet1.visible=false;
  planet2.visible=false;
  console.log(gameState);

  player1=createSprite(200,height-200,50,50);
  player1.addImage(player1Img);
  player1.scale=0.5;
}

  drawSprites();

}
