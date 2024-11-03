/* • Ejercicio 10 - Cálculo de Descuento: Escribe un programa que 
calcule el precio final de un producto después de aplicar un descuento. 
Pide al usuario que ingrese el precio original y el porcentaje de 
descuento, y muestra el precio final.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi:
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);*/


const prompt = require('prompt-sync')({ sigint: true });
let precioOriginal=parseFloat(prompt(`Ingrese el precio original del producto: `));
let porcentajeDescuento=parseFloat(prompt(`Ingrese el porcentaje de descuento: `));

let montoDescuento= precioOriginal*(porcentajeDescuento/100);//se calcula lo que debe desconttar
let precioFinal= precioOriginal-montoDescuento

console.log(`El precio final con el descuento aplicado es de :${precioFinal}`);