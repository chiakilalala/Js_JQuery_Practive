window.onload=function(){
	
	document.getElementById("box1").onmouseover = SHOWSHOW;
	document.getElementById("box2").onmouseover = SHOWSHOW;
	document.getElementById("box3").onmouseover = SHOWSHOW;
	document.getElementById("box4").onmouseover = SHOWSHOW;
	
	var MSG = document.getElementById("box-msg");
	
	function SHOWSHOW(){
		if(this.id=="box1"){
			MSG.innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
		}
		if(this.id=="box2"){
			MSG.innerHTML = "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
		}
		if(this.id=="box3"){
			MSG.innerHTML = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
		}
		if(this.id=="box4"){
			MSG.innerHTML = "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD";
		}
	}
}

