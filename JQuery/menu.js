$(document).ready(function(){
	var gallery = $('.gallery');

	var currentPictureIndex = 0;
	$(gallery[currentPictureIndex]).show();

	$('.gallery').click(function () {
		$(gallery[currentPictureIndex]).fadeOut(400, function() {
					if(currentPictureIndex === gallery.length - 1){
			currentPictureIndex = 0;
		}
			else{
				currentPictureIndex++;
			}
		
		$(gallery[currentPictureIndex]).slideDown(400);
		})
	});
})