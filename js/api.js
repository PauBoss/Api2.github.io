var mensaje1 = console.log( "Cuenta realizada correctamente." );
var mensaje2 = console.log( "Prueba por consola de error." );

var tiempoTotal = 6;

/**
 * Creo la función temporizador que se encargará de devolver
 * un error dependiendo de la situación, como por ejemplo que la longitud sea igual a 0. 
 */
function temporizador( ms ) {
	return new Promise( ( resolver, devolver ) => {
		if ( tiempoTotal.lenght === 0 ) {
			devolver( new Error( mensaje2 ) );
		}

		setTimeout( ( ) => {
			resolver( mensaje1 );
		}, ms );
	} );
}

/**
 * Creo la función cuenta que se encargará de contar de 6 a 0, mostrandoselo
 * al usuario.
 */
async function cuenta( numero, callback, element, interval = 1000 ) {

	element.innerHTML = numero;
	while ( numero != 0 ) {
		await temporizador( interval );
		element.innerHTML = --numero;
	}
	callback( );
}

//Desde aquí llamo y muestro la cuenta atrás.
cuenta( 5, ( ) => {
	console.log( "Fin del contador" );
	mostrarNotificacion( );
}, document.getElementById( "cuenta" ) );

/**
 * Creo la función mostrarNotificacion que se encargará de mostrara si hay permisos para mostarar
 * notifiaccaciones. En caso afirmativo, se mostrará un mensaje que contiene un enlace a un video.
 */
function mostrarNotificacion( ) {
	Notification.requestPermission( )
	.then( respuesta => {
		if ( respuesta = "granted " ) {
			console.log( 'Permiso concedido' );
			var notificacion = new Notification( "Informacion", {
				body: "Se ha publicado un nuevo video"
			} );
			notificacion.addEventListener( "click", ( ev ) => {
				window.open( "video.html" );
			} );

		} else {
			console.log( 'Permiso denegado' );
		}
	} );
}
