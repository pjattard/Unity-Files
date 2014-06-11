#pragma strict

function OnBecameInvisible()
{
	transform.position.x = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	
}


function Start () {

}

function Update () {

}