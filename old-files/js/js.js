$(document).ready(function() {
	$('.smoove').click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
	$('.navbar-nav li a').click(function(){
		$('.navbar-nav li').removeClass('active');
		$(this).parent().addClass('active');
	});
});