/*Ejercicio 4: Ordenar una Lista de Números
Crea un script en Node.js que permita al usuario ingresar una lista de 
números separados por comas. Ordena los números de menor a mayor 
y muestra la lista ordenada.  */


const readlineSync = require('readline-sync');
const entrada = readlineSync.question('Ingrese una lista de numeros separados por comas: ');
const numeros = entrada.split(',').map(num => parseInt(num.trim(), 10));
numeros.sort((a,b) => a - b);   // Ordena de menor a mayor
console.log(`Lista de números ordenados: ${numeros.join(', ')}`);