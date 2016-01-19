$(function() {
	var images = $('.images');
	var image = $('.images>img');
	var focus = $('.focus');
	var container = $('.focus .container');


		image.on('click', function() {
			current = $('img').index($(this));
			container.empty();
			container.append('<img src=\"' + image.eq(current).attr('src') + '\" />');
			container.click(function() {
			focus.hide();
			});
			focus.fadeIn().addClass('enabled');
	});
});
