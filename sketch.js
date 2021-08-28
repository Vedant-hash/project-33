var bg;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world
function preload(){
bg = loadImage("snow3.jpg")
}

function setup() {
createCanvas(1800,800);
engine=Engine.create();
world=engine.world
}

function draw() {
background(bg);  
Engine.update(engine);
}
