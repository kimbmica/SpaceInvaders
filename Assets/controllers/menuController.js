#pragma strict

var logo:Texture2D;
var mystyle:GUISkin;

function Start ()
{

}

function Update ()
{

}

function OnGUI()
{
	GUI.skin = mystyle; //corresponding to the variable at the top
	
	GUILayout.BeginArea(Rect(Screen.width/2-100,Screen.height/2-50,200,200));
	
	if (GUILayout.Button("NEW GAME"))
	{
		Application.LoadLevel(7);
	}
	
	if (GUILayout.Button("HELP"))
	{
		Application.LoadLevel(10);
	}
	
	if (GUILayout.Button("EXIT"))
	{
		Application.Quit();
	}
	
	GUILayout.EndArea();
}