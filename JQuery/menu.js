$(function() {
	var images = $('.gallery');
	var image = $('.gallery>.pic');
	var focus = $('.focus');
	var container = $('.focus .container');


		image.on('click', function() {
			current = $('.pic').index($(this));
			container.empty();
			container.append('<img src=\"' + image.eq(current).attr('src') + '\" />');
			container.click(function() {
			focus.hide();
			});
			focus.fadeIn().addClass('enabled');
	});
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}