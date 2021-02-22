const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var superhero, superheroImg; 
var monster, monsterImg;
var backgroundImg;
var ground

function preload() {
  backgroundImg = loadImage("images/GamingBackground.png");
  monsterImg = loadImage("images/Monster-01.png");
  superheroImg = loadImage("images/Superhero-01.png");

}

function setup() {
  createCanvas(3000, 800);
 
  engine = Engine.create();
    world = engine.world;

    superhero=new Hero(1500,400,150)
    ground=new Ground(1500,790,3000,15)

}

function draw() {
  background(0);

  mouseDragged()


  ground.display()
  superhero.display()
}

function mouseDragged(){
    
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }