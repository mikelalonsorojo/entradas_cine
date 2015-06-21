/**************************************************
 	Calcular el precio de la entrada	(PAG 283)
 ***************************************************/

/**
 * @param dia:
 *            Dia de la semana escrito en minusculas, ej:
 *            ['lunes','martes',...'domingo']
 * @param edad:
 *            edad de la persona que compra la entrada, formato numero entero
 * @return precio en euros, null si
 */

//			var opcion = document.getElementById("listaDias").value;
//			var edad = document.getElementById("edad").value;
//			console.info("dia seleccionado: " + opcion);
//			console.info("Edad: " + edad);
	 
function calcularEntrada(dia, edad) {
	var precio = "Error";
	
	//validar edad isNumber
	if ((edad >= 0) && (!isNaN(edad))) {
		switch (dia) {
		case 'lunes':
			if (edad <= 35) {
				precio = 2;
			} else {
				precio = 5;
			}
			break;
		case 'martes':
			if (edad <= 25) {
				precio = 2;
			} else if (edad > 25 && edad <= 50) {
				precio = 5;
			} else {
				precio = 7;
			}
			break;
		case 'miercoles':
			if (edad <= 18) {
				precio = 3;
			} else if (edad > 18 && edad <= 50) {
				precio = 5;
			} else {
				precio = 8;
			}
			break;
		case 'jueves':
			if (edad <= 18) {
				precio = 5;
			} else {
				precio = 7;
			}
			break;
		case 'viernes':
		case 'sabado':
		case 'domingo':
			precio = 10;
			break;

		}// end switch
	}//end !isNan
	
	document.getElementById("euros").innerHTML=precio+'€';
}
// end:function entradas (dia,edad)


function justNumbers(event){				
	return event.charCode >= 0 && event.charCode <= 99;
}