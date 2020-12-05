import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
// require('./other_script.js') // Require Other Script(s) from app/js folder Example

document.addEventListener('DOMContentLoaded', () => {
	$('form').submit(function (e) {
		e.preventDefault();
		let data = $('#js-form').serializeArray();
		$.ajax({
			type: "GET",
			url: "act.php",  
			data: data, 
			success: (data) => {
				$("#results").html("succes")
			},
			dataType: "html"
		}).done(()=>{
			alert("Спасибо");
		})
	});
})
