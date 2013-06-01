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
	
	//Display Enter Name and TextField in the middle of the screen
	
	
	//If user input a name, start the game
	if(checkname == true)
	{
		Application.LoadLevel(1);
		
	} else {
		//If user presses on the button but the name is empty, it will remain on the same screen
		GUILayout.BeginHorizontal();
		GUILayout.Label("ENTER NAME: ");
		username = GUILayout.TextField(username);
		GUILayout.FlexibleSpace();
		GUILayout.EndHorizontal();
		
		if(GUILayout.Button("NEW GAME"))
		{
			if(username == ""){
				checkname = false;				
			} else {
				checkname = true;
			}
		}
		
		if (GUILayout.Button("MAIN MENU"))
		{
			Application.LoadLevel(0);
		}
		
		if (GUILayout.Button("EXIT"))
		{
			Application.Quit();
		}
		}
		
		GUILayout.EndArea();
}
