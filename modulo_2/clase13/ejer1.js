/*• Ejercicio 1: Conversor de monedas
Solicita al usuario un monto en dólares y una tasa de cambio a pesos. Usa 
una función flecha para convertir el monto a pesos.*/


const prompt = require('prompt-sync')();

const convertirADolares = (monto, tasa ) => monto * tasa 
let monto = parseFloat(prompt("Ingresa tu monto en dolares : "))
let tasa = parseFloat(prompt("Ingrese la tasa de cambio a pesos : "));

let resultado = convertirADolares(monto,tasa) 

console.log(`El monto en pesos es : ${resultado}` );