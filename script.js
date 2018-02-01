$(document).ready(function (){
	$('.js-count').click(function() {
		showBuble($('.js-firstNumber').val() + $('.js-secondNumber').val());
	});

	function showFirstInput () {
		var inputText = $('input').val();
		if (inputText === "") {
			showBuble("Да тут же пусто !!!");
		} else {
			showBuble(inputText);
		}
	}
	function showBuble(Text) {
		$('.bubble').text(Text);
		$('.bubble').addClass('-visible');
		setTimeout(function() { 
			$('.bubble').removeClass('-visible');
		}, 4000);
	}
});