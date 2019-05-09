$(function () {
	$("#B00").click(function () {
		$("html,body").stop(true, false).animate({
			scrollTop: 0
		}, 500);
	});
	$("#B01").click(function () {
		$("html,body").stop(true, false).animate({
			scrollTop: 1000
		}, 500);
	});
	$("#B02").click(function () {
		$("html,body").stop(true, false).animate({
			scrollTop: 2000
		}, 500);
	});
	$("#B03").click(function () {
		$("html,body").stop(true, false).animate({
			scrollTop: 3000
		}, 500);
	});
});