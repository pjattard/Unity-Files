#pragma strict

var speedOfLaser:int;

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag == "player")
	{
		PlayerController.lives --;
		
		Destroy(this.gameObject);
		
		if (PlayerController.lives <= 0)
		{	
			Application.LoadLevel(2);// 0 = MENU / 1 = WON / 2 = LOST / 3 = LVL1
				
			Destroy(other.gameObject);
		}
	}
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

function Start () {

}


function Update () {
	transform.Translate(Vector3.left * speedOfLaser * Time.deltaTime);
}