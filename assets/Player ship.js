var PlayerSpeed : float = 10;
var MaxWidth : float = 8;
var MaxHeight : float = 18;

var Bullet : GameObject;
var BulletSpawn : Transform;
var bulletPs : float;

var explosion: GameObject;
var restarter: GameObject;

function Start (){
	
}

function Update (){
	transform.position.z += Input.GetAxis("Vertical") * PlayerSpeed * Time.deltaTime;	
	if(transform.position.z > MaxHeight)
		transform.position.z = MaxHeight;
	if(transform.position.z < 0)
		transform.position.z = 0;


	
	transform.position.x += Input.GetAxis("Horizontal") * PlayerSpeed * Time.deltaTime;	
	if(transform.position.x > MaxWidth)
		transform.position.x = MaxWidth;
	if(transform.position.x < -MaxWidth)
		transform.position.x = -MaxWidth;
	
	bulletPs -= Time.deltaTime;
	if(bulletPs <= 0 && Input.GetButtonDown("Jump")){
		Instantiate(Bullet, BulletSpawn.position, BulletSpawn.rotation);
		bulletPs = 0.05;
		}
}

function OnTriggerEnter(other : Collider){
	if (other.tag == "Enemy")
	{
		Instantiate(explosion, transform.position, transform.rotation);
		Instantiate(restarter, transform.position, transform.rotation);
		Destroy(gameObject);
	}	
}