var Enemy : GameObject;
var TimeBetween : float = 1; 
var trackTimer : float;

function Start () {
 

}

function Update () {
	
	trackTimer -= Time.deltaTime;
	if(trackTimer <=0){
		Instantiate(Enemy, transform.position, transform.rotation);
		trackTimer = TimeBetween;
	}
}