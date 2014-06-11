#pragma strict

var bulletToShoot2:Rigidbody;

function Start () {

}

function Update () {

	if(Input.GetKeyDown(KeyCode.Keypad2))
	{
		Instantiate(bulletToShoot2,transform.position,Quaternion.identity);
	}

	
	if(Input.GetKeyDown(KeyCode.Keypad2))
	{
		if(!audio.isPlaying)
		{
			audio.Play();
		}
	}
	

	
	
}

