function placeCircles() {
	var numCircles = $('.circle').length;
	var dist = 0;
	$('.circle'+numCircles).css({"position":"absolute","top":"0px"});
	for(let j=numCircles;j>1;j--) {
		dist -= $('#exp'+j).offset().top - $('#exp'+(j-1)).offset().top;
		$('.circle'+(j-1)).css({"position":"absolute","top":""+dist+"px"});
	}
}