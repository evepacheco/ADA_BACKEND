/*• Ejercicio 4:
Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.*/

const prompt = require ("prompt-sync")({ sigint: true });

let edad = parseFloat( prompt ("Ingrese edad de su perro: "))

function edadPerruno(edad) {
    edadPerruno = edad*7
    return edadPerruno +" años"
    
} console.log(edadPerruno(edad));