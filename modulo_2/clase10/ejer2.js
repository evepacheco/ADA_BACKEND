/* Ejercicio 2: Switch
Usando la estructura switch, crea un programa en el que si un usuario 
ingresa "casa", "perro", "pelota", "árbol" o "genio", nos devuelva la 
misma palabra traducida al idioma inglés.
En caso de que la palabra sea distinta a la esperada, mostrarle un 
mensaje que le informe que la palabra ingresada es incorrecta.
 */


const prompt = require('prompt-sync')({ sigint: true });
let palabraUsuario = prompt("Ingrese palabra a traducir(casa/pelota/árbol/genio): ")

switch (palabraUsuario) {
    case "casa":
        console.log("Traducción al idioma inglés: home.");
        break;
    case "perro":
        console.log("Traducción al idioma inglés: dog.");
        break;
    case "pelota":
        console.log("Traducción al idioma inglés: ball.");
        break;
    case "arbol":
        console.log("Traducción al idioma inglés: tree.");
        break;

    case "genio":
        console.log("Traducción al idioma inglés: genius.");
        break;
default:
console.log("La palabra ingresada no es la solicitada");

}