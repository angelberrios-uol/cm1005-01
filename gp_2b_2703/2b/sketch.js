/*

The Game Project

2b - using variables

*/

var width;
var height;

var floorPos_y;

var gameChar_x;
var gameChar_y;

var tree;
var treePos_x;
var treePos_y;

var canyon;
var x_pos;
var c_width;
var collectable;

var mountain;
var clouds;


function setup()
{
    width = 1024;
    height = 576
	createCanvas(width, height);
	floorPos_y = 432; //NB. we are now using a variable for the floor position
    
    c=String.fromCharCode(42);

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2 +25;
	treePos_y = height/2 +25;
    
	//initalise the tree object
	tree = {
		x: treePos_x,
		y: treePos_y,
		trunkWidth: 40,
		trunkHeight: 150,
		canopyWidth: 120,
		canopyHeight: 110
	};
    canyon = {
        x_pos: 905,
        c_width: 300
    };
    collectable = {
        x_pos: 720, 
        y_pos: 400, 
        size: 75
    };
    clouds = {
        x_pos: 300,
        y_pos: 100,
        width: 65,
        height: 55
    }
    
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
//	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
    rect(0, floorPos_y, width - canyon.c_width - 120, height); //draw some green ground
            
    mountain1 = {
		x: 600,
		y: floorPos_y,
		height: 420,
		width: 230
	};
	mountain2 = {
		x: 750,
		y: floorPos_y,
		height: 275,
		width: 130
	};
    
    //draw the canyon
    fill(222,184,135,230);
    triangle(canyon.x_pos - canyon.c_width, height, width,floorPos_y + 10, width, height);
    triangle(canyon.x_pos - canyon.c_width, floorPos_y, width,floorPos_y, canyon.x_pos - canyon.c_width, height - 10);
    
	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
    
	//draw the tree ...  
    fill(218,165,32);
    rect(tree.x, tree.y, tree.trunkWidth, tree.canopyWidth);
    fill(34,139,34);
    ellipse(tree.x + tree.trunkWidth/2, tree.y - tree.trunkHeight/3, tree.canopyWidth, tree.canopyHeight);

    //draw the clouds
    fill(255,255,255);
    ellipse(clouds.x_pos,clouds.y_pos,clouds.width + 35,clouds.width + 25);
    ellipse(clouds.x_pos - 35,clouds.y_pos,clouds.width,clouds.height);
    ellipse(clouds.x_pos + 35,clouds.y_pos,clouds.width,clouds.height);
    
    //Collectable
    fill(255,215,0,240);
    textAlign(CENTER,CENTER);
    textSize(collectable.size);
    text(c,collectable.x_pos,collectable.y_pos);

    //draw character
    fill(255,222,173,240);    
    ellipse(gameChar_x, gameChar_y - 63, 20, 25);
    rect(gameChar_x - 12, gameChar_y - 50, 25, 35);
    rect(gameChar_x - 12, gameChar_y - 15, 8, 18);
    rect(gameChar_x + 5, gameChar_y - 15, 8, 18);
    ellipseMode(CORNERS);
    ellipse(gameChar_x - 25,gameChar_y - 27,gameChar_x + 25, gameChar_y - 42);
    ellipseMode(CENTER);

    
}

function mousePressed()
{
    
    gameChar_x = mouseX
    gameChar_y = mouseY

}
