/*Datos de Salida*/
    //Console.log()


/*Datos de entrada*/
//prompt()
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
// Son las operaciones aritmeticas y logicas que se realizan en el codigo.
// Suma, resta, multiplicacion, divicion, comparacion, incremento, decremento, asignacion, etc... 

//Aritmeticos

// suma: valor1 + valorDos (+)
// resta: valor1 - valorDos (-)
// multiplicacion: valor1 * valorDos (*)
// division: valor1 / valorDos (/)

//Logicos

/*  Los operadares logicos generan resultados booleanos: true - false
    < -> Menor que (Excluyente)
    > ->  Menor que (Excluyente)
    <= -> Menor o igual (Incluyente)
    >= -> Mayor o igual (Incluyente)
    == -> Comparacion simple
    === -> Comparacion Estricta 
    != -> Negacion simple
    !== -> Negacion estricta

*/

console.log(3 < 3)
console.log(3 > 3)
console.log(3 <= 3)
console.log(3 >= 3)
console.log(3 == "3") //La comparacion simple permite comparar un numero aun con un tipo de dato tipo string. 
console.log(3 === "3") //La comparacion estricta compara el contenido y el tipo de dato por igual.
console.log(3 != 3)
console.log(3 !== 3)
// var numeroUno = prompt("Ingrese un numero: ")
// var numeroDos = prompt("Ingrese un numero: ")

// var numeroUno = parseInt(prompt("Ingrese un numero: "))
// var numeroDos = parseInt(prompt("Ingrese un numero: "))
// console.log(numeroUno + numeroDos); //Concatenacion


// var salarioCuenta = 20000000
// var salarioCuenta = 2000

/* Las variables de tipo var permiten la sobre escritura de la variable como tal y el contenido de la misma */


// let saldoCuenta = 20000000
// saldooCuenta = 2000
// console.log(saldoCuenta)
/* Las variables de tipo let no permiten sobreescritura, pero si de contenido */


// const saldoCuenta = 20000000
// saldooCuenta = 2000
// console.log(saldoCuenta)
/* Las variables de tipo let no permiten sobreescritura, ni de contenido  */

/* Las variables de let y const son el tipo mas utilizado */


/*  */