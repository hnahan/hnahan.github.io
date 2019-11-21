/*(function ($, window, document, undefined) {
	
	var numCircles = $('.circle').length;
	var dist = 0;
	$('.circle1').css({"position":"absolute","top":"0px"});
	for(let j=1;j<numCircles;j++) {
		dist += $('#exp'+(j+1)).offset().top - $('#exp'+j).offset().top;
		$('.circle'+(j+1)).css({"position":"absolute","top":""+dist+"px"});
	}
}(jQuery, window, document));*/