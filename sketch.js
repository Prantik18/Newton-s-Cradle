const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

//function preload(){
//}

function setup(){
createCanvas(800,700);

engine = Engine.create();
world = engine.world;

//creating bodies
bob1 = Bodies.circle(350,400,100);
bob2 = Bodies.circle(400,400,100);
bob3 = Bodies.circle(450,400,100);
bob4 = Bodies.circle(500,400,100);
bob5 = Bodies.circle(550,400,100);

rope1 = new Rope(bob1.body,{x:350,y:100});
rope2 = new Rope(bob2.body,{x:400,y:100});
rope3 = new Rope(bob3.body,{x:450,y:100});
rope4 = new Rope(bob4.body,{x:500,y:100});
rope5 = new Rope(bob5.body,{x:550,y:100});

roof = new Roof(450,100,300,20);




Engine.run(engine);
}

function draw(){
rectMode(CENTER);	
ellipseMode(CENTER);
background(240,128,128);

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

roof.display();

drawSprites();

}

function keyPressed(){

if(keyCode === LEFT_ARROW){
Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-30,y:155});

}

}