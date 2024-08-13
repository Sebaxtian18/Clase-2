/*Datos de Salida*/



/*Datos de entrada*/
//prompt("Ingrese su nombre") /*El promtpt es un capturador de datos al igual que el Scanner en java */

/* Variables JavaScript 
    *Hay tres tipos de variables (var, let y const)
    *Las variables no tienen tipo de dato   
    *En caso de necesitar capturar datos por teclado podemos utilizar una variable y el prompt (var nombreCompleto = prompt("Ingrese su nombre completo: "))
    *Todo dato ingresado por consola es tipo string. Para solucionar esto hay que hacer una conversión de datos (parseo). 
    EJ: var numeroUno = parseInt(prompt("Ingrese un numero"))
    *Tambien podemos utilizar el (Number) para hacer el parseo de los datos. 
    EJ: var numeroUno = Number(prompt("Ingerse un numero"))
*/

// var nombreCompleto = prompt("Ingrese su nombre completo: ")
// console.log(nombreCompleto)


/*Datos de proceso*/

// var numeroUno = prompt("Ingrese un numero: ")
// var numeroDos = prompt("Ingrese un numero: ")

var numeroUno = parseInt(prompt("Ingrese un numero: "))
var numeroDos = parseInt(prompt("Ingrese un numero: "))
console.log(numeroUno + numeroDos); //Concatenacion
