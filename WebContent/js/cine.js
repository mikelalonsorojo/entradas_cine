/*****************************************
 				(PAG 283)
 ******************************************/

/**
 *
 * 
 * @param dia:
 *            Dia de la semana escrito en minusculas, ej:
 *            ['lunes','martes',...'domingo']
 * @param edad:
 *            edad de la persona que compra la entrada, formato numero entero
 * @return precio en euros, null si
 */


function calcularEntrada(dia, edad) {
	 var dia = document.getElementById("optionstaDias").value;
	 var dia = document.getElementById("edad").value;
	 
	var precio = null;
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
		default:
			precio = "El dia o la edad no son correctos";
		}// end switch
	} else {
		precio = "El dia o la edad no son correctos";
	}
	return precio;
}
// end:function entradas (dia,edad)