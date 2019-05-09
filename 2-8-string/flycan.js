window.onload=function(){
	
	var N = 1;
	
	document.getElementById("FLOWER").src="images/photo" + N + ".jpg";
	
	document.getElementById("FLOWER").onclick = CHANGE;
	
	function CHANGE(){
		
		N += 1;
		
		document.getElementById("FLOWER").src="images/photo" + N + ".jpg";
		
	}
	
}

