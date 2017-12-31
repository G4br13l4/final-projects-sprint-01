
function isValidCard (creditCardNumber)                                                                 {
    
    /*Pedir a usuario que ingrese número de tarjeta de crédito y
    Guardar el número en la variable "creditCardNumber".
    Verificar que el usuario no ingrese un campo vacío.*/

	do {
   		var creditCardNumber = prompt("Ingrese por favor su número de tarjeta de crédito");

	} while (creditCardNumber === "");

	//Declarar un objeto vacío llamado "creditCardNumber_All"
	var creditCardNumber_All = [];

	//Meter cada elemento de la variable "creditCardNumber" en el array "creditCardNumber_All"
	for(var i = 0; i < creditCardNumber.length; i++)  {	
	creditCardNumber_All.push(creditCardNumber.charAt(i));
	}
	
	//Invertir los elementos del array "creditCardNumber_All" con el metodo reverse()
	creditCardNumber_All = creditCardNumber_All.reverse();
	console.log(creditCardNumber_All);

	/*Crear un FOR que con un IF dentro en el cual los números en un índice par se multipliquen por 2 y
	Guardar nuevos digitos en un array	nuevo llamado "newArray" y Declarar "newObject" vacío*/

	var newArray= [];
	for(var j = 0; j < creditCardNumber_All.length; j++) 					{
		if(j % 2 !==0)											{
			var result = creditCardNumber_All[j] * 2;
			/*Dentro del IF, poner otra condicion de que en el caso de numero en indice par, 
			si resultado es mayor a 9, separar digitos*/
			if(result > 9)								 	{
				result= result.toString();
				for( var k = 0; k < result.length; k++){
					newArray.push(result[k]);
					}
			} else                                    	    {
				newArray.push(result);
				}
		//y los numeros en un indice impar se mantengan igual
		//Guardar nuevos digitos en un object nuevo llamado "newObject"	
		}else 														{
			result= creditCardNumber_All[j] * 1;
			newArray.push(result);
		}
	}

	//Sumar elementos de "newArray" con un FOR y guardar en variable "sum"
	var sum = 0;
	for(var m = 0; m < newArray.length; m++)			{
	//Convertir strings de "newObject" a numbers
	sum += parseInt(newArray[m]);
	}

	//Al resultado de "sum", sacar el residuo de la division entre 10 y guardar en variable "residue"
	var residue = sum % 10;

	//Mostrar si es una tarjeta válida si su residuo es 0
	if(residue === 0)	{
  		return(alert("Su numero de tarjeta es válido"));
		//Mostrar que es una tarjeta inválida si su residuo no es 0
	} else              {
  		return(alert("Su numero de tarjeta es inválido"));
	}
}
//Llamar a función
isValidCard();




















	








