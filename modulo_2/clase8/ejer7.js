/*  Ejercicio 7: 
Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
kg a libras, Pista: 2.20462)
 */
const prompt = require('prompt-sync')({ sigint: true });
let pesoUsuario = parseFloat(prompt("Ingrese su peso: "));
let pesoLibras = 2.20462;

let resultadoLibra = pesoUsuario * pesoLibras;
console.log(`El peso del usuario es: ${resultadoLibra} en libras`);
