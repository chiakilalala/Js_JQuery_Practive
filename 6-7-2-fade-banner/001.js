
$(function(){


	$('#SS1').click(function(){
		$('#PP1').fadeIn(800);
		$('#PP2,#PP3,#PP4,#PP5,#PP6').fadeOut(800);
	
	});
	$('#SS2').click(function(){
	
		$('#PP2').fadeIn(800);
		$('#PP1,#PP3,#PP4,#PP5,#PP6').fadeOut(800);
	
	});
	$('#SS3').click(function(){
	
		$('#PP3').fadeIn(800);
		$('#PP1,#PP2,#PP4,#PP5,#PP6').fadeOut(800);
	
	});
	$('#SS4').click(function(){
	
		$('#PP4').fadeIn(800);
		$('#PP1,#PP2,#PP3,#PP5,#PP6').fadeOut(800);
	});
	$('#SS5').click(function(){
	
		$('#PP5').fadeIn(800);
		$('#PP1,#PP2,#PP3,#PP4,#PP6').fadeOut(800);
	
	});
	$('#SS6').click(function(){
	
		$('#PP6').fadeIn(800);
		$('#PP1,#PP2,#PP3,#PP4,#PP5').fadeOut(800);
	});
	

});



