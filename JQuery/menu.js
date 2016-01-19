$(function() {
	var images = $('.images');
	var image = $('.images>img');
	var current = -1;
	var focus = $('.focus');
	var container = $('.focus .container');


		image.on('click', function() {
			current = $('img').index($(this));
			container.empty();
			container.append('<img src=\"' + image.eq(current).attr('src') + '\" />');
			focus.fadeIn().addClass('enabled');
			images.addClass('darken');
			images.append('<div class="overlay"></div>');

	});
			image.on('click', function() {
		
});
});