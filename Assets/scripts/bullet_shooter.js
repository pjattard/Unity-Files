#pragma strict

var bulletToShoot:Rigidbody;

function Start () {

}

function Update () {

	if(Input.GetKeyDown(KeyCode.Keypad1))
	{
		Instantiate(bulletToShoot,transform.position,Quaternion.identity);
	}
	
	
	if(Input.GetKeyDown(KeyCode.Keypad1))
	{
		if(!audio.isPlaying)
		{
			audio.Play();
		}
	}
	

	
	
}
