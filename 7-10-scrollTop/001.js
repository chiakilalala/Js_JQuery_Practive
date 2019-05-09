$(function(){
	
  $("#goTop").click(function(){
	   $("html,body").animate({scrollTop:0},900);
	   return false;//消除#往上跳問題
  });
  $("#AAA").click(function(){
	$("html,body").animate({scrollTop:2000},900);
	return false;
});

});


