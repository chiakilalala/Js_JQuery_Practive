window.onload = function (){
	for (var i = 1; i <=4; i++) {
		document.getElementById("COURSE_"+i).onmouseover = SHOWSHOW;
		document.getElementById("COURSE_"+i).onmouseout = HIDEHIDE;
	}

	
	function SHOWSHOW(){
		var N = this.id.substr(7);
		document.getElementById("BOX_"+N).style.display = "block";
	}
	
	function HIDEHIDE(){
		var N = this.id.substr(7);
		document.getElementById("BOX_"+N).style.display = "none";
	}
	
}
