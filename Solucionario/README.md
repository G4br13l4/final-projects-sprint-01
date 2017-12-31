# Tarjeta de credito valida

-Descripcion: Crea una web que pida por medio de un prompt(), el numero de una tarjeta de credito y confirmr su validez segun el algoritmo de Luhn.

## Pseudocodigo

...
1. Pedir al usuario que ingrese un numero de tarjeta de credito a validar
2. Validar que el usuario haya ingresado algun dato
3. Validar que el dato ingresado se trate de un numero
4. Validar que el numero ingresado es valido mediante el algoritmo de Luhn.
	4.1 Invertir el numero de tarjeta 
	4.2 Encontrar las posiciones pares e impares del arreglo de numeros.
	4.3 Los numeros que se encuentran en posiciones PARES se multiplican por 2 y se suman, en caso de que el resultado sea de 2 cifras, sumar los digitos.
	4.4 Los numeros que se encuentran en posiciones IMPARES se suman.
	4.5 Sumar el resultado de la suma de los numeros PARES e IMPARES.
	4.6 Dividir el total entre 10.
	4.7 Si el residuo de la division es 0 el numero es correcto, en caso contrario no lo es.
...

## Diagrama de flujo

A continuacion se incluye el diagrama de flujo.

![diagrama-de-flujo](https://www.lucidchart.com/publicSegments/view/14ced019-7052-4338-84f5-bcb4b229ad8d/image.png)


//Checar como ver el preview de readme, markdown preview