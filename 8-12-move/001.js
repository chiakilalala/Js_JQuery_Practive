
$(function(){
	
	var NN = 0;
	var GOGO = 0;
	
	$("#LEFT").click(function(){ 
		if(NN<20){
			NN+=1;
			GOGO = NN*256*-1;
			$("#PIC ul").stop(true,false).animate({left:GOGO},2000,"easeOutElastic");
		}	
	});
	
	$("#RIGHT").click(function(){ 
		if(NN>0){
			NN-=1;
			GOGO = NN*256*-1;
			$("#PIC ul").stop(true,false).animate({left:GOGO},2000,"easeOutElastic");
		}
	});
 	
});

