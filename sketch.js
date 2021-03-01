const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var stand

function preload(){
polygon_img = loadImage("polygon.png")



}


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    

    sling = new SlingShot(this.polygon,{x:100, y:200});
    imageMode(CENTER);
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
    block = new Box(600,20,10,50);
    stand = new Stand(600, 500, 10, 70);



}

function draw(){
    background(0);
    Engine.update(engine);

    stand.display();
    sling.display();
    block.display();
    
   //ellispeMode(CENTER);
   // ellispe()


} 