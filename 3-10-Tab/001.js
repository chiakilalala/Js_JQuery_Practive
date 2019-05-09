window.onload = function(){

	for (var i = 1 ;i <=4 ;i++) {
		document.getElementById("TAB"+i).onmouseover= showIT;	
		
	}

//第一個按鈕 網頁打開先討用NOWTAB 樣式
document.getElementById("TAB1").className="NOWTAB"; 

	function showIT(){
		
		for (var i = 1 ;i <=4 ;i++) {
			document.getElementById("BOX"+i).style.display="none";//先把4box 關掉	
			document.getElementById("TAB"+i).className=""; //先把四格按鈕樣式清除掉
		}
	
		
		var NOWid = this.id.substr(3);
		//再把目前被摸到那一個打開
		document.getElementById("BOX"+NOWid).style.display="block";


		//目前摸到按鈕套用NOWTAB 樣式
		document.getElementById("TAB"+NOWid).className="NOWTAB"; 
	}

	
}




