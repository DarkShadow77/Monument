(function($) {

	// Smooth scrolling using jQuery easing
  	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      		var target = $(this.hash);
      		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      		if (target.length) {
      	  		$('html, body').animate({
          			scrollTop: (target.offset().top - 54)
        		}, 1000, "easeInOutExpo");
        		return false;
      		}
    	}
	});


	$('#portfolio-flters a').on( 'click', function() {
		$("#portfolio-flters a").removeClass('active');
		$(this).addClass('active');
	});
	
})(jQuery);

$(document).ready(function(){

  //Tab widget
  $("#tab").tabs();

});