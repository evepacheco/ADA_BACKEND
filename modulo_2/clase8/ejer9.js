/* Ejercicio 9: 
Define una constante PI con el valor de pi (3.14159). Pide al usuario 
que ingrese el radio de un círculo y calcula su área y perímetro 
utilizando la constante PI */



const prompt = require('prompt-sync')({ sigint: true });
const PI = 3.14159;
let radio= parseFloat(prompt("Ingrese el radio del circulo: "));

let perimetro= PI*(radio*radio);
let area = PI*(radio*2); 

console.log("El área del circulo es:"+ area);
console.log("El erimetro del circulo es: "+ perimetro);