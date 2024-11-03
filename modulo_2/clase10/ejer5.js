/*   Ejercicio 5: If Ternario
Escribe un programa que lea una nota (entero entre 0 y 100) e imprima 
el equivalente en letras siguiendo esta escala:
✓ A si la nota está entre 90 y 100
✓ B si la nota está entre 80 y 89
✓ C si la nota está entre 70 y 79
✓ D si la nota está entre 60 y 69
✓ F si la nota está entre 0 y 59
Utiliza operadores ternarios para determinar la calificación en letras.*/



const prompt = require('prompt-sync')({ sigint: true });
let nota = parseInt(prompt("Ingrese su nota: "));

nota >= 90 && nota <= 100 ? console.log("Calificación A") : "";

nota >= 80 && nota <= 89 ? console.log("Calificación B") : "";

nota >= 70 && nota <= 79 ? console.log("Calificación C") : "";

nota >= 60 && nota <= 69 ? console.log("Calificación D") : "";

nota >= 0 && nota <= 59 ? console.log("Calificació F") : "";




