$(function(){
	//當有人拉到捲軸就會觸發事件
	$(window).scroll(function(){
	var NOW= $(window).scrollTop();
		if(NOW>800){
			$("#ICON").stop(true,false).animate({top:NOW+200},500,"easeOutBack");
		}else{
			$("#ICON").stop(true,false).animate({top:-1000},500,"easeOutBack");
		}
// if 捲軸大於800PX  div滑下來出現
//else 否則div就會滑上去消失
	});

})


