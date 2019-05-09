window.onload = function(){

	document.getElementById("TAB1").onmouseover=showIt;
	document.getElementById("TAB2").onmouseover=showIt;
	document.getElementById("TAB3").onmouseover=showIt;
	document.getElementById("TAB4").onmouseover=showIt;
	
	//第一個按鈕 網頁打開時一開始就先套用 NOWTAB 樣式
	document.getElementById("TAB1").className="NOWTAB";
	
	function showIt(){
		
		document.getElementById("BOX1").style.display="none";
		document.getElementById("BOX2").style.display="none";
		document.getElementById("BOX3").style.display="none";
		document.getElementById("BOX4").style.display="none";
		
		var N = this.id.substr(3);
		document.getElementById("BOX"+N).style.display="block";
		
		//先把 4 個按鈕的樣式清除掉
		document.getElementById("TAB1").className="";
		document.getElementById("TAB2").className="";
		document.getElementById("TAB3").className="";
		document.getElementById("TAB4").className="";
		
		//再把目前被摸到的按鈕套用 NOWTAB 樣式
		document.getElementById("TAB"+N).className="NOWTAB";

	}
}




