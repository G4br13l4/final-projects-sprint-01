var numberCreditCard = parseInt(prompt("Ingrese el nùmero de tarjeta"));

function isDataValid(numberCreditCard) { // Funcion que valida el dato ingresado
	// *** CASOS DE PRUEBA ***
	var sizeNumberCC = numberCreditCard.length;
	if(numberCreditCard == "" || sizeNumberCC != 16){ // Validando caso de string vacio y longitud de dato
		return alert("Debes ingresar un numero de 16 digitos");
 	}
 	else if(typeof numberCreditCard != "number"){ //Validando tipo de dato // porque no sale que es string ponerle parseint
 		return alert("Solo debes ingresar numeros");
 	}
}

function luhnAlgorithm(numberCreditCard) {
	var sumEven = 0;
	var sumOdd = 0;
	var oneDigit = 0;
	var sum = 0;


	for (var i = 0; i < numberCreditCard.length; i++){
    if(i % 2 != 0){/* Validando indicies pares*/
      var evens = parseInt(numberCreditCard.charAt(i)) * 2;

     if( evens >= 10){/*Validar digitos de 2 cifras*/
        oneDigit += validNums(evens);
      }
      else{
        sum += evens;
      }
      sumEven = sum + oneDigit;/*Almacena suma total de todos los numeros pares*/
  }
else { /*Validando indices impares*/
  sumOdd += parseInt(numberCreditCard.charAt(i));
   }

  var sumTotal =  + sumOdd;
   if(sumTotal % 10 == 0){/*Validar el numero de tarjeta*/
     return alert ("Tarjeta valida");
   }
   else{
     return alert("Numero de tarjeta incorrecto");
   }
  }
}

function validNums (evensTwoDigits){
  var division = parseInt(evensTwoDigits / 10);
  var mod = evensTwoDigits % 10;
  return division + mod;
}
isDataValid(numberCreditCard);
luhnAlgoritm(numberCreditCard);
