window.onload=function(){
	
	var N = 1;
	
	document.getElementById("FLOWER").src="images/photo" + N + ".jpg";
	
	document.getElementById("FLOWER").onclick = CHANGE;
	
	function CHANGE(){
		
		if( N < 8 ){
			N += 1;
		}else{
			N = 1;	
		}
		
		document.getElementById("FLOWER").src="images/photo" + N + ".jpg";
		
	}
	
}

