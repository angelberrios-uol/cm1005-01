/*

The Game Project

Week 3

Game interaction

*/


var width;
var height;

var c;
var distance;

var gameChar_x;
var gameChar_y;
var floorPos_y;
var keyCode;

var isLeft=false;
var isRight=false;
var isJump=false;
var isFalling=false;
var isPlummeting=false;
var isFound=false;

var collectable;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    c=String.fromCharCode(42);    
    collectable = {
        x_pos: 720, 
        y_pos: 350, 
        size: 75,
        isFound: false
    };
	
	canyon = {
        x_pos: 905,
        c_width: 300,
		x_start: 605
    };
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    
    //Draw the Collectable
    if (isFound == false)
        {
            fill(255,215,0,240);
            textAlign(CENTER,CENTER);
            textSize(collectable.size);
            text(c,collectable.x_pos,collectable.y_pos); 
        }
    // Disapear collectable
    if ((dist(gameChar_x,gameChar_y,collectable.x_pos,collectable.y_pos) < 10 )) 
        {
            isFound=true;
        }

	//draw the canyon
    fill(222,184,135,230);
    triangle(canyon.x_pos - canyon.c_width, height, width,floorPos_y + 10, width, height);
    triangle(canyon.x_pos - canyon.c_width, floorPos_y, width,floorPos_y, canyon.x_pos - canyon.c_width, height - 10);

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
	
		if (isPlummeting==true)
			{
				gameChar_y = gameChar_y + 50;
//				isPlummeting = false;
			}
	
		console.log(isPlummeting);
		console.log(gameChar_x);
    
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
        else if ((gameChar_y < floorPos_y) && ((gameChar_x < 605) && (gameChar_x > 705)))
        {
                isFalling=true;
                gameChar_y = gameChar_y + 5;
        }
		else if (((gameChar_x >= 605) && (gameChar_x <= 705)) && (isPlummeting=false))
			{
				isPlummeting=true			
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
