window.onload=function(){
	
	function AAA(){
		document.getElementById("myDOG").src="001.jpg";
	}
	
	function BBB(){
		document.getElementById("myDOG").src="003.jpg";
	}
	
	document.getElementById("myDOG").onmouseover = BBB;
	document.getElementById("myDOG").onmouseout = AAA;
	
}

