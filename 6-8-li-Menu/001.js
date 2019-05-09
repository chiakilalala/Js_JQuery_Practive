$(function () {

	$('#MENU1').hover(
		function () {
			$('#SUB1').stop(true,true).slideDown(500);//stop(true,true) 1.是否連續觸發 2.是否馬上結束上一動畫
		},
		function () {
			$('#SUB1').stop(true,true).slideUp(500);
		});
	$('#MENU2').hover(
		function () {
			$('#SUB2').stop(true,true).slideDown(500);
		},
		function () {
			$('#SUB2').stop(true,true).slideUp(500);
		});
	$('#MENU3').hover(
		function () {
			$('#SUB3').stop(true,true).slideDown(500);
		},
		function () {
			$('#SUB3').stop(true,true).slideUp(500);
		});
	$('#MENU4').hover(
		function () {
			$('#SUB4').stop(true,true).slideDown(500);
		},
		function () {
			$('#SUB4').stop(true,true).slideUp(500);
		});
	$('#MENU5').hover(
		function () {
			$('#SUB5').stop(true,true).slideDown(500);
		},
		function () {
			$('#SUB5').stop(true,true).slideUp(500);
		});

});