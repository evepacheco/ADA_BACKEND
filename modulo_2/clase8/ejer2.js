/*• Ejercicio 2: 
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
valores numéricos de tu elección. Pide al usuario que ingrese un 
número y verifica si está dentro del rango definido por las constante */

const prompt = require('prompt-sync')({ sigint: true });
const RANGO_MINIMO= 10;
const RANGO_MAXIMO= 25;

let numero=parseFloat(prompt(`Ingrese un número: `));

if (numero>=RANGO_MINIMO && numero<=RANGO_MAXIMO) {
    console.log(`El número esta dentro del rango solicitado`);
}else{
    console.log(`El número no esta dentro del rango solicitado`);
}

