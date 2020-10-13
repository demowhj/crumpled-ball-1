
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, floor;
var b1,b2,b3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper();
	floor = new Ground();

	b1 = new Dustbin(600,660,200,20);
	b2 = new Dustbin(500,620,20,100);
	b3 = new Dustbin(700,620,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();

  floor.display();

  b1.display();
  b2.display();
  b3.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:145,y:-145});
	}
}