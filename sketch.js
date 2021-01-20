//Global Variables
var gameState = 0;
var player;
var coronaGroup;
var maskGroup,sanitizerGroup,ppeGroup;


function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

	player = createSprite(50,height/2,10,10);
	player.shapeColor = "red";

	

	
	coronaGroup = new Group();
	maskGroup = new Group();
	sanitizerGroup = new Group();
	ppeGroup = new Group();
	


	

	


	
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  if(frameCount % 31 === 0){
	createAllies();
  }

  createCorona();

  
  drawSprites();
 
}

