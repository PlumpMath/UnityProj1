var MoveSpeed : float = 8;
var killZPosition : float = -6 ;
var HorizontalRandom : float = 15;
var positionAngle: float;
var explosion: GameObject;

function Start () {

transform.position.x += Random.Range(HorizontalRandom , -HorizontalRandom);

}

function Update () {
	positionAngle = Input.GetAxis("Horizontal");
	transform.position.z -= MoveSpeed * Time.deltaTime * 0.9;
	
	if(positionAngle > 0)
		transform.position.z -= MoveSpeed * Time.deltaTime;
		transform.position.x -= MoveSpeed * Time.deltaTime * positionAngle * 0.9;
		
	if(positionAngle < 0)
		transform.position.z -= MoveSpeed * Time.deltaTime;
		transform.position.x -= MoveSpeed * Time.deltaTime * positionAngle * 0.9;
		
	if(transform.position.z <= killZPosition)
		Destroy(gameObject);
			
}

function OnTriggerEnter(other : Collider){
	if (other.tag == "Bullet")
	{
		Instantiate(explosion, transform.position, transform.rotation);
		Destroy(gameObject);
	}	
}