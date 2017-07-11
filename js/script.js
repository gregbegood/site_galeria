$(document).ready(function(){
	$('.sidebar-btn').click(function(){
		$('#sidebar').toggleClass('active');
		$('.sidebar-btn').toggleClass('toggle');
		$('.logotipo').toggleClass('logoresponsive');
	})
})
