
$(function(){
  $("#MENU li").hover(function(){
	  $(this).stop(true,false).animate({top:0},500);
	  $(this).siblings().stop(true,false).animate({top:50},500);
  },function(){
	$("#MENU li").stop(true,false).animate({top:100},500);
  })

});

