// Check Off specific todos by clicking
$('ul').on("click", "li", function() {
	$(this).toggleClass("completed");
});


// clicking on X to delete Todo
$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


//adding Todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new Todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

//hiding the form when not needed
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});