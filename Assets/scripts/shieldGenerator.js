#pragma strict

function Start () {

}

function Update () {
	Debug.Log(transform.position.z);
}

function OnTriggerEnter(other:Collider) {
if (other.collider.gameObject.tag == "zombie")
{
	Destroy(other.collider.gameObject);
	Destroy(this.gameObject);
}
}