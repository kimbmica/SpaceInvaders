#pragma strict

var laserSpeed:int;

var detonator:GameObject;

static var bossHealth: int = 50; //to be used in another script

function Start ()
{

}

function Update ()
{
	transform.Translate(Vector3.up * laserSpeed * Time.deltaTime);	
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="alien")
	{
		spaceshipController.score++;
		//destroy the alien
		Destroy(other.gameObject);
		//destroy the laser
		Destroy(this.gameObject);
		spaceshipController.shotshit++;
		//retrieves the variable from the mentioned javascript
		alienGenerator.aliencount--;
		//reduces the variable from when the laser hits the alien
		Instantiate(detonator,transform.position,Quaternion.identity);
		//to animate the detonator
	}
	else
	{
		if(other.gameObject.tag=="boss")
		{
			spaceshipController.score = spaceshipController.score+5;
			bossHealth--;
			Destroy(this.gameObject);
			spaceshipController.shotshit++;
		}
	}
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}