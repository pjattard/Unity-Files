#pragma strict

var speedOfbullet:int;

function Start () {
}
function Update () {
	transform.Translate(Vector3.right * speedOfbullet * Time.deltaTime);
}
function OnTriggerEnter(objectHit:Collider)
{
	if ( objectHit.gameObject.tag == "zombie")
	{	
		Destroy(objectHit.gameObject);
		
		Destroy(this.gameObject);
		
		PlayerController.score++;
	}
	
	
}


function OnBecameInvisible ()
{
	Destroy(this.gameObject);
}