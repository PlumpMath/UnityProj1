var positionAngle : float;
var lastAngle: float= 180;

function Start () {

}

function Update () {
	
	positionAngle = Input.GetAxis("Horizontal");
	var mainRotation = Quaternion.Euler(0,180,0);
	var rotation = Quaternion.Euler(0,210,0);
	var Mrotation = Quaternion.Euler(0,150,0);
	
	if(positionAngle < 0 )
		transform.rotation = Quaternion.Slerp(transform.rotation, Mrotation, Time.deltaTime * 0.5 );
		lastAngle = 150;
	
	if(positionAngle > 0)
		transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * 0.5);
		lastAngle = 210;
		
	if(positionAngle == 0)
		transform.rotation = Quaternion.Slerp(transform.rotation, mainRotation, Time.deltaTime * 0.5);
	
	

}