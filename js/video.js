/**
 * Defino la función mostrarDuracion la cual se encargará de mostrar la duración
 * del video.
 **/
function mostrarDuracion( ) {

	var video = document.getElementById( "video" );
	var duracion = video.duration;

	document.getElementById( "tiempo" )
	.innerHTML = "Duracion: " + duracion;

}

/**
 * Defino la función mostrarDuracion la cual se encargará de pausar y reanudar
 * el video.
 **/
function controlarVideo( ) {

	const video = document.getElementById( "video" );

	if ( video.paused == false ) {

		video.pause( );
		console.log( "El video se ha pausado correctamente" );

	} else if ( video.paused == true ) {

		video.play( );
		console.log( "El video se ha reanudado correctamente" );

	}

}

document.getElementById( "video" )
.addEventListener( "mouseup", teclaPulsada );


/**
 * Defino la función teclaPulsada la cual se encargará de según el botón del
 * ratón presionado, ofrecer unos controles o información.
 **/
function teclaPulsada( evento ) {

	if ( evento.which == 1 ) {

		controlarVideo( );

	}

	if ( evento.which == 3 ) {

		mostrarDuracion( );

	}
}
