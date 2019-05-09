$(function(){
		
	$(".QQ").click(function(){ 

		// $(this).siblings().css({backgroundColor:"#333"});
		
		// $(this).siblings().css({backgroundColor:"#C00"});
		
		$(this).siblings().eq(2).css({backgroundColor:"#C00"});
		$(this).parent().siblings().eq(0).find("li").eq(2).css({backgroundColor:"#C00"});		
		
		
		
	
	
		
	});

	 	
});