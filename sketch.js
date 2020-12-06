const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2;




function preload(){

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1=new Ground(100,300,200,10);
    ground1.shapeColor("brown");
}

function draw(){
    background(1);
    Engine.update(engine);
    ground1.display();
   
}
