const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,Ground,bin,bin2,bin3;

function preload(){

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(100,500,20);

	Ground = new ground(400,650,800,10);

	bin = new dustbin(500,610,20,70);
	bin2 = new dustbin(550,625,100,20);
	bin3 = new dustbin(600,610,20,70);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  Ground.display();

  bin.display();
  bin2.display();
  bin3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === '24'){
		console.log("okay")
		Matter.body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}

