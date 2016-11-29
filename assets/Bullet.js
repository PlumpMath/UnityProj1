var BulletSpeed : float = 25;
var CountdownPos : float = 30;

var score : float = 0;



function Update () {
	transform.position.z += BulletSpeed * Time.deltaTime ; 
	if(transform.position.z >= CountdownPos)
		Destroy(gameObject);

}
function OnTriggerEnter(other : Collider){
	if (other.tag == "Enemy")
	{
		score = score + 100;
		Destroy(gameObject);
	}	
}