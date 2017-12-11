$('#trigger').click(function() {
	$('body').css("background-color", "yellow");
	$('li').fadeOut(3000, function() {
		$(this).remove();
	});
});