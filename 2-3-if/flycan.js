window.onload=function(){
	
	document.getElementById("SS1").onclick=SHOWSHOW;
	document.getElementById("SS2").onclick=SHOWSHOW;
	document.getElementById("SS3").onclick=SHOWSHOW;
	document.getElementById("SS4").onclick=SHOWSHOW;
	document.getElementById("SS5").onclick=SHOWSHOW;
	document.getElementById("SS6").onclick=SHOWSHOW;
	
	var BIG = document.getElementById("BIG");
	
	function SHOWSHOW(){
		
		if(this.id=="SS1"){
			BIG.src = "images/001.jpg";
		}
		
		if(this.id=="SS2"){
			BIG.src = "images/002.jpg";
		}
		
		if(this.id=="SS3"){
			BIG.src = "images/003.jpg";
		}
		
		if(this.id=="SS4"){
			BIG.src = "images/004.jpg";
		}
		
		if(this.id=="SS5"){
			BIG.src = "images/005.jpg";
		}
		
		if(this.id=="SS6"){
			BIG.src = "images/006.jpg";
		}
		
	}

}

