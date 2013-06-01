#pragma strict

static var username = "";
var checkname: boolean = false;
var mystyle:GUISkin;

function Start ()
{

}

function Update ()
{

}

function OnGUI()
{
	GUI.skin = mystyle;
	
	GUILayout.BeginArea(Rect(Screen.width/2-100,Screen.height/2-50,200,200));
	
	//If user presses on the button but the name is empty, it will remain on the same screen
	GUILayout.BeginVertical();
	GUILayout.Label("Press spacebar to shoot the aliens");
	GUILayout.FlexibleSpace();
	GUILayout.Label("Move left and right using the arrow keys");
	GUILayout.FlexibleSpace();
	GUILayout.EndVertical();
		
	if (GUILayout.Button("MAIN MENU"))
	{
		Application.LoadLevel(0);
	}
	
	if (GUILayout.Button("EXIT"))
	{
		Application.Quit();
	}
	
	GUILayout.EndArea();
}