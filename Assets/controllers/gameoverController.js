#pragma strict

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
