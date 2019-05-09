window.onload = function (){
	
	document.getElementById("COURSE_1").onclick = SHOWSHOW;
	document.getElementById("COURSE_2").onclick = SHOWSHOW;
	document.getElementById("COURSE_3").onclick = SHOWSHOW;
	document.getElementById("COURSE_4").onclick = SHOWSHOW;
	
	function SHOWSHOW(){
		
		if(this.id=="COURSE_1"){
			document.getElementById("BOX_1").style.display = "block";
		}
		if(this.id=="COURSE_2"){
			document.getElementById("BOX_2").style.display = "block";
		}
		if(this.id=="COURSE_3"){
			document.getElementById("BOX_3").style.display = "block";
		}
		if(this.id=="COURSE_4"){
			document.getElementById("BOX_4").style.display = "block";
		}
		
	}
}

