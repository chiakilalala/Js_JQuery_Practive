$(function(){

	$(".CONTENT").hover(
		function(){
		 $(this).stop(true,false).animate({top:-300},500,"easeOutBack");
		},
		function(){
			$(this).stop(true,false).animate({top:0},500,"easeOutCubic");
		});
});

