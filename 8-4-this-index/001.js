$(function () {

	$(".small img").click(function () {
		$(".banner img").fadeOut(800);//先讓全部banner中圖片變透明
		var N = $(this).index();//取出目前物件在同一層兄弟中排行
		$(".banner img").eq(N).fadeIn(800);//讓banner 中被指定圖片出現
	});

});