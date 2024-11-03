/*• Ejercicio 3:
Crear una función que recibe un string y devuelve la misma frase pero con
admiración.*/

const prompt = require ("prompt-sync")({ sigint: true });

let string = prompt( "Ingrese su frase : ")

function frase(string) {
    return "¡" + string + "!" 
}

console.log(frase (string));