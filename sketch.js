const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	groundObj =new Ground(width/2,670,width,20);
    leftSide = new Ground(10,200,20,400);

		var ball_options={
		isStatic:false,
		restitution:0.03,
		friction:0,
		density:1.2
	}
	
	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();

  drawSprites();
 
}



