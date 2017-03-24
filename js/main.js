$( document ).ready(function() {
	scrollWindow();
    scaleVideoContainer();
	animate();
	
	//TweenMax.from('#flecha', 1.5, {scale: 0.2, opacity: 0, ease: Elastic.easeOut});
	//currentSection = nextSection;

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
//  funcion scroll header
function scrollWindow(){
	var header = false;
	var scroll;
	
	//menu transparente header
	var titleName = $('.titleName');
	titleName.hide();
	
	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		if(scroll > 630){
			$('header').css('background', 'rgb(19, 68, 67)').show('fast');
			titleName.show();
			//$('header').show('fast').slideDown(2000);
			header = true;
		}else{
			$('header').css('background', 'transparent');
			header = false;
			titleName.hide();
		}
		
	})
}
// animacion en la section about me
function animate(_data){
	var banner = $('.hover');
	for(var i=0; i<999; i++){
		banner.css('opacity', '1');
		banner.animate({left: 20}, 10);
		for(var j=0; j<5; j++){
			banner.animate({opacity: 0}, 600);
			banner.animate({opacity: 1}, 600);
		}
		
		banner.delay(200).animate({left: 30}, 30);
		banner.animate({left: -60}, 0);
	}
	$('.animate').hide();
	showFrase();
}
function showFrase(){
	$('#arrow').hover(function(){
		$('.animate').show(1000);
	});
}

//   section skill
$(function () {
  
  var wrapper = $('#contenedors'),
    items = wrapper.find('.cuadro'),
      delay = 700; 
  
  wrapper.on('click', '.cuadro', function () {
      items.each(function (index, el) {
        var $el = $(el),
            cl = $el.prop('class').replace('cuadro ', ''),
            nr = cl.slice(1);
        
        (nr > 1) ? nr-- : nr = 13;
        
        $el.removeClass(cl).addClass('n'+nr);
      });
    });
  
  //Let's simulate couple of times
  for(var i = 1; i < 6; i++) {
    setTimeout(function () { $('.cuadro:first').click(); }, delay*i);  
  } 
 
});