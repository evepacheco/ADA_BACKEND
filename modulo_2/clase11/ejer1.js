/*• Ejercicio 1:
Crear una función que convierta pulgadas en centímetros. Recibe por
parámetro pulgadas y retorna su equivalente en centímetros.*/
// 1 pulgada = 2.54cm


const prompt = require ("prompt-sync")({ sigint: true });

let pulgadas = parseFloat(prompt("Ingrese pulgadas que quiera convertir a centimetros: "));

function aCentimetros(pulgadas) {
    cm = pulgadas*2.54
    return cm + " cm"
    
}
console.log(aCentimetros(pulgadas))