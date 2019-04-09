menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive";
	}
	else{
		x.className = "topnav";
	}
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:1,
  	nav: true,
  	navText: ["<img src='img/prew.png'>", "<img src='img/next.png'>"]
  	
  
  })
});




if($(window).width() < 420){
	$(".owl-carousel").owlCarousel({
  	items:3
  });
  }


$(document).ready(function(){
$( ".ui-slider-range-min" ).slider({
animate: true,
range: "min",
value: 300,
min: 0,
max: 1000,
step: 1,
 
slide: function( event, ui ) {
$( "#slider-result" ).html(ui.value);
},
 
change: function(event, ui) {
$('#znch').attr('value', ui.value);
}
 
});
});


$(document).ready(function() {
	$('#form1').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)

		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо зазаявку")
			$('#form1').trigger('reset');
		});
		return false;
	});
});




