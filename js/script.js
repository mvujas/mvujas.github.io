$(document).ready(function() {
	$('#questioncontent').load('questions.html');
	
	/* Not the best possible solution */
	function is_cached(src) {
		var image = new Image();
		image.src = src;

		return image.complete;
	}

	var loadPage = function() {
		setTimeout(function() {
			$('.loader').fadeOut(1000);
			setTimeout(function() {
				$('.footer').fadeTo(1000, 1);
			}, 1000);
		}, 500);
	};
	
	if(!is_cached('img/background.jpg')) {
		$('#background').load(function() {
			loadPage();
		});
	}
	else {
		loadPage();
	}
	
	
	// EVENTS
	$('#showQuestions').click(function() {
		$('.fullscreen').fadeIn(1000);
		setTimeout(function() {
			$('.qtext').fadeIn(1000);
		}, 1000);
	});
	
	$('#exitQuestions').click(function() {
		$('.fullscreen').fadeOut(1000);
		setTimeout(function() {
			$('.qtext').css('display', 'none');
		}, 1500);
	});
});
	