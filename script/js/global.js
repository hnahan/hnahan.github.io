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
		
	placeCircles();
	
    function nvsAddAnimation() {
        animationObjectExp.each(function (index, element) {
            var $currentElement = $(element);
                
   			if (nvsOnScreen($currentElement)) {
				$currentElement.removeClass('exp-hided');
                $currentElement.addClass('exp-bounce-in');
            }
        });
		animationObjectSkills.each(function (index, element) {
            var $currentElement = $(element);
                
   			if (nvsOnScreen($currentElement)) {
				$currentElement.removeClass('skill-hided');
                $currentElement.addClass('skill-appear-in');
            }
        });
		animationObjectTitle.each(function (index, element) {
            var $currentElement = $(element);
                
   			if (nvsOnScreen($currentElement)) {
				$currentElement.removeClass('title-hided');
                $currentElement.addClass('title-bounce-in');
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