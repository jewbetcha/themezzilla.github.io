(function($) {
	$(document).ready(function(){

			$(".button-collapse").sideNav();
			$('.materialboxed').materialbox();

			$('a[href*=#]').click(function(event){
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
					});

			});	
}(jQuery));