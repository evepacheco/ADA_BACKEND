/* Ejercicio 9: 
En este ejercicio tienes un array ‘colores’ que contiene nombres de 
diferentes colores. Tu tarea es realizar las siguientes operaciones:
✓ Imprimir todos los colores del array.
✓ Modificar el primer color del array a "blanco".
✓ Agregar dos nuevos colores al final del array: "negro" y "gris"*/

let colores=["rojo","verde","azul","amarillo"];

console.log(colores);

let colorRojo= colores.shift()
let colorBlanco=colores.unshift("blanco");

console.log(colores);

let agregadosColores= colores.push("negro","gris");
console.log(colores);





