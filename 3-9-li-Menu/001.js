window.onload=function(){
	for (var i =1;i <=5;i++) {
		document.getElementById("MENU"+i).onmouseover =SHOWSHOW;	
		document.getElementById("MENU"+i).onmouseout =HIDEHIDE;
	}


	function SHOWSHOW(){
		var NOWid = this.id.substr(4);
		document.getElementById("SUB"+NOWid).style.display ="block";
	}
	function HIDEHIDE(){
		var NOWid = this.id.substr(4);
		document.getElementById("SUB"+NOWid).style.display ="none";
	}
}
