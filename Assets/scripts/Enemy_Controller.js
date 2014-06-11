#pragma strict

var enemylaser:Rigidbody;

function shootLaser()
{
	Instantiate(enemylaser,transform.position,transform.rotation);
}


function Start () {
	InvokeRepeating("shootLaser",1.0,4.0);
}

function Update () {

}