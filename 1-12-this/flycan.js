window.onload=function(){
	
	document.getElementById("myDOG").onmouseover = BBB;
	document.getElementById("myDOG").onmouseout = AAA;
	
	function AAA(){
		this.src="001.jpg";
	}
	
	function BBB(){
		this.src="003.jpg";
	}
	
}

