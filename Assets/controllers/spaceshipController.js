#pragma strict

var laserSlot:Rigidbody;
static var score:int;
static var health:int; //static meaning the only one in the game
static var shotsfired:int;
static var shotshit:int;

var level:int;

var levelCounter:int;
var boost:boolean;
var speed:int;
var mystyle:GUISkin;

function Start ()
{
	health = 100;
	shotsfired = 0;
	shotshit = 0;
	score = 0;
	boost = false;
	DontDestroyOnLoad(this.gameObject);	
}

function Update ()
{
	borderController.EnableBorders(this.transform);
	transform.Translate(Vector3.right * speed * Input.GetAxis("Horizontal") * Time.deltaTime);
	
	//shoot the laser
	if(Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(laserSlot,transform.position,transform.rotation);
		shotsfired++;
	}
	
	if (health <= 0)
	{
		//game ends
		health = 0;
		Destroy(GameObject.FindGameObjectWithTag("spaceship"));
		Application.LoadLevel(8);
	}
	else
	{
		if(health > 100)
		{
			health = 100;
		}
	}
	
	if (levelCounter<6)
	{	
		var myAlienGenerator:alienGenerator;
		myAlienGenerator=GameObject.FindGameObjectWithTag("swarm").GetComponent(alienGenerator);
		
		if (myAlienGenerator.aliencount==0)
		{
			score = 0;
			level = Application.loadedLevel;
			levelCounter = level+1;
			Application.LoadLevel(levelCounter);
		}
	}
	else
	{
		if (laserController.bossHealth==0)
		{
			Destroy(GameObject.FindGameObjectWithTag("spaceship"));
			Application.LoadLevel(9);
		}
	}
}

function OnGUI()
{
	var shotsmissed:int;
	shotsmissed = shotsfired - shotshit;
	
	GUI.skin = mystyle;
	GUILayout.BeginArea(Rect(0,0,1024,40)); //x,y,width label,height label
	GUILayout.BeginHorizontal();
	GUILayout.Label("Name: "+nameController.username);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Score: "+score);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Health: "+health);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Shots Fired: "+shotsfired);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Shots Hit: "+shotshit);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Shots Missed: "+shotsmissed);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.EndArea();
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="enemylaser")
	{
		//player was hit, reduced health
		health--;
	}
	
	if(other.gameObject.tag=="healthboost")
	{
		if(health < 100)
		{
			health = health + 5;
		}
		Destroy(GameObject.FindGameObjectWithTag("healthboost"));
	}
	
	if(other.gameObject.tag=="speedboost")
	{
		Destroy(GameObject.FindGameObjectWithTag("speedboost"));
		boost = true;
		speed = 100;
		yield WaitForSeconds(5);
		
		boost = false;
		speed = 15;
	}
}
/*
function OnTriggerExit(other:Collider)
{
	//when the laser leaves the spaceship, set the colour back to green
	this.renderer.material = spaceshipColours[0];
}
*/