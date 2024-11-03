/* • Ejercicio 5: Números Naturales
Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra 
que muestre lo mínimo que le falta para ser un número de 2 cifras; de lo 
contrario, que muestre lo mínimo que le falta para ser un número de 3 cifras. 
Considerar que el usuario ingresa números de hasta dos cifras.*/


const prompt = require('prompt-sync')();
let numero= parseInt(prompt("Ingrese su numero de dos cifra : "));

if (numero < 10  ) {
    let faltaDosCifras = 10 - numero
    console.log(` falta ${faltaDosCifras} para ser un numero de dos cifras`); 
} else{
    let faltaTresCifras = 100 - numero
    console.log(`falta ${faltaTresCifras} para ser un numero de tres cifra`);
}