var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, red box;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	 
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	box1=bodies.rectangle(300,630,20,60{isStatic:true,restitution:1}
        box2=bodies.rectangle(500,630,20,60{isStatic:true,restitution:1}
	box3=bodies.rectangle(400,650,180,20{isStatic:true,restitution:1}
			      
	console.log(box1)		      
			      
       Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

rect(box1.position.x,box1.posittion.y,20,60)
rect(box2.position.x,box2.posittion.y,20,60)
rect(box3.position.x,box3.posittion.y,180,20)
 
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,false)
	redbox.isStatic(20,200)
	sides=(100,20)package stay inside the redbox
	if (DOWN_ARROW(package)){
		package.restitution=0
	}
	 if(keyCode===LEFT_ARROW){
	helicopterSprite.x=helicopterSprite.x-20;
	translante={x:-20,y:0}
	Matter.Body.translate(packageBody,translation)
	
	 } esle if(keyCode===RIGHT_ARROW){
	helicopterSprite.x=helicopterSprite.x+20;
	translante={x:,20,y:0}
	Matter.Body.translate(packageBody,translation)
	 
	 }esle if(keyCode===DOWN_ARROW){
           Matter.Body.setStatic(packageBody,false);
 }
 }
