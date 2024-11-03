//1) Crear una función que pida un valor por parámetro y muestre los 
//10 números siguientes.

const prompt = require("prompt-sync")();

let numero = parseInt(prompt(" Igrese un numero: "));

let numeroSiguientes =[];

function valor(numero) {
    for (i = numero; i <=numero + 10 ; i++) {
        numeroSiguientes.push(i);
    }
        return numeroSiguientes
   
    
}console.log(valor(numero));