$(document).ready(function (){
	var alfredspeech ='привет,гуманоиды!';
	$('.js-showhide').click(function() {
		$('.alfred').toggleClass('-invisible');
	});
	$('.js-alfredspeech').click(function(){
		$('.bubble').text(alfredspeech);
	});
});