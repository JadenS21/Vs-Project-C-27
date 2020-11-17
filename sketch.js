const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var hanger,floor;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var string1,string2,string3,string4,string5;


function setup() {
    var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    
  pendulum1 = new Pendulum(200,500,50);
	pendulum2 = new Pendulum(300,500,50);
	pendulum3 = new Pendulum(width/2,500,50);
	pendulum4 = new Pendulum(500,500,50);
	pendulum5 = new Pendulum(600,500,50);
	
  hanger = new Hanger(width/2,150,500,50);
  floor = new Hanger(width/2,height,width,10);
  
  string1 = new String(pendulum1.body,{x:200, y:150})
  string2 = new String(pendulum2.body,{x:300, y:150})
  string3 = new String(pendulum3.body,{x:400, y:150})
  string4 = new String(pendulum4.body,{x:500, y:150})
  string5 = new String(pendulum5.body,{x:600, y:150})
  
  console.log(pendulum1);
  console.log(pendulum5);
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  
  hanger.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  
  ellipseMode(RADIUS);
  //ellipse(pendulum1.position.x, pendulum1.position.y, 20, 20);
  
  drawSprites();
}