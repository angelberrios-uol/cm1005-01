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
var isJump=false;
var isFalling=false;
var isPlummeting=false;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
        fill(0,0,0,220);
        ellipse(gameChar_x, gameChar_y - 63, 17, 25);
        rect(gameChar_x - 12, gameChar_y - 50, 25, 35);
        rect(gameChar_x - 12, gameChar_y - 15, 8, 10);
        rect(gameChar_x + 5, gameChar_y - 15, 8, 10);
        ellipseMode(CORNERS);
        ellipse(gameChar_x - 25, gameChar_y - 27,gameChar_x + 15, gameChar_y - 42);
        ellipseMode(CENTER);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        fill(0,0,0,220);
        ellipse(gameChar_x, gameChar_y - 63, 17, 25);
        rect(gameChar_x - 12, gameChar_y - 50, 25, 35);
        rect(gameChar_x - 12, gameChar_y - 15, 8, 10);
        rect(gameChar_x + 5, gameChar_y - 15, 8, 10);
        ellipseMode(CORNERS);
        ellipse(gameChar_x - 15, gameChar_y - 27,gameChar_x + 25, gameChar_y - 42);
        ellipseMode(CENTER);      
	}
	else if(isLeft)
	{
		// add your walking left code
        ellipse(gameChar_x, gameChar_y - 63, 20, 25);
        rect(gameChar_x - 12, gameChar_y - 50, 25, 35);
        rect(gameChar_x - 12, gameChar_y - 15, 8, 18);
        rect(gameChar_x + 5, gameChar_y - 15, 8, 18);
        ellipseMode(CORNERS);
        ellipse(gameChar_x - 25, gameChar_y - 27,gameChar_x + 15, gameChar_y - 42);
        ellipseMode(CENTER);
	}
	else if(isRight)
	{
		// add your walking right code
        ellipse(gameChar_x, gameChar_y - 63, 20, 25);
        rect(gameChar_x - 12, gameChar_y - 50, 25, 35);
        rect(gameChar_x - 12, gameChar_y - 15, 8, 18);
        rect(gameChar_x + 5, gameChar_y - 15, 8, 18);
        ellipseMode(CORNERS);
        ellipse(gameChar_x - 15, gameChar_y - 27,gameChar_x + 25, gameChar_y - 42);
        ellipseMode(CENTER);
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        fill(0,0,0,220);
        ellipse(gameChar_x, gameChar_y - 63, 17, 25);
        rect(gameChar_x - 12, gameChar_y - 50, 25, 35);
        rect(gameChar_x - 12, gameChar_y - 15, 8, 10);
        rect(gameChar_x + 5, gameChar_y - 15, 8, 10);
        ellipseMode(CORNERS);
        ellipse(gameChar_x - 25, gameChar_y - 27, gameChar_x + 25, gameChar_y - 42);
        ellipseMode(CENTER);
	}
	else
	{
		// add your standing front facing code
        ellipse(gameChar_x, gameChar_y - 63, 20, 25);
        rect(gameChar_x - 12, gameChar_y - 50, 25, 35);
        rect(gameChar_x - 12, gameChar_y - 15, 8, 18);
        rect(gameChar_x + 5, gameChar_y - 15, 8, 18);
        ellipseMode(CORNERS);
        ellipse(gameChar_x - 25,gameChar_y - 27,gameChar_x + 25, gameChar_y - 42);
        ellipseMode(CENTER);
 

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    
        if ((isRight) && (gameChar_x < width)) 
            {
                gameChar_x=gameChar_x+2;
            }
        else if ((isLeft) && (gameChar_x > 0))
            {
                gameChar_x=gameChar_x-2;     
            }
        else if ((isJump) && (gameChar_y == floorPos_y))
            {
                gameChar_y=gameChar_y-100;
            }
        else if ((isFalling) && (isRight) && (gameChar_x < width))
            {
                gameChar_x=gameChar_x+2;
                gameChar_y=gameChar_y+10;
            }
        else if ((isFalling) && (isLeft) && (gameChar_x > 0)) 
            {
                gameChar_x=gameChar_x-2;
                gameChar_y=gameChar_y+10;
            }    
        else if (gameChar_y < floorPos_y) 
        {
                isFalling=true;
                gameChar_y = gameChar_y + 5;
        }
        else  
        {
                isFalling=false;
        }
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	//console.log("keyPressed: " + key);
	//console.log("keyPressed: " + keyCode);
    
    if (keyCode == 39)
    {
        isRight=true;
//        console.log("key pressed right " + isRight);        
    }

    if (keyCode == 37)
    {
        isLeft=true;
//        console.log("key pressed left " + isLeft);
    }

    if (keyCode == 32)
    {
        isJump=true;
//        console.log("is jumping ");
    }

    
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

//	console.log("keyReleased: " + key);
//	console.log("keyReleased: " + keyCode);
    
    if(keyCode == 39)
    {
        isRight=false;
//        console.log("key Released right " + isRight);
    }

    if(keyCode == 37)
    {
        isLeft=false;
//        console.log("key Released left " + isLeft);
    }
    
    if(keyCode == 32)
    {
        isJump=false;
 //       console.log("key Released left " + isFalling);      
    }

    
    
    
}
