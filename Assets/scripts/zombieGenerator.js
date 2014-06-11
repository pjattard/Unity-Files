#pragma strict
var zombie:Rigidbody;

function createzombie()
{
	var xposition:int;
	var yposition:int;
	var zposition:int;
	
	//random x position
	xposition = Random.Range(8,11);
	
	//random y position
	yposition = Random.Range(-1,-1);
	
	//random z position
	zposition = Random.Range(1,1);
	
	//make it relative to the position of the current gameobject
	xposition = transform.position.x + xposition;
	
	//make it relative to the position of the current gameobject
	zposition = transform.position.z + zposition;
	
	Instantiate(zombie,Vector3(xposition,yposition,1),Quaternion.identity);
}


function Start () {
	//wait for half a second, then repeat every second
	InvokeRepeating("createzombie",0.5,1.0);
}

function Update () {

}