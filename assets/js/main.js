$('button').click(function() {
    $(this).prev().slideDown();	
});

$('h2').click(function() {
	$(this).next().children("p").slideUp();
});