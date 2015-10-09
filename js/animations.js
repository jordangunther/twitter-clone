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
		$('.tweet').prepend(
						+'<div class="content">'
							+'<img class="avatar" src=file:///Users/jordangunther/Desktop/DevMountain/week4/twitter-clone/img/alagoon.jpg />'
							+'<strong class="fullname">Jordan Kurt Gunther </strong>'
							+'<span class="username">@jogunthe</span>'
							+'<p class="tweet-text">'+ tweetTxtBox.val() +'</p>'
							+'<div class="tweet-actions">'
								+'<ul>'
									+'<li><span class="icon action-reply"></span> Reply</li>'
									+'<li><span class="icon action-retweet"></span> Retweet</li>'
									+'<li><span class="icon action-favorite"></span> Favorite</li>'
									+'<li><span class="icon action-more"></span> More</li>'
								+'</ul>'
							+'</div>'
							+'<div class="stats">'
								+'<div class="retweets">'
									+'<p class="num-retweets">30</p>'
									+'<p>RETWEETS</p>'
								+'</div>'
								+'<div class="favorites">'
									+'<p class="num-favorites">6</p>'
									+'<p>FAVORITES</p>'
								+'</div>'
								+'<div class="users-interact">'
									+'<div>'
										+'<img src="img/alagoon.jpg" />'
										+'<img src="img/vklimenko.jpg" />'
									+'</div>'
								+'</div>'
								+'<div class="time">'
									+'1:04 PM - 19 Sep 13'
								+'</div>'
							+'</div>'
							+'<div class="reply">'
								+'<img class="avatar" src="img/alagoon.jpg" />'
								+'<textarea class="tweet-compose" placeholder="Reply to @jogunthe"/></textarea>'
							+'</div>'
						+'</div>'
					+'</div>'
		)					
	});
	$('.tweet-actions').hide();
	});
});
