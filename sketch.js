const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
paperIMG = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here
	Engine.run(engine);
	paper = new Paper(150,380);
	ground = new Ground(400,697.5,800,20);
	log1 = new Dustbin(390,675,10,50);
	log2 = new Dustbin(400,675,50,10);
	log3 = new Dustbin(410,675,10,50);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  log1.display();
  log2.display();
  log3.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:-150});

}
}