/* • Ejercicio 2:
Crear una función que recibe un string y lo convierte en una URL. Ej: “pepito”
es devuelto como “http://www.pepito.com”*/

const prompt = require ("prompt-sync")({ sigint: true });

let palabra = prompt(" Ingrese su palabra : ")

function URL (palabra) {
    return "http://www." + palabra + ".com";
}

console.log (URL(palabra)); 