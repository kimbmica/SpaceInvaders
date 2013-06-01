#pragma strict

var speedBoost:Rigidbody;

function Start ()
{
	InvokeRepeating("createSpeedboost",8.0,20.0);
}

function Update () {

}

function createSpeedboost()
{
	Instantiate(speedBoost,Vector3(borderController.bottommost,0,1),Quaternion.identity);
}