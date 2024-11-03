/*Ejercicio: Calculadora de Descuento

Escribe un programa que calcule el precio final de un producto después 
de aplicar un descuento. Pide al usuario que ingrese el precio original 
del producto y el porcentaje de descuento, y muestra el precio final*/

const prompt = require('prompt-sync')();

//1. Pedir al usuario que ingrese el precio original
let precioOriginal = parseFloat(prompt('Ingrese el precio original del produnto: '));

//2. Pedir al usuario el porcentaje de descueto.
let porcentajeDesc= parseFloat(prompt('Ingrese el porcentaje de descuento:  '))

//3.Calcular descuento.

let descuento = (precioOriginal*porcentajeDesc)/100

//4. Calcular el precio final

let precioFinal = precioOriginal - descuento;

//5. Mostrar en consola

console.log('El precio final después del descuento es :', precioFinal);