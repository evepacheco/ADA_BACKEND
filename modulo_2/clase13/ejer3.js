
/* Ejercicio 3: Número secreto
Escribí un programa que piense un número de forma aleatoria del 1 al 10 y 
le pida al usuario que lo trate de adivinar. Si el número es correcto debe 
imprimir en la consola “Felicitaciones, ¡ese era!", de lo contrario, debe 
imprimir "Lo siento, ¡intenta nuevamente!"
*/

const prompt = require('prompt-sync')();

let numeroAleatorio = 5;
let numeroUsuario= parseInt(prompt("Ingrese el numero: "));

if (numeroUsuario=== numeroAleatorio) {
    console.log("Felicitaciones, ¡ese era!");
} else {
    console.log("Lo siento, ¡intenta nuevamente!");
}