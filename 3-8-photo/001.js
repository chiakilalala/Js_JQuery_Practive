window.onload=function(){
	
	//宣告變數，用來記錄現在是第一張。
var N =1;
document.getElementById("BOX").onmouseover= SHOWSHOW;
document.getElementById("BOX").onmouseout= HIDEHIDE;
document.getElementById("BOX").onclick= NEXT;

	function SHOWSHOW(){
		document.getElementById("TITLE").style.display="block";
		document.getElementById("TITLE").innerHTML=N;
	}
	function HIDEHIDE(){
		document.getElementById("TITLE").style.display="none";
	}
	function NEXT(){
		if (N<8) {
			  N+=1;
		} else {
			  N=1;
		}
		document.getElementById("TITLE").innerHTML=N;//數字換掉
		document.getElementById("PIC").src="images/FLY_"+N+".jpg";//照片換掉
	}
}

