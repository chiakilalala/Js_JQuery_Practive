$(function(){
	
 $("#SlideMenu").fadeTo(500,0.2).fadeTo(500,1).animate({top:-145},500);
 $("#SlideMenu").hover(
   function(){
	$(this).stop(true,false).fadeTo(10,1).animate({top:0},900,"easeOutBounce");
   },
   function(){
	$(this).stop(true,false).animate({top:-145},900,"easeOutBounce");
   }
 )		
});

