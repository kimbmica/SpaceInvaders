#pragma strict

static var leftmost:float;
static var rightmost:float;
static var topmost:float;
static var bottommost:float;

function Start ()
{

}

function Update ()
{
	//calculate borders
	//leftmost border
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	
	//rightmost border.  The X position of the right most border RELATIVE to the center.
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	
	/*
	//topmost border.  The Y position of the top most border RELATIVE to the center.
	topmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
	
	//bottommost border.  The Y position of the bottom most border RELATIVE to the center.
	bottommost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;
	*/
}


static function EnableBorders(object:Transform)
{
	//if the object stays the left of the screen
	if (object.position.x < leftmost + 3)
	{
		object.position.x = leftmost + 3;
	}

	//if object stays to the right of the screen
	if (object.position.x > rightmost - 3)
	{
		object.position.x = rightmost - 3;
	}
}