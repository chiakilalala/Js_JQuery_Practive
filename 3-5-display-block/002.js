window.onload = function (){
	for (var i = 1;i <=4;i++) {
		document.getElementById("COURSE_"+i).onclick = SHOWSHOW;
		document.getElementById("COURSE_"+i).onmouseout = HIDEHIDE;
	}
	// document.getElementById("COURSE_1").onclick = SHOWSHOW;
	// document.getElementById("COURSE_2").onclick = SHOWSHOW;
	// document.getElementById("COURSE_3").onclick = SHOWSHOW;
	// document.getElementById("COURSE_4").onclick = SHOWSHOW;
	
	function SHOWSHOW(){
		
		var N = this.id.substr(7);
		
		document.getElementById("BOX_"+N).style.display = "block";
		
	}
	function HIDEHIDE(){
		
		var N = this.id.substr(7);
		
		document.getElementById("BOX_"+N).style.display = "none";
		
	}
}

