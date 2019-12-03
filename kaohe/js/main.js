(function($) {
	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		$main_wenzhang = $('article');
	
	$main1 = function(id) {
		var $article = $main_wenzhang.filter('#' + id);
			$body.addClass('xianshi');
			setTimeout(function() {
				$header.hide();
				$footer.hide();
				$main.show();
				$article.show();
				setTimeout(function() {
					$article.addClass('dakai');
				}, 25);
			}, 25);
	};

	$main2 = function(sb) {
		var $article = $main_wenzhang.filter('.dakai');
		if (!$body.hasClass('xianshi'))
			return;
		$article.removeClass('dakai');
		setTimeout(function() {
			$article.hide();
			$main.hide();
			$footer.show();
			$header.show();
			$body.removeClass('xianshi');
		}, 400);
	};
	$main_wenzhang.each(function() {
		var $this = $(this);
		$('<div class="close"></div>')
			.appendTo($this)
			.on('click', function() {
				location.hash = '';
			});
	});
	$window.on('hashchange', function() {
		if (location.hash == '') {
			$main2();
		}
		if ($main_wenzhang.filter(location.hash).length > 0) {
			$main1(location.hash.substr(1));
		}
	});
	$main.hide();
	$main_wenzhang.hide();
})(jQuery);
