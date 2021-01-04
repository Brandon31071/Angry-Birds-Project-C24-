const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,Ground;

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    box1=new box(80,90,20,20);
    box2=new box(100,100,30,30);

    Ground=new ground(200,390,400,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    Ground.display();
}