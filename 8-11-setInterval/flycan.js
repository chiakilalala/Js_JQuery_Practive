$(function(){
	
	var N=0; //要用來記錄物件的"兄弟數字"
	var MOVE=0; //要用來計算座標
	var TT=0; //宣告一個變數，等一下要給計時器用
	
	$("#NUMBER li").eq(0).addClass("CC"); //預設：讓第一個 li 變藍色


//==設定圖片輪播和計時器================================================

	function GOGO(){
				
		if(N<11){
			N+=1; 
			MOVE = N*600*-1; //計算座標
		}else{
			N=0;
			MOVE=0;
		}
		
		$("#BANNER ul").animate({top:MOVE},1500,"easeInOutBack"); //圖片做動畫
		$("#NUMBER li").removeClass("CC").eq(N).addClass("CC"); // li 變藍色
		
	}
	
	TT = setInterval(GOGO,2000); //設定 TT 變數計時器
	

//==滑鼠摸到的時候就清除計時器===========================================
	
	$("#BANNER, #NUMBER").hover(function(){ 
		clearTimeout(TT); //清除 TT 計時器
	},function(){
		TT = setInterval(GOGO,2000); //重新啟動 TT 計時器
	});
	
	
//==滑鼠點選下面的數字就跳到指定的圖片====================================
	
	$("#NUMBER li").click( function(){
		
		N = $(this).index(); //抓目前摸到的物件的"兄弟數字"
		MOVE = N*600*-1;  //計算座標
		
		$("#BANNER ul").animate({top:MOVE},1500,"easeInOutBack"); //圖片做動畫
		$("#NUMBER li").removeClass("CC").eq(N).addClass("CC"); // li 變藍色
	});
	
});


