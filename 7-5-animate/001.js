
$(function(){
	
	$('#RIGHT').click(function(){
		$("#BOAT").animate({left:"+=200"},500);
	});
	$('#LEFT').click(function(){
		$("#BOAT").animate({left:"-=200"},500);
	});

});

