#pragma strict

var immune:Rigidbody;
var health:Rigidbody;
var score:Rigidbody;
//var score10:Rigidbody;

function generateObjects()
{
		//infinite loop (on purpose)
		while(true)
		{
			yield WaitForSeconds(5.0);
			Instantiate(health,Vector3(transform.position.x +5,Random.Range(0,1),1),transform.rotation);
			
			yield WaitForSeconds(9.0);
			Instantiate(score,Vector3(transform.position.x +5,Random.Range(0,1),1),transform.rotation);
			
			//yield WaitForSeconds(1.0);
			//Instantiate(score10,Vector3(transform.position.x +5,Random.Range(0,1),1),transform.rotation);
			
			yield WaitForSeconds(1.0);
			Instantiate(immune,Vector3(transform.position.x +5,Random.Range(0,1),1),transform.rotation);
			
		}
}

function Start () {
yield StartCoroutine("generateObjects");
}

function Update () {

}