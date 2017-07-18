$('.enviar').click(function(){
	var texto = $('.escribir').val();
	$('.fondo').append("<p class='mensaje'>"+
						texto+
						"</p>");
	console.log (texto);
})

/*
$('.escribir').keydown(function() {
	var texto = $('.escribir').val();
	$('.fondo').append("<p class='mensaje'>"+
						texto+
						"</p>");
	console.log (texto);
})
*/



$('.chat1').click(function(){
	var imagen = document.getElementById('img1');
	console.log (imagen);
	var user = document.getElementById('usuario1');
	console.log (user);
	var texto = document.getElementById('texto1');
	console.log (texto);
	$('.fondo').append(texto);
})
$('.chat2').click(function(){
	var imagen = document.getElementById('img2');
	console.log (imagen);
	var user = document.getElementById('usuario2');
	console.log (user);
	var texto = document.getElementById('texto2');
	console.log (texto);
	$('.fondo').append(texto);
})