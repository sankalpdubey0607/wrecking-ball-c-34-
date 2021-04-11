const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
box1= new Box (900,100,50,50)
box2= new Box (900,100,50,50)
box3= new Box (900,100,50,50)
box4= new Box (900,100,50,50)
box5= new Box (900,100,50,50)
box6= new Box (900,100,50,50)

box7= new Box (950,100,50,50)
box8= new Box (950,100,50,50)
box9= new Box (950,100,50,50)
box10= new Box (950,100,50,50)
box11= new Box (950,100,50,50)
box12= new Box (950,100,50,50)

box13= new Box (1000,100,50,50)
box14= new Box (1000,100,50,50)
box15= new Box (1000,100,50,50)
box16= new Box (1000,100,50,50)
box17= new Box (1000,100,50,50)
box18= new Box (1000,100,50,50)

ball1= new Ball (600,270,50)
slingshot1=new SlingShot(ball1.body,{x:600,y:20})
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()

    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()

    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
 
    ball1.display()
    slingshot1.display()
}
function mouseDragged () {
Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
};