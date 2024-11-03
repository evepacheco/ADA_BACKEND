/* • Ejercicio 6: Numero N
Hacer un programa que calcule la suma de los N primeros números
naturales, dónde N es el número límite ingresado por teclado*/

const prompt = require('prompt-sync')()


let numeroNaturales= []

for (let index = 0; index < 2; index++) {
    numeroNaturales[index]= parseFloat(prompt(` Ingrese el número natural ${index + 1}:` ))
    
}

const Total = (numeroNaturales) => {
let suma = 0
for (let index = 0; index < numeroNaturales.length; index++) {
    suma += numeroNaturales[index];
    
}
return suma
}
console.log(`El total de la suma de numeros naturales es: ${Total(numeroNaturales)}`);




 
