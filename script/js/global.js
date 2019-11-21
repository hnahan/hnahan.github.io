//will only run once the page DOM is ready for JavaScript code to execute.
(function ($, window, document, undefined) {
    'use strict';
	var animationObjectExp, animationObjectSkills, animationObjectTitle;
 
	var bigTitle = "Hervé NAHAN";
	for(let i=0;i< bigTitle.length;i++){
		let centerAdjust = 23;
		let pourcent = centerAdjust+ 5*(i);
		if(bigTitle[i]==" ") {
			$('#title').append('<div  style="margin-left:'+pourcent+'vw">'+bigTitle[i]+'</div> ');
		}
		else {
			$('#title').append('<div class="slide-hided" style="margin-left:'+pourcent+'vw">'+bigTitle[i]+'</div> ');
		}
	}
		
	
	var numCircles = $('.circle').length;
	var dist = 0;
	$('.circle1').css({"position":"absolute","top":"0px"});
	for(let j=1;j<numCircles;j++) {
		dist += $('#exp'+(j+1)).offset().top - $('#exp'+j).offset().top;
		$('.circle'+(j+1)).css({"position":"absolute","top":""+dist+"px"});
	}
	
    function nvsAddAnimation() {
        animationObjectExp.each(function (index, element) {
            var $currentElement = $(element);
                //,animationType = $currentElement.attr('nvs-animation-type');
   			if (nvsOnScreen($currentElement)) {
				$currentElement.removeClass('exp-hided');
                $currentElement.addClass('exp-bounce-in');//'animated ' + animationType);
            }
        });
		animationObjectSkills.each(function (index, element) {
            var $currentElement = $(element);
                //,animationType = $currentElement.attr('nvs-animation-type');
   			if (nvsOnScreen($currentElement)) {
				$currentElement.removeClass('skill-hided');
                $currentElement.addClass('skill-appear-in');//'animated ' + animationType);
            }
        });
		animationObjectTitle.each(function (index, element) {
            var $currentElement = $(element);
                //,animationType = $currentElement.attr('nvs-animation-type');
   			if (nvsOnScreen($currentElement)) {
				$currentElement.removeClass('title-hided');
                $currentElement.addClass('title-bounce-in');//'animated ' + animationType);
            }
        });
    }

    // takes jQuery(element) a.k.a. $('element')
    function nvsOnScreen(element) {
        // window bottom edge
        var windowBottomEdge = $(window).scrollTop() + $(window).height();
        // element top edge
        var elementTopEdge = element.offset().top;
         var offset =  100;
        // if element is between window's top and bottom edges
        return elementTopEdge + offset <= windowBottomEdge;
   }
    
	function manageTopButton() {
		if (nvsOnScreen($('#contact'))){
 			$('#btn-top').fadeIn();
		} 
		else{
 			$('#btn-top').fadeOut();
		}
	}
	function manageDownButton() {
		// nvsOnScreen($('#header-container') doesn't work
		if (!nvsOnScreen($('#profile'))){
 			$('#btn-to-profile').fadeIn();
		} 
		else{
 			$('#btn-to-profile').fadeOut();
		}
	}
	//will run once the entire page (images or iframes), not just the DOM, is ready
	$(window).on('load', function () {
		$('.spinner-border').fadeOut('slow', function() {});
 
		setTimeout(animateHeader , 1000);
		
		function animateHeader() {
			var $animationHeaderTitle= $("#title .slide-hided");
			jQuery.each($animationHeaderTitle,function(index,element) {
 
				setTimeout(function(){
					$(element).removeClass('slide-hided');
					$(element).addClass('slide');
				}, 200* (index ) ); 
				 
			});
		}
		
        animationObjectExp = $('#experiences .exp-hided');//$('[nvs-animation-type]');
		animationObjectSkills = $('#skills .skill-hided');
		animationObjectTitle = $('h2.title-hided');
        nvsAddAnimation();
    });
    $(window).on('scroll', function (e) {
        nvsAddAnimation();
		manageTopButton();
		manageDownButton();
    });
	
	$('#btn-top').click(function(){
		$("html, body").animate({scrollTop : 0},700);
		return false;
	});
	if (nvsOnScreen($('#header-container'))){
 		$('#btn-to-profile').fadeIn();
	} 
	$('#btn-to-profile').click(function(){
		$('html, body').animate({
			scrollTop: $("#profile").offset().top}, 500);
		return false;
	});
	
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
 	
}(jQuery, window, document));

function removeClassActiveNavBar() {
  listNavLink = $( "a.nav-link" );
  listNavLink.each(function (index, element) {
	var $currentElement = $(element).parent();
	$currentElement.removeClass('active');
	$(element).children().remove(".sr-only");
  });
}

//the nav-item becomes active on click
$( "a.nav-link" ).click(function() {
  removeClassActiveNavBar();
  $(this).parent().addClass("active");
  $(this).append(" <span class='sr-only'>(current)></span>");
});