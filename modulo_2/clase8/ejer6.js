/* Ejercicio 6: 
Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
edad. Muestra un mensaje personalizado según el caso. */

const prompt = require('prompt-sync')({ sigint: true });
let edadUsuario=parseFloat(prompt("Ingrese su edad: "));

if (edadUsuario>=18) {
    console.log("Edad permitida");
}else{
    console.log("Edad denegada");
}