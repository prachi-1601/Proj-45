var player;
var road;
var playerImg, roadImg, carImg, coinImg, thiefImg;

function preload(){
  playerImg =  loadAnimation("images/run12.png", "images/run11.png", "images/run10.png", "images/run9.png", "images/run8.png", "images/run7.png", "images/run6.png", "images/run5.png", "images/run4.png", "images/run3.png", "images/run2.png", "images/run1.png");
  roadImg = loadImage("images/road3.jpg");
  carImg = loadImage("images/car.png");
  coinImg = loadImage("images/coin.png"); 
  thiefImg = loadImage("images/thief.png");

}

function setup() {
  createCanvas(600,400);
  road = createSprite(300, 200, 600, 400);
  road.addImage(roadImg);
  road.velocityX = -3;
  road.scale = 1.41;

 player = createSprite(100, 280, 50, 50);
 player.addAnimation("running", playerImg);
 player.scale = 0.75;
}

function draw() {
  background(0);  

  if(road.x < 0){
     road.x = road.width/2;
  }

  drawSprites();
}


