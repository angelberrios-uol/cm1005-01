/*

The Game Project

Week 3

Game interaction

*/


var width;
var height;

var gameChar_x;
var gameChar_y;
var floorPos_y;
var keyCode;

var isLeft=false;
var isRight=false;
var trunkWidth=40;
var trunkHeight=150;

var canopyWidth=120;
var canopyHeight=110;
var treePos_y;
var trees_x;

var clouds_y=100;
var clouds_width=65;
var clouds_height=55;

var mountain_width=230;
var mountain_height=275;

var canyon_width=300;

function setup()
{	
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	treePos_y = height/2 +25;
	// Initialize array of trees objects
	trees_x = [200,400,600,900];
	clouds_x = [100,300,600,800];
	mountains_x =[300,600,750,850];
	canyon_x = [905]
}


function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
	
	for(var k = 0; k < mountains_x.length; k++)
		{
			fill(120);
			triangle(mountains_x[k], floorPos_y, mountains_x[k] + mountain_width, floorPos_y, mountains_x[k] + (mountain_width / 2), floorPos_y - mountain_height);
		}
	for(var i = 0; i < trees_x.length; i++)
		{
			fill(218,165,32);
			rect(trees_x[i], treePos_y, trunkWidth, canopyWidth);
			fill(34,139,34);
			ellipse(trees_x[i] + trunkWidth/2, treePos_y - trunkHeight/3, canopyWidth, canopyHeight);
		}
	for(var j = 0; j < clouds_x.length; j++)
		{
			fill(255,255,255);
    		ellipse(clouds_x[j],clouds_y,clouds_width + 35,clouds_width + 25);
    		ellipse(clouds_x[j] - 35,clouds_y,clouds_width,clouds_height);
    		ellipse(clouds_x[j] + 35,clouds_y,clouds_width,clouds_height);
		}
	for(var l = 0; l < canyon_x.length; l++)
		{
			fill(222,184,135,230);
    		triangle(canyon_x[l] - canyon_width, height, width, floorPos_y + 10, width, height);
    		triangle(canyon_x[l] - canyon_width, floorPos_y, width,floorPos_y, canyon_x[l] - canyon_width, height - 10);
		}

    
	//the game character
	// add your standing front facing code
    ellipse(gameChar_x, gameChar_y - 63, 20, 25);
    rect(gameChar_x - 12, gameChar_y - 50, 25, 35);
    rect(gameChar_x - 12, gameChar_y - 15, 8, 18);
    rect(gameChar_x + 5, gameChar_y - 15, 8, 18);
    ellipseMode(CORNERS);
    ellipse(gameChar_x - 25,gameChar_y - 27,gameChar_x + 25, gameChar_y - 42);
    ellipseMode(CENTER);

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	
	if (isLeft == true)
	{
		gameChar_x -= 1;
	}
	if (isRight == true)
	{
		gameChar_x += 1;
	}	

}

function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.    
    if (keyCode == 39)
    {
        isRight=true;        
    }
    if (keyCode == 37)
    {
        isLeft=true;
    }

}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
    if(keyCode == 39)
    {
        isRight=false;
    }

    if(keyCode == 37)
    {
        isLeft=false;
	}
    
}
