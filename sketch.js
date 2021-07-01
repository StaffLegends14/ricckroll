const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var anl = -PI/4



function preload() {
  backgroundImg = loadImage("background.gif");
  towerImage = loadImage("tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  tower = new Tower(150, 350, 160, 310);
  ground = new Ground(0,height - 1,width*2,1);
cannon = new Cannon(150,210,100,50,PI*1.1);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  
  cannon.diskall();
  tower.show();

 
}







