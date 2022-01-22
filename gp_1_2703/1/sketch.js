/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here
    

    fill(255,255,255);
    ellipse(300,100,100,80);
    ellipse(265,100,65,55);
    ellipse(335,100,65,55);
    

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here
    
	noStroke();
	fill(0,155,0);
    
    rect(450,275,150,250,45);
    triangle(380,432,450,432,450,318);
    triangle(590,300,600,450,700,450); 

	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	//... add your code here
    
    fill(184,134,11);
    rect(800,370,25,100);
    fill(0,155,0);
    triangle(750,400,800,400,800,360);
    triangle(760,425,800,425,800,380);
    triangle(825,400,875,400,825,360);
    triangle(825,425,860,425,825,380);
    ellipse(812,380,50,50);

	noStroke();
	fill(255);
	text("tree", 800, 346);
    

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here
    
    fill(222,184,135,230);
    triangle(100,576,175,432,380,432);
    triangle(110,576,200,576,390,432);

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
    
    c=String.fromCharCode(42);
    textAlign(CENTER,CENTER);
    textSize(100);
    text(c,475,420);
    textSize(12);
    

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
