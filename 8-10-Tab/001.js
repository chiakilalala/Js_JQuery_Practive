$(function(){
	
	var NOW = 0;
	
	var MOVE = 0;
	
	$("#tabMenu li").eq(NOW).find("a").addClass("NOWTAB"); //預設：讓第一個超連結變白色

	$("#tabMenu li").click(function(){
		
		NOW = $(this).index(); //抓目前摸到的物件的"兄弟數字"
		
		MOVE = NOW * 840 * -1; //計算座標
		
		$("#ALL").stop(true,false).animate({ left: MOVE }, 1500, "easeInOutBack");
		
		$("#tabMenu li").find("a").removeClass("NOWTAB").eq(NOW).addClass("NOWTAB");
		
	});
	
})


