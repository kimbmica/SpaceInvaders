#pragma strict

var healthBoost:Rigidbody;

function Start ()
{
	InvokeRepeating("createHealthboost",6.0,8.0);
}

function Update () {

}

function createHealthboost()
{
	Instantiate(healthBoost,Vector3(borderController.bottommost,0,1),Quaternion.identity);
}