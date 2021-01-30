var helicopterIMG, helicopter, boxSprite,boxIMG;
var boxBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	boxIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	box=createSprite(width/2, 80, 10,10);
	box.addImage(boxIMG)
	box.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	boxBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, boxBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  box.x= boxBody.position.x 
  box.y= boxBody.position.y 
  drawSprites();
 }
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(boxBody,false);
    
  }
}
