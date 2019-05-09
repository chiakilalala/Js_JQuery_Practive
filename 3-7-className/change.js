window.onload=function(){
	
	document.getElementById("A").onclick = getA;
	document.getElementById("B").onclick = getB;
	document.getElementById("C").onclick = getC;
	
	function getA(){
		document.getElementById("CONTENT").className = "";    //清除樣式
		document.getElementById("CONTENT").className = "AAA"; //套用樣式
	}
	
	function getB(){
		document.getElementById("CONTENT").className = "";
		document.getElementById("CONTENT").className = "BBB";
	}
	
	function getC(){
		document.getElementById("CONTENT").className = "";
		document.getElementById("CONTENT").className = "CCC";
	}
}

