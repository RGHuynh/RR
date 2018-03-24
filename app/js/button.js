

$(function(){ //To load the DOM
	$(".login").click(function(event){
		event.preventDefault();
			$.ajax({
	method: "GET",
	url: "/login"
})
	})



});