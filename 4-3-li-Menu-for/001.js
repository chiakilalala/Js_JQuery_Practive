window.onload=function(){
	
	for(var i=1; i<=5; i++){
		
		document.getElementById("MENU"+i).onmouseover = SHOWSHOW;
		
		document.getElementById("MENU"+i).onmouseout = OUTOUT;
	
	}
	
	function SHOWSHOW(){
		var nowID = this.id.substr(4);
		document.getElementById("SUB"+nowID).style.display = "block";		
	}
	
	function OUTOUT(){
		var nowID = this.id.substr(4);
		document.getElementById("SUB"+nowID).style.display = "none";
		
	}
}



