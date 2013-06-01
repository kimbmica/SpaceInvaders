#pragma strict

function Start ()
{
	transform.position.x = Random.Range(borderController.rightmost,borderController.leftmost);
	transform.position.y = -8;
}

function Update ()
{
	borderController.EnableBorders(this.transform);
}