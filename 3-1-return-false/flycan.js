window.onload=function(){
	
	document.getElementById("COLOR1").onclick = CHANGE;
	document.getElementById("COLOR2").onclick = CHANGE;
	document.getElementById("COLOR3").onclick = CHANGE;
	document.getElementById("COLOR4").onclick = CHANGE;
	document.getElementById("COLOR5").onclick = CHANGE;
	
	function CHANGE(){
		
		if(this.id=="COLOR1"){
			document.getElementById("CUP").src = "cup1.jpg";
		}
		if(this.id=="COLOR2"){
			document.getElementById("CUP").src = "cup2.jpg";
		}
		if(this.id=="COLOR3"){
			document.getElementById("CUP").src = "cup3.jpg";
		}
		if(this.id=="COLOR4"){
			document.getElementById("CUP").src = "cup4.jpg";
		}
		if(this.id=="COLOR5"){
			document.getElementById("CUP").src = "cup5.jpg";
		}
		
		return false;
		//取消超連結的預設功能，只會執行我們寫好的 JavaScript 程式。
	}
}

