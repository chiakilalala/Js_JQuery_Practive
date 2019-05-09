$(function(){
	$("#AAA").click(function(){
		$("#PP").fadeIn(500);//淡入顯示
	});
	$("#BBB").click(function(){
		$("#PP").fadeOut(500);//淡出消失
	});
	$("#CCC").click(function(){
		$("#PP").fadeTo(500,0.5);//指定透明度
	});
	$("#DDD").click(function(){
		$("#PP").fadeTo(500,1);//恢復原來
	});
});

