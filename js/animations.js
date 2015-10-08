$(document).ready(function(){
	$('.button').hide();
	$('#char-count').hide();
	$('.tweet-compose').on('click', function() {
		$(this).css('height', '5em');
		$('.button').show();
		$('#char-count').show();
	});
	var count = 140;
	var tweetTxtBox = $('textarea').filter('.tweet-compose');
	tweetTxtBox.on('keyup', function() {
		count = 140 - tweetTxtBox.val().length;
		$('#char-count').text(count);
		if(count < 11) {
			$('#char-count').css('color', 'red');
		}
		else {
			$('#char-count').css('color', '#999');
		}
		if(count < 0) {
			$('#tweet-submit').prop('disabled', true);
		}
		else {
			$('#tweet-submit').prop('disabled', false);
		}
	});
	$('#tweet-submit').on('click', function (){
		alert('you clicked tweet!')
		$('.tweet').prepend($('div.stream div:first'));
	});
});
