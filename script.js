$(document).ready(function () {
	$('.js-plus').click(function() {
		let secondWord = Number($('.js-secondNumber').val());
		showBuble(Number(getFirstWords()) + Number(getSecondWords()));
	});
	$('.js-minus').click(function() {
		let secondWord = Number($('.js-secondNumber').val());
		showBuble(Number(getFirstWords()) - Number(getSecondWords()));
	});
	$('.js-multiply').click(function() {
		let secondWord = Number($('.js-secondNumber').val());
		showBuble(Number(getFirstWords()) * Number(getSecondWords()));
	});
	$('.js-divide').click(function() {
		if (checkInputData().isNumber) {
			showBuble(Number(getFirstWords()) / Number(getSecondWords()));
		} else {
			if (checkInputData().empty) {
				showBuble('пустоооота'); 
			} else {
				showBuble(getFirstWords() + ' ' + getSecondWords());
			}
		}
	});
	//=====================+++++++++++++++++++===============================
	//=====================+++++++++++++++++++===============================
	function checkInputData() {
		if($.isNumeric(getFirstWords()) && $.isNumeric(getSecondWords())){
			return {
				isNumber:true
			};
		} else if (getFirstWords() === '' && getSecondWords() ==='') {
			return {
				isNumber:false,
				empty: true
			}
		} else {
			return {
				isNumber: false,
				empty: false
			}
		}
		
	}
	function getFirstWords() {
		return $('.js-firstNumber').val();
	}
	function getSecondWords() {
		return $('.js-secondNumber').val();
	}

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