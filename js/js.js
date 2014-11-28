(function($) {
	$(document).ready(function(){

			$(".button-collapse").sideNav();
			$('.materialboxed').materialbox();
			$('ul.tabs').tabs();

			$('a[href*=#]').click(function(event){
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
					});

			});	
}(jQuery));