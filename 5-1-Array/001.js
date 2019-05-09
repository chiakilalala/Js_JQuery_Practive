window.onload=function(){
	
	var MSG =new Array();
	
	MSG[0]="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
	MSG[1]="BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
	MSG[2]="CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
	MSG[3]="DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD";
	
	
	for(var i=0; i<4; i++){
		document.getElementById("box"+i).onmouseover=SHOWSHOW;
		document.getElementById("box"+i).onmouseout=OUTOUT;
	}
	
	function SHOWSHOW(){
		
		var N = this.id.substr(3);
		
		document.getElementById("box-msg").innerHTML = MSG[N];
		
	}
	
	function OUTOUT(){
		document.getElementById("box-msg").innerHTML = "飛肯設計學苑課程";
	}
}
