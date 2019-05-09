
$(function(){
	
	$(".small img").click(function () {
	
		var N = $(this).index();//取出目前物件在同一層兄弟中排行
		$(".banner img").fadeOut(800).eq(N).fadeIn(800);//讓banner 中被指定圖片出現 其他圖片消失
	});
	
});

