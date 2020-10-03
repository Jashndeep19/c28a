var boy,mango,stone
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(1200,400,1,1);
mango1=new Mango(1400,200,100);
mango2=new Mango(1200,200,100);
mango3=new Mango(1000,200,100);
mango4=new Mango(800,200,100);
mango5=new Mango(1100,100,100);
ground=new Ground(width/2,970,width,20);
boy=new Boy(300,800,10,10);

//stone=new Stone();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
  mango1.display();
mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  boy.display();
 
//stone.display();
  drawSprites();
 
}



