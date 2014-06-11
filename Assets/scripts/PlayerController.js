#pragma strict

//declare an animator object
private var anim:Animator;
private var OnGround:boolean;
static var lives:int;
static var score:int;
var godmode:boolean;

function OnGUI()
{
//	GUI.skin=text;
	//label used to show score
	GUI.Label(Rect(10,5,100,50),"Score: "+score);
	GUI.Label(Rect(10,20,100,50),"Lives: "+lives);

}

function OnTriggerExit(other:Collider)
{
	if (other.gameObject.tag == "health")
	{	
		Destroy(other.gameObject);
		
		lives++;
	}
	
}

function OnTriggerEnter(other:Collider)
{
	if ((other.gameObject.tag=="zombie") && (godmode==false))
	{
		Destroy(other.gameObject);
		lives--;
	}
	
	if (other.gameObject.tag == "health")
	{	
		Destroy(other.gameObject);
		
		lives++;
	}
	
	if (other.gameObject.tag == "score")
	{	
		Destroy(other.gameObject);
		
		score = score+5;
	}
	
	/*if (other.gameObject.tag == "score10")
	{	
		Destroy(other.gameObject);
		
		score = score+10;
	}*/
	
	if (other.gameObject.tag == "immune")
	{	
		Destroy(other.gameObject);
		
		godmode = true;
		resetGodMode();
	}
	
	if ((other.gameObject.tag=="zombie") && (godmode==true))
	{
		Destroy(other.gameObject);
	}
	
	if ((other.gameObject.tag=="ZombieBullet") && (godmode==true))
	{
		Destroy(other.gameObject);
	}
	
	
}


function resetGodMode()
{
	GameObject.FindGameObjectWithTag("light").GetComponent(Light).color = Color.red;
	yield WaitForSeconds(10);
	GameObject.FindGameObjectWithTag("light").GetComponent(Light).color = Color.white;
	godmode = false;
}


function Start()
{
	lives=3;
	//get the animation compenment of the player at the START of the game 

		anim = GetComponent (Animator);
		
	godmode=false;
}

function Update () {


	//checkscore();
	//falling
//	Debug.Log(lives);
	
	if (lives <=0){
	Destroy(this.gameObject);
	Application.LoadLevel(2); // 0 = MENU / 1 = WON / 2 = LOST / 3 = LVL1
	}
	
	
	transform.Translate(Vector3.right * 5 * Input.GetAxis("Horizontal") * Time.deltaTime);

	//by default,stay in idle state 
	anim.SetBool("movingRight",true);
	anim.SetBool("movingLeft",false);
	
	//pressing left arow moves the character to the left 
	if (Input.GetAxis("Horizontal") < 0)
	{
		anim.SetBool("movingLeft",true);
	}
	
	if (Input.GetAxis("Horizontal") > 0)
	{
		anim.SetBool("movingLeft",false);
	}
	
	if (Input.GetKey(KeyCode.W))
	{
		transform.position.z = 2;
	}
	else{
		transform.position.z = 1;
	}

	
	if (score >=20){
	score = 0;
	Destroy(this.gameObject);
	Application.LoadLevel(1); // 0 = MENU / 1 = WON / 2 = LOST / 3 = LVL1
	}
	
	
}
	/*if (Input.GetKeyDown (KeyCode.Space))
	{
		if(OnGround == true)
			{
			Debug.Log("test");
			rigidbody.AddForce(Vector3(0,1000,0));
			}
	}*/
	
	







