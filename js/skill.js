$(document).ready(function() {
  
    var slideClass = ".mapmark";
    var navLink = ".mapnav span";
  
    var slideVal = 0;
    var maxSlide = $(slideClass).length - 1;
    var slideStep = 100 / maxSlide;
  
    var activeClass = function() {
    
        $(navLink).removeClass('active');
        $(navLink + '[rel="' + slideVal +'"]').addClass('active');
      
    }
  
    var slideTransition = function() {
     
        $(slideClass).removeClass('active');
        $(slideClass + '[rel="' + slideVal +'"]').addClass('active'); 
      
    }
  
    /*var moveSlide = function(forward) {
        
        if (forward) {
            slideVal++;
        } else {
            slideVal--;
        } 
        
        if (slideVal > maxSlide) {
            slideVal = 0;
        }
        
        if (slideVal < 0) {
            slideVal = maxSlide;
        }
        
        slideTransition();
        activeClass();
    }*/

    $(navLink).not('active').click(function(e){
       
        slideVal = $(this).attr('rel');
        slideTransition();
        activeClass();
       
    });
    $(slideClass).not('active').click(function(e){
       
        slideVal = $(this).attr('rel');
        slideTransition();
        activeClass();
		barrasPorcentaje();
       
    });
	
	function barrasPorcentaje() {
	$('.percentage-bar').each(function(){
		$(this).find('.bar').animate({
			width: $(this).attr('data-percent')
		}, 6000);
	});
 }
	
});