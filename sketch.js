var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  wall = createSprite(1500,200,thickness,height/2)
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("cyan");
  if(hasCollided(bullet,wall))
{
bullet.velocityx = 0;
var damage = 0.5 *weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){
    wall.shapeColor = color(255,0,0)
}
if(damage<10){
    wall.shapeColor = color(0,255,0)
}
}
  

  drawSprites();
}